# Configuration and integrations

## Site configuration

Edit [`src/config.yaml`](../../src/config.yaml) for the site name and URL, base path, trailing-slash policy, SEO defaults, locale, blog routes/features, theme, and analytics settings. The custom loader in `vendor/integration/` merges those values with defaults and exposes `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, and `ANALYTICS` through `astrowind:config`.

Use `src/utils/permalinks.ts` for internal page, blog, taxonomy, and asset URLs so the configured base path and slash policy stay consistent.

## Astro and Markdown integrations

[`astro.config.ts`](../../astro.config.ts) registers:

- `@astrojs/mdx` for `.mdx` pages and posts.
- `@astrojs/sitemap` for the generated sitemap.
- `astro-icon` with local SVGs and configured Tabler/Flat Color icon sets.
- Astro's built-in HTML compression and Vite's Oxc/Lightning CSS minifiers for production output.
- The local AstroWind integration in `vendor/integration/`.

The `@tailwindcss/vite` plugin is configured under `vite.plugins`, not in Astro's integration list. Astro's Sätteri Markdown processor is configured in `astro.config.ts`. The `readingTimeMdastPlugin` adds reading-time frontmatter, and `responsiveTablesHastPlugin` wraps rendered tables in a scrollable container; both are implemented in `src/utils/frontmatter.ts`. The Astro Fonts API self-hosts Inter as configured in `astro.config.ts`.

Client-side navigation uses Astro's `<ClientRouter />`. Prefetching is limited to the logo and main navigation links, on hover/focus, so opening a page does not prefetch every visible link. Partytown is added only when `analytics.vendors.googleAnalytics.partytown` is explicitly set to `true`; the default is false so it adds no runtime assets to the normal build. Markdown and MDX use Sätteri; this project has no Unified/Remark/Rehype plugins, so `@astrojs/markdown-remark` is intentionally not installed.

## TypeScript and linting

The project pins the TypeScript 7.1 beta and registers `@astrojs/ts-content-mapper` for `.astro` files in `tsconfig.json`. `npm run check:types` runs `astro sync` first to generate the content and route types needed on a clean checkout, then runs TypeScript with `--runExternalCode` to execute the mapper. This is an experimental compiler and framework integration. `@astrojs/check` currently declares TypeScript 5/6 peer support, not TypeScript 7, so the project keeps the TypeScript 7 mapper rather than forcing an unsupported checker install.

Oxlint with `oxlint-tsgolint` is the only linter. It checks JavaScript and TypeScript plus script blocks in `.astro` files; it does not lint Astro templates. Biome formats JavaScript, TypeScript, and JSON. Prettier formats Astro templates, CSS, Markdown, and YAML. These formatter scopes do not overlap; Tailwind CSS v4 directives and Astro templates remain with Prettier because Biome's support for these formats is experimental. `astro build` remains the validation for Astro templates and routes. The TypeScript wrapper allowlists only the currently observed diagnostics from `@vercel/analytics`, `@vercel/speed-insights`, and `astro-seo` caused by the TypeScript 7.1 mapper; other dependency diagnostics and all project diagnostics fail the check.

## Styling and images

Tailwind theme tokens and utilities are defined in `src/assets/styles/tailwind.css`; site color and font variables are in `src/components/CustomStyles.astro`. `src/components/common/Image.astro` handles local Astro assets and remote images through Unpic or Astro's image service. Keep allowed remote domains synchronized with `astro.config.ts` when changing image providers.

For feature-specific changes, use the matching procedure in `.agents/skills/` rather than duplicating it here.
