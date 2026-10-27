---
name: deploy-with-base-path
description: Configure Astro base paths and trailing-slash behavior.
---

# Configure a base path

Use this when the site is served below a domain root or when its slash policy changes.

1. Update `siteConfig.basePath` and `siteConfig.trailingSlash` in `src/config/site.ts`.
2. `astro.config.ts` passes those values to Astro's native `base` and `trailingSlash` options.
3. Keep all internal route and public asset URLs on `getPermalink()` or `getAsset()` from `src/utils/permalinks.ts`.
4. Update `public/robots.txt` with the sitemap URL that matches the deployed base path.
5. Run `npm run check` and `npm run build`, then inspect `dist/` for correct page, asset, sitemap, and canonical URLs.

Astro-generated pagination URLs and `Astro.url` values already include Astro's base path. Do not pass those values through the permalink helpers a second time.
