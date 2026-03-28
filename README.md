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

Editorial Brutalism — typography-driven design with intentional color and purposeful motion.

- **Fonts:** Instrument Serif (headlines) + DM Sans (body), self-hosted via Fontsource
- **Accent:** Vermillion — warm, distinctive, not the typical tech-blue
- **Theme:** Dark/light toggle with `localStorage` persistence and flash prevention
- **Layout:** Clean editorial grid, solid card backgrounds with accent borders

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
