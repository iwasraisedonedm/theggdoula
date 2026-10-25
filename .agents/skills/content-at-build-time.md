# Content Is Read at Build Time

Blog posts are an Astro **Content Collection** (`src/content.config.ts`, `glob()` loader over `src/data/post`). The collection is compiled during `astro build` and baked into `dist/`. Nothing re-reads `src/data/post` afterwards — not the static output, and not SSR either.

## Consequences

- Adding files to `src/data/post` after the build does **not** publish them. A rebuild is required.
- The folder is `src/data/post`; `src/content/post` no longer exists (Astro 5 migration).

## Ways to publish new posts

| Approach                        | How                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| Rebuild on commit (recommended) | Push posts to Git; the configured Vercel Git integration builds and deploys the site |
| Rebuild on demand               | Trigger `npm run build` (CI job, deploy hook or webhook from your CMS/editor)        |
| Remote content                  | Replace the `glob()` loader with a loader that fetches from a CMS/API at build time  |

## Notes

- `getCollection('post')` is wrapped by `fetchPosts()` in `src/utils/blog.ts`, which caches the result for the whole build.
- Drafts (`draft: true`) are filtered out in `fetchPosts()`.
- AstroWind v1 is a static template and does not support SSR (on-demand rendering); SSR support is planned for AstroWind v2. If you need runtime content today, use a rebuild trigger or a custom build-time loader.
