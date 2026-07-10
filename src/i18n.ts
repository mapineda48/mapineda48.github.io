export const translations = {
  en: {
    meta: {
      title: "mapineda48 — Independent Software Engineer",
      description:
        "Building robust, developer-first systems. Modern architectures, native ESM, and isolated multi-tenant data structures.",
    },
    nav: {
      brand: "~/mapineda48",
    },
    hero: {
      status: "available for work",
      location: "colombia · utc-5",
      statement: ["Building robust,", "developer-first", "systems."],
      sub: "Independent software engineer specializing in modern architectures, native ESM, and highly isolated multi-tenant data structures.",
      links: [
        { label: "github", href: "https://github.com/mapineda48" },
        { label: "linkedin", href: "https://linkedin.com/in/mapineda48" },
        { label: "email", href: "mailto:mapineda48@gmail.com" },
      ],
    },
    stack: {
      index: "01",
      label: "stack",
      statement: "Opinionated developer environment.",
      note: "Production-grade only. Every tool below earns its place.",
      entries: [
        { key: "runtime", value: "Node.js — ESM native · .NET" },
        { key: "language", value: "TypeScript, strict · C#" },
        { key: "data", value: "PostgreSQL — multi-tenant, isolated by design" },
        { key: "infra", value: "Azure · Terraform · Docker" },
        { key: "principle", value: "module isolation over monoliths" },
      ],
    },
    work: {
      index: "02",
      label: "selected work",
      projects: [
        {
          name: "agape.js",
          line: "Open-source web application framework focused on speed and module isolation.",
          meta: "typescript · framework",
          href: "https://github.com/mapineda48/agape.js",
        },
        {
          name: "swisswear",
          line: "Clean Architecture reference on .NET 10, Blazor Server and Azure.",
          meta: "c# · architecture",
          href: "https://github.com/mapineda48/swisswear",
        },
        {
          name: "devops",
          line: "Infrastructure as code — Terraform for Azure and Cloudflare, self-hosted monitoring.",
          meta: "hcl · infrastructure",
          href: "https://github.com/mapineda48/devops",
        },
      ],
    },
    footer: {
      index: "03",
      label: "contact",
      signature: "mapineda48 — local environment active.",
      email: "mapineda48@gmail.com",
      colophon: "© 2026 · built with astro · zero client-side js",
    },
  },

  es: {
    meta: {
      title: "mapineda48 — Ingeniero de Software Independiente",
      description:
        "Construyo sistemas robustos, developer-first. Arquitecturas modernas, ESM nativo y estructuras de datos multi-tenant aisladas.",
    },
    nav: {
      brand: "~/mapineda48",
    },
    hero: {
      status: "disponible para proyectos",
      location: "colombia · utc-5",
      statement: ["Construyo sistemas", "robustos,", "developer-first."],
      sub: "Ingeniero de software independiente, especializado en arquitecturas modernas, ESM nativo y estructuras de datos multi-tenant altamente aisladas.",
      links: [
        { label: "github", href: "https://github.com/mapineda48" },
        { label: "linkedin", href: "https://linkedin.com/in/mapineda48" },
        { label: "email", href: "mailto:mapineda48@gmail.com" },
      ],
    },
    stack: {
      index: "01",
      label: "stack",
      statement: "Un entorno de desarrollo con criterio.",
      note: "Solo grado producción. Cada herramienta se gana su lugar.",
      entries: [
        { key: "runtime", value: "Node.js — ESM nativo · .NET" },
        { key: "lenguaje", value: "TypeScript, estricto · C#" },
        { key: "datos", value: "PostgreSQL — multi-tenant, aislado por diseño" },
        { key: "infra", value: "Azure · Terraform · Docker" },
        { key: "principio", value: "aislamiento de módulos sobre monolitos" },
      ],
    },
    work: {
      index: "02",
      label: "trabajo seleccionado",
      projects: [
        {
          name: "agape.js",
          line: "Framework open-source de aplicaciones web, enfocado en velocidad y aislamiento de módulos.",
          meta: "typescript · framework",
          href: "https://github.com/mapineda48/agape.js",
        },
        {
          name: "swisswear",
          line: "Referencia de Clean Architecture en .NET 10, Blazor Server y Azure.",
          meta: "c# · arquitectura",
          href: "https://github.com/mapineda48/swisswear",
        },
        {
          name: "devops",
          line: "Infraestructura como código — Terraform para Azure y Cloudflare, monitoreo self-hosted.",
          meta: "hcl · infraestructura",
          href: "https://github.com/mapineda48/devops",
        },
      ],
    },
    footer: {
      index: "03",
      label: "contacto",
      signature: "mapineda48 — local environment active.",
      email: "mapineda48@gmail.com",
      colophon: "© 2026 · hecho con astro · cero js en el cliente",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type T = (typeof translations)[Lang];
