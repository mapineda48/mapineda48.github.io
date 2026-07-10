import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Backdrop — a full-screen WebGL "aura".
 *
 * A single fragment shader renders slow, domain-warped fractal noise tinted
 * with the site accent, plus a cursor-following glow, film grain and a vignette.
 * It reads the live theme colours from CSS variables and eases between them,
 * pauses when the tab is hidden, and freezes for prefers-reduced-motion.
 */

const VERT = /* glsl */ `
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform vec2  uRes;
  uniform float uTime;
  uniform vec2  uMouse;      // 0..1
  uniform vec3  uBg;
  uniform vec3  uAccent;
  uniform float uReduce;     // 1.0 => frozen

  // -- value noise + fbm ----------------------------------------------------
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0, amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    vec2 p  = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);

    float t = uTime * 0.02 * (1.0 - uReduce);
    vec2  m = (uMouse - 0.5);

    // domain warping — flowing organic bands
    vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(p * 1.6 + 2.0 * q + vec2(1.7, 9.2) + m * 0.35),
      fbm(p * 1.6 + 2.0 * q + vec2(8.3, 2.8) - m * 0.35)
    );
    float f = fbm(p * 1.6 + 2.0 * r + t * 0.6);
    f = smoothstep(0.05, 0.95, f);

    // base: mostly background, accent only glinting in the crests
    vec3 col = mix(uBg, uAccent, f * 0.20);

    // soft glow that trails the cursor
    vec2 gp = p - m;
    float glow = 0.05 / (0.05 + dot(gp, gp));
    col += uAccent * glow * 0.035;

    // subtle secondary accent pool, off-centre, for depth
    float pool = 0.10 / (0.10 + dot(p - vec2(0.55, -0.35), p - vec2(0.55, -0.35)));
    col += uAccent * pool * 0.02;

    // film grain
    col += (hash(gl_FragCoord.xy + fract(t)) - 0.5) * 0.018;

    // vignette so edges stay calm
    float vig = smoothstep(1.15, 0.25, length(uv - 0.5));
    col = mix(uBg, col, 0.35 + vig * 0.65);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function readVar(name: string): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return new THREE.Color(raw || "#000000");
}

export default function Backdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "low-power" });
    } catch {
      return; // no WebGL — the CSS background stays as a graceful fallback
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(DPR);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const bg = readVar("--bg");
    const accent = readVar("--accent");

    const uniforms = {
      uRes: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uBg: { value: bg.clone() },
      uAccent: { value: accent.clone() },
      uReduce: { value: reduce ? 1 : 0 },
    };
    // targets we ease toward on theme change
    const targetBg = bg.clone();
    const targetAccent = accent.clone();

    const material = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, depthTest: false });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w * DPR, h * DPR);
    };
    resize();
    window.addEventListener("resize", resize);

    // smoothed pointer
    const mouse = new THREE.Vector2(0.5, 0.5);
    const onMove = (e: PointerEvent) => {
      mouse.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // re-read colours when the theme flips
    const themeObserver = new MutationObserver(() => {
      targetBg.copy(readVar("--bg"));
      targetAccent.copy(readVar("--accent"));
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let raf = 0;
    let last = 0;
    const clock = new THREE.Clock();

    const frame = () => {
      const dt = clock.getDelta();
      uniforms.uTime.value += dt;

      // ease pointer + theme colours
      uniforms.uMouse.value.lerp(mouse, 0.05);
      uniforms.uBg.value.lerp(targetBg, 0.06);
      uniforms.uAccent.value.lerp(targetAccent, 0.06);

      renderer.render(scene, camera);
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduce) {
        clock.getDelta(); // discard the gap
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) {
      renderer.render(scene, camera); // one static frame
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
      material.dispose();
      quad.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} id="backdrop" aria-hidden="true" />;
}
