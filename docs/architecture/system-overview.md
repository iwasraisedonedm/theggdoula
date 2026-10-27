# System overview

## Runtime and ownership

Astro builds a static site (`output: 'static'` in [`astro.config.ts`](../../astro.config.ts)). Routes live in [`src/pages/`](../../src/pages/), shared shells in [`src/layouts/`](../../src/layouts/), and reusable UI in [`src/components/`](../../src/components/). There is no server adapter.

[`src/config/site.ts`](../../src/config/site.ts) is the typed owner for site identity, metadata, locale, blog routes, analytics, and theme defaults. [`src/utils/permalinks.ts`](../../src/utils/permalinks.ts) centralizes canonical URL and internal permalink construction.

`Layout.astro` owns the document shell, metadata, fonts, theme behavior, analytics, and Astro view transitions. `PageLayout.astro` composes the shared header and footer. Tailwind CSS v4 loads through the Vite plugin.

## Content and routes

[`src/content.config.ts`](../../src/content.config.ts) defines the `post` collection, loaded from `src/data/post/`. [`src/utils/blog.ts`](../../src/utils/blog.ts) normalizes entries and excludes drafts. Route files in `src/pages/[...blog]/` generate the listing, article, category, tag, and pagination pages. See [content and routes](../engineering/content-and-routes.md) for the schema and authoring process.

## Build flow

`npm run check` runs token validation, Astro sync, TypeScript mapping, tests, lint, and formatting checks. `npm run build` regenerates design tokens and produces the static site in `dist/` for Vercel's Git integration.

Astro configuration includes MDX, sitemap, icon loading, HTML compression, Tailwind's Vite plugin, and the Sätteri Markdown processor. Sätteri adds reading-time metadata and wraps rendered tables for horizontal scrolling. Vercel Analytics and Speed Insights are included only in Vercel builds.
