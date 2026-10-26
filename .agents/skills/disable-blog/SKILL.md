---
name: disable-blog
description: Disable blog route generation and navigation through the existing config. Use only when blog removal is explicitly requested.
---

# Disable the blog

Do this only when explicitly requested; it changes public routes and content behavior.

1. Read [Content and routes](../../../docs/engineering/content-and-routes.md) and inspect `src/config.yaml`, `src/utils/blog.ts`, and `vendor/integration/utils/configBuilder.ts`.
2. Set `apps.blog.isEnabled` to `false`. Check which subfeatures are used by `getStaticPathsBlog*()` before changing their flags.
3. Inspect `src/navigation.ts`, layouts, and route links for blog entry points. Remove or change only links included in the requested scope.
4. Keep post source files unless removal is explicitly requested; disabling route generation does not require deleting content.
5. Run `npm run check` and `npm run build`, then inspect emitted routes under `dist/`.

The blog base path is configurable and currently `/resources/blog/`; do not assume legacy `/blog`, `/category`, or `/tag` paths.
