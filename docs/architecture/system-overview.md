# System overview

## Runtime and source ownership

Astro renders this site as a static build (`output: 'static'` in [`astro.config.ts`](../../astro.config.ts)). Routes live in [`src/pages/`](../../src/pages/); shared page composition lives in [`src/layouts/`](../../src/layouts/); reusable UI and page sections live in [`src/components/`](../../src/components/). There is no server adapter in the Astro configuration.

`Layout.astro` provides shared styles, metadata, fonts, theme handling, analytics, and Astro view transitions. Page layouts compose the shared header, footer, and page widgets. Tailwind CSS v4 is loaded through the Vite plugin configured in `astro.config.ts`.

## Configuration flow

[`src/config.yaml`](../../src/config.yaml) is read by [`vendor/integration/utils/loadConfig.ts`](../../vendor/integration/utils/loadConfig.ts). `configBuilder.ts` merges defaults for site, metadata, locale, blog, UI, and analytics settings. The custom integration in [`vendor/integration/index.ts`](../../vendor/integration/index.ts) exposes those values through the `astrowind:config` virtual module and passes the site URL, base path, and trailing-slash setting into Astro.

Use `src/config.yaml` for supported site settings. Change the integration or builder only when the setting model or loading behavior itself must change.

## Content flow

[`src/content.config.ts`](../../src/content.config.ts) currently defines the `post` collection, loaded from `src/data/post/`. [`src/utils/blog.ts`](../../src/utils/blog.ts) reads that collection, normalizes posts and taxonomy, sorts by publish date, and excludes drafts. Blog route files in `src/pages/[...blog]/` generate the list, post, category, and tag pages. See [content and routes](../engineering/content-and-routes.md) for the schema and authoring procedure.

## Build flow

`npm run check` begins by running `astro sync`, which generates the content and route types before the TypeScript mapper checks project files. It then runs Oxlint and the scoped Biome and Prettier format checks. `npm run build` runs Astro's content sync and static build, then emits the site to `dist/` for Vercel's Git integration.

The Astro config combines MDX, sitemap, icon loading, HTML compression, Tailwind's Vite plugin, and the custom AstroWind config integration. Sätteri adds reading-time metadata and wraps rendered tables for horizontal scrolling. Content is loaded through Astro's scoped `glob()` collection loader in `src/content.config.ts`.
