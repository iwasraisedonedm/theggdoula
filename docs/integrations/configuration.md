# Configuration and integrations

## Site configuration

Edit [`src/config.yaml`](../../src/config.yaml) for the site name and URL, base path, trailing-slash policy, SEO defaults, locale, blog routes/features, theme, and analytics settings. The custom loader in `vendor/integration/` merges those values with defaults and exposes `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, and `ANALYTICS` through `astrowind:config`.

Use `src/utils/permalinks.ts` for internal page, blog, taxonomy, and asset URLs so the configured base path and slash policy stay consistent.

## Astro and Markdown integrations

[`astro.config.ts`](../../astro.config.ts) registers:

- `@astrojs/mdx` for `.mdx` pages and posts.
- `@astrojs/sitemap` for the generated sitemap.
- `astro-icon` with local SVGs and configured Tabler/Flat Color icon sets.
- `astro-compress` for CSS, HTML, and JavaScript output.
- The local AstroWind integration in `vendor/integration/`.

The `@tailwindcss/vite` plugin is configured under `vite.plugins`, not in Astro's integration list. The Markdown processor runs `readingTimeRemarkPlugin` and `responsiveTablesRehypePlugin` from `src/utils/frontmatter.ts`. The Astro Fonts API self-hosts Inter as configured in `astro.config.ts`. Partytown is installed but its integration is gated by `hasExternalScripts = false`.

## Styling and images

Tailwind theme tokens and utilities are defined in `src/assets/styles/tailwind.css`; site color and font variables are in `src/components/CustomStyles.astro`. `src/components/common/Image.astro` handles local Astro assets and remote images through Unpic or Astro's image service. Keep allowed remote domains synchronized with `astro.config.ts` when changing image providers.

For feature-specific changes, use the matching procedure in `.agents/skills/` rather than duplicating it here.
