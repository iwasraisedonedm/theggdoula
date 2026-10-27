---
name: disable-blog
description: Disable blog route generation and navigation through existing site config.
---

# Disable the blog

Do this only when blog removal is explicitly requested; it changes public routes and content behavior.

1. Read [content and routes](../../../docs/engineering/content-and-routes.md) and inspect `blogConfig` in `src/config/site.ts`, `src/utils/blog.ts`, and the blog routes under `src/pages/[...blog]/`.
2. Set `blogConfig.enabled` to `false` and check dependent route helpers before changing feature flags.
3. Inspect `src/navigation.ts`, layouts, and route links for blog entry points. Change only links within the requested scope.
4. Keep post source files unless content removal is explicitly requested; disabling routes does not require deleting content.
5. Run `npm run check` and `npm run build`, then inspect emitted routes under `dist/`.

The current blog lives under `/resources/blog/`; legacy `/blog`, `/category`, and `/tag` URLs are redirects configured in `vercel.json`.
