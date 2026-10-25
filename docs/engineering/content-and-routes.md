# Content and routes

## Blog collection

The only configured content collection is `post` in [`src/content.config.ts`](../../src/content.config.ts). Its glob loader reads `.md` and `.mdx` files directly from [`src/data/post/`](../../src/data/post/).

Each post requires a non-empty `title`, `excerpt`, and `publishDate`; dates use `z.coerce.date()` so YAML strings and parsed dates are both validated. `draft` defaults to `false`, and `tags` defaults to an empty list. `updateDate`, `image`, `imageAlt`, `category`, `author`, and `metadata` are optional. A cover image must be a remote URL and must include an `imageAlt` value (use an empty string only when the image is decorative). Categories and tags use controlled enums (`Documentation`, `Resources`, `Tutorials`; lowercase topic tags) so listings do not accumulate spelling or case variants. The metadata schema covers SEO title/canonical/robots fields, Open Graph, and Twitter values. Check the schema before adding frontmatter fields; unknown fields are not part of the post contract.

The schema imports `z` from `astro/zod`, keeping the Zod API aligned with Astro. Astro Editor reads the generated collection JSON schemas in `.astro/collections/`; run `npm run sync` after schema changes or before opening the project in Astro Editor. Field `.describe()` text is included for editor forms.

## Rendering and URLs

`src/utils/blog.ts` uses Astro's `getCollection()` and `render()` APIs. It filters drafts in the collection query before rendering, derives a slug from each collection ID, converts category and tag strings to route taxonomies, and sorts published entries newest first. Sätteri plugins in `src/utils/frontmatter.ts` add reading-time metadata and wrap tables in scrollable containers during Markdown processing.

`src/config.yaml` controls whether blog features are enabled, the listing/category/tag pathnames, pagination size, and post permalink pattern. Route generation is implemented in `src/pages/[...blog]/` and `src/utils/blog.ts`; shared permalink normalization is in `src/utils/permalinks.ts`.

## SEO and structured data

`src/components/common/Metadata.astro` supplies each layout with a canonical URL, title, description, robots directives, Open Graph metadata, and Twitter cards. `CommonMeta.astro` advertises the generated sitemap and RSS feed. Give each indexable route a unique description; Google may rewrite it and has no fixed character limit. The configured site URL and trailing-slash policy in `src/config.yaml` also feed canonical links and the generated sitemap. The home page declares separate `WebSite`, `Organization`, and visible `FAQPage` entities; post pages declare `BlogPosting`; blog routes with visible breadcrumbs declare `BreadcrumbList`. Route JSON-LD is emitted as one script per entity in the head.

Keep structured data aligned with content a visitor can see. Add author profile URLs, organization logos, contact details, or other properties only when the corresponding real information exists. `src/utils/structuredData.ts` builds route data and safely serializes it to prevent content from closing its script element. FAQPage remains useful for other parsers on genuine Q&A pages but is no longer a Google rich result. References: [Google's snippet and meta description guidance](https://developers.google.com/search/docs/appearance/snippet), [Google's general structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [Astro SEO guidance](https://llmbestpractices.com/frontend/astro), [Structured Data with JSON-LD](https://llmbestpractices.com/seo/structured-data), [Schema Markup Deep Dive](https://llmbestpractices.com/seo/schema-markup-deep), and [How to write meta descriptions](https://llmbestpractices.com/howto/write-meta-descriptions). The linked [Astro SEO overview](https://eastondev.com/blog/en/posts/dev/20251202-astro-seo-complete-guide/) and [Astro schema guide](https://agnitestudio.com/blog/astro-schema-markup/) informed the implementation review.

## Add or update a post

1. Inspect a nearby file in `src/data/post/` and follow its frontmatter and Markdown conventions.
2. Add or edit the `.md`/`.mdx` post in that directory.
3. Confirm its slug, category, tags, required publish date and excerpt, draft state, and image metadata agree with the collection schema and permalink settings.
4. Run `npm run check` and `npm run build`.

Repository engineering documentation belongs in root `docs/` as Markdown; it is not a second Astro content collection and is not published as a site route.
