---
name: add-blog-post
description: Add or update blog posts in the Astro content collection. Use for Markdown or MDX authoring, frontmatter, and route checks.
---

# Add a blog post

1. Read [Content and routes](../../../docs/engineering/content-and-routes.md) and inspect a recent post.
2. Add an `.md` or `.mdx` file under `src/data/post/`. Match `src/content.config.ts`; do not add undocumented frontmatter fields.
3. Set an accurate publish date, summary, image and alt text, category, tags, and author where available. Mark drafts with `draft: true`.
4. Use the configured permalink in `src/config.yaml` (currently `/resources/blog/%slug%`). Link only to existing routes and retain source citations for externally supported claims.
5. Run `npm run check` and `npm run build`.

Draft filtering, taxonomy routes, metadata, and sitemap behavior are implemented in `src/utils/blog.ts`, `src/pages/[...blog]/`, and `astro.config.ts`. Check those sources instead of assuming every generated archive or page is included in the sitemap.
