---
name: content-at-build-time
description: Explain how the static Astro blog collection is loaded and published. Use when changing or diagnosing content build behavior.
---

# Blog content is built statically

The `post` collection is loaded from `src/data/post/` by `src/content.config.ts`. Astro reads it during synchronization and build; the deployed static output does not reread the source files.

- A post added after deployment requires a new build and deployment.
- `src/utils/blog.ts` filters drafts before rendering and caches the collection for the build.
- The site uses static output (`output: 'static'` in `astro.config.ts`) and has no server adapter or runtime content loader.
- Blog schema, routes, and permalinks are documented in [Content and routes](../../../docs/engineering/content-and-routes.md).

Do not add SSR or a CMS loader unless the user requests that architecture change.
