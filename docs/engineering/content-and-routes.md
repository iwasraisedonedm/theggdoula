# Content and routes

## Blog collection

The only configured content collection is `post` in [`src/content.config.ts`](../../src/content.config.ts). Its glob loader reads `.md` and `.mdx` files directly from [`src/data/post/`](../../src/data/post/).

Each post requires a non-empty `title`, `excerpt`, and `publishDate`; dates use `z.coerce.date()` so YAML strings and parsed dates are both validated. `draft` defaults to `false`, and `tags` defaults to an empty list. `updateDate`, `image`, `imageAlt`, `category`, `author`, and `metadata` are optional. A cover image may be a remote URL or root-relative public path and must include an `imageAlt` value (use an empty string only when the image is decorative). Categories and tags use controlled enums so listings do not accumulate spelling or case variants; the current set includes the doula topics plus the retained values used by archived template drafts. The metadata schema covers SEO title/canonical/robots fields, Open Graph, and Twitter values. Check the schema before adding frontmatter fields; unknown fields are not part of the post contract.

The schema imports `z` from `astro/zod`, keeping the Zod API aligned with Astro. Astro Editor reads the generated collection JSON schemas in `.astro/collections/`; run `npm run sync` after schema changes or before opening the project in Astro Editor. Field `.describe()` text is included for editor forms.

## Rendering and URLs

`src/utils/blog.ts` uses Astro's `getCollection()` and `render()` APIs. It filters drafts in the collection query before rendering, derives a slug from each collection ID, converts category and tag strings to route taxonomies, and sorts published entries newest first. Sätteri plugins in `src/utils/frontmatter.ts` add reading-time metadata and wrap tables in scrollable containers during Markdown processing.

`src/config.yaml` sets the canonical list route to `/resources/blog/`, article paths to `/resources/blog/<slug>/`, and category/tag archives below that directory. It also controls pagination size. Route generation is implemented in `src/pages/[...blog]/` and `src/utils/blog.ts`; shared permalink normalization is in `src/utils/permalinks.ts`. The collection contains draft AstroWind sample articles and published doula articles; draft entries are filtered in `fetchPosts()`. The journal features the first published post in the first page's paginated data and omits it only from the adjacent feed rendering, preserving Astro's dataset and configured page size. Its category sidebar derives deduplicated category counts from the published collection, and numeric page links are derived from Astro's resolved pagination URLs so base paths and trailing-slash policy remain intact. `astro.config.ts` excludes noindex tag archives and paginated listings from the sitemap; canonical articles, the main listing, and category archives remain included.

## SEO and structured data

`src/components/common/Metadata.astro` supplies each layout with a canonical URL, title, description, robots directives, Open Graph metadata, and Twitter cards. `CommonMeta.astro` advertises the generated sitemap and RSS feed. The configured site URL and trailing-slash policy in `src/config.yaml` also feed canonical links and the sitemap. Current JSON-LD is route-specific: blog articles emit `BlogPosting` and breadcrumbs; selected resource and testimonial routes emit their implemented schemas. The homepage currently emits no JSON-LD. Inspect the route source before documenting or extending schema behavior.

Keep structured data aligned with visible content. `src/utils/structuredData.ts` builds breadcrumb and FAQ data and safely serializes JSON-LD. Only add author profiles, organization details, or other claims when verified values exist. The [structured-data skill](../../.agents/skills/add-structured-data/SKILL.md) describes the current route patterns.

## Add or update a post

1. Inspect a nearby file in `src/data/post/` and follow its frontmatter and Markdown conventions.
2. Add or edit the `.md`/`.mdx` post in that directory.
3. Confirm its slug, category, tags, required publish date and excerpt, draft state, and image metadata agree with the collection schema and permalink settings. Link only to routes present in this checkout and retain citations for externally sourced claims.
4. Run `npm run check` and `npm run build`.

## Downloadable guides

`src/data/guides.ts` owns the six guide entries and their display metadata. The page at `src/pages/resources/guides/index.astro` groups them by topic, features _The Fourth Trimester_, and renders reusable cards from `src/components/resources/GuideCard.astro`. PDFs and their cover-page previews are stored at `public/downloads/guides/` and `public/images/guides/`. Keep recorded page counts aligned with the checked-in PDFs. Preview actions open the PDF, and download actions use the same local file.

Repository engineering documentation belongs in root `docs/` as Markdown; it is not a second Astro content collection and is not published as a site route.
