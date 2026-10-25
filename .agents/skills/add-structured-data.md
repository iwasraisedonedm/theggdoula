# Add Structured Data (JSON-LD)

The home page emits separate `WebSite`, `Organization`, and visible `FAQPage` entities in `<head>`. Blog posts and listing pages emit `BlogPosting` and `BreadcrumbList` entities in `<head>` when a visible breadcrumb trail is present. `src/components/common/Metadata.astro` handles title, description, canonical, robots, Open Graph (including `article:*`) and Twitter through `astro-seo`. Anything else (Product, HowTo…) is added as described below.

## What the home page ships

`src/pages/index.astro` emits `WebSite` and `Organization` JSON-LD through the layout's `head` slot, built from `src/config.yaml` (`site.name`, `site.site`, and the X handle in `metadata.twitter`). Extend the schema objects in that file to add a description, a real organization logo, more `sameAs` profiles or contact data.

## Site-wide (Organization / WebSite)

The home page already emits `WebSite` (with an `Organization` publisher) from `site.name` and `site.site`. To add an `Organization` with logo, social profiles or contact data, extend the `structuredData` array in `src/pages/index.astro`; to emit something on every page, render `StructuredData` inside `src/layouts/Layout.astro` next to the `head` slot.

## Per page

`src/components/common/StructuredData.astro` takes a `schema` object (or an array of them) and prints one safely escaped script per entity. `src/utils/structuredData.ts` provides the serializer and builders for visible breadcrumb and FAQ data. Pass it through the `head` slot that `Layout.astro` and `PageLayout.astro` expose:

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import StructuredData from '~/components/common/StructuredData.astro';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Acme',
  url: 'https://acme.example',
  logo: 'https://acme.example/logo.png',
};
---

<Layout metadata={metadata}>
  <StructuredData slot="head" schema={schema} />…
</Layout>
```

Keep page-level structured data in `<head>`. The `FAQs` widget retains an optional body-level schema mode for standalone use; prefer the page head slot for public route templates.

## Blog posts and breadcrumbs

`src/pages/[...blog]/index.astro` builds `BlogPosting` from front matter (`publishDate`, `updateDate`, `author`, `category`, `tags`, `image`) and combines it with the breadcrumb data generated from the visible trail. `StructuredData` outputs separate script blocks for these entities. Extend only with fields supported by visible content:

```ts
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.publishDate.toISOString(),
  dateModified: (post.updateDate ?? post.publishDate).toISOString(),
  author: post.author ? { '@type': 'Person', name: post.author } : undefined,
  image: typeof image === 'string' ? image : image?.src,
  mainEntityOfPage: String(url),
};
```

Use `buildBreadcrumbSchema()` for matching visible breadcrumb items and render it through `StructuredData`. Use `serializeJsonLd()` only when a component needs to emit JSON-LD directly. Keep data limited to properties supported by visible page content.

## Notes

- Use `serializeJsonLd()` for `set:html`; it escapes script-closing characters.
- Keep FAQ markup only for visible Q&A content; Google no longer shows FAQ rich results.
- Validate schema vocabulary with https://validator.schema.org/. Use Google's Rich Results Test only for currently supported result types.
- Astro's built-in HTML compression preserves `application/ld+json` script content.
