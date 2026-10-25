# Content and routes

## Blog collection

The only configured content collection is `post` in [`src/content.config.ts`](../../src/content.config.ts). Its glob loader reads `.md` and `.mdx` files directly from [`src/data/post/`](../../src/data/post/).

Each post requires `title`. The schema also accepts optional `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `imageAlt`, `category`, `tags`, `author`, and `metadata`. The metadata schema covers SEO title/canonical/robots fields, Open Graph, and Twitter values. Check the schema before adding frontmatter fields; unknown fields are not part of the post contract.

## Rendering and URLs

`src/utils/blog.ts` uses Astro's `getCollection()` and `render()` APIs. It derives a slug from the collection ID, converts category and tag strings to route taxonomies, sorts newest first, and filters entries where `draft` is true. The remark plugin in `src/utils/frontmatter.ts` adds reading-time metadata during Markdown processing.

`src/config.yaml` controls whether blog features are enabled, the listing/category/tag pathnames, pagination size, and post permalink pattern. Route generation is implemented in `src/pages/[...blog]/` and `src/utils/blog.ts`; shared permalink normalization is in `src/utils/permalinks.ts`.

## Add or update a post

1. Inspect a nearby file in `src/data/post/` and follow its frontmatter and Markdown conventions.
2. Add or edit the `.md`/`.mdx` post in that directory.
3. Confirm its slug, category, tags, publish date, draft state, and image metadata agree with the collection schema and permalink settings.
4. Run `npm run check` and `npm run build`.

Repository engineering documentation belongs in root `docs/` as Markdown; it is not a second Astro content collection and is not published as a site route.
