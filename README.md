# mapineda48.de

Personal portfolio website for Miguel Angel Pineda — Software Developer & Tech Solutions Architect.

**Live:** [www.mapineda48.de](https://www.mapineda48.de)

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [React](https://react.dev) — Interactive islands (theme toggle, scroll animations)
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first styling
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [Motion](https://motion.dev) — Scroll-triggered reveal animations
- [Lucide React](https://lucide.dev) — Icon set

## Design

**The Index** — the site is treated like a typographic technical document: numbered
sections, monospaced metadata, oversized serif statements and generous negative space.
Minimal, original, and deliberate rather than the usual card-grid portfolio.

- **Three type registers:** Instrument Serif (display) · DM Sans (body) · system monospace (metadata)
- **Accent:** Vermillion — warm, distinctive, not the typical tech-blue
- **Theme:** Dark "ink" / light "paper" toggle with `localStorage` persistence and flash prevention
- **Signatures:** numbered sections, a capabilities "directory listing" that expands on hover,
  a giant `mailto:` as the closing CTA, live local-time status and a scroll-progress bar

## Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Deployment

Hosted on GitHub Pages. Pushes to `main` trigger automatic deployment.

## License

MIT
