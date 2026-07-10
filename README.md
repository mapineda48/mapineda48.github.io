# mapineda48.de

Personal site of Miguel Angel Pineda — Independent Software Engineer.

**Live:** [www.mapineda48.de](https://www.mapineda48.de)

## Design

**Local environment active** — an ultra-minimal, strict-dark manifesto rather than a
portfolio. Near-black canvas (`#050505`), a single surgical terminal-green accent, and
radical typographic contrast: massive geometric sans statements against fine monospaced
metadata. No skill bars, no card grids, no filler — every word earns its place.

- **Type:** Space Grotesk (display) · JetBrains Mono (metadata)
- **Sections:** one-statement hero → `01 / stack` as a config-style definition list →
  `02 / selected work` as hairline list rows → `03 / contact` with a giant `mailto:`
- **Motion:** a single IntersectionObserver fade-in — the only JavaScript shipped to the client
- **Performance:** static Astro output, zero frameworks, zero trackers

## Tech Stack

- [Astro](https://astro.build) — static site generator, plain `.astro` components
- Hand-written CSS custom properties — no utility framework, no animation library
- [TypeScript](https://www.typescriptlang.org) — typed i18n dictionary (EN / ES)

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
