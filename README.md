# Grit + Grace Doula

This repository contains the static website for Grit + Grace Doula, built with Astro 7 and Tailwind CSS 4. It includes service information, booking and inquiry links, educational resources, and a content-managed blog.

## Run locally

Use Node.js `>=22.23.4` and npm `11.6.2` (declared in `package.json`).

```sh
npm ci
npm run dev
```

Useful commands:

| Command           | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `npm run check`   | Type check, focused tests, lint, and formatting checks |
| `npm run build`   | Build the static site into `dist/`                     |
| `npm run preview` | Preview the production build locally                   |
| `npm run sync`    | Generate Astro content and route types                 |

## Source map

- `src/pages/` — Astro routes
- `src/layouts/` — shared page shells
- `src/components/` — shared UI, widgets, and service compositions
- `src/data/` — blog content and structured service/resource data
- `src/config/site.ts` — typed site, blog, metadata, locale, theme, and analytics settings
- `src/components/site/` and `src/components/home/` — shared site shell and homepage compositions

For project conventions and topic-specific references, start at the [engineering documentation index](docs/README.md). Agent entry-point instructions live in [AGENTS.md](AGENTS.md).
