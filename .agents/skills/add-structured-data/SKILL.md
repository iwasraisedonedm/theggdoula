---
name: add-structured-data
description: Add route-specific JSON-LD that matches visible page content. Use when metadata or structured schema is requested.
---

# Add structured data

Structured data must describe content visible on the rendered route. Inspect current page output and `src/components/common/StructuredData.astro` before adding a schema.

## Current implementation

- `src/utils/structuredData.ts` provides safe JSON-LD serialization and builders for breadcrumbs and visible FAQs.
- Blog articles emit `BlogPosting` and visible breadcrumb data from `src/pages/[...blog]/index.astro`.
- Blog listing/article routes, the guides listing, the Better Birth Guide, and testimonials emit breadcrumb data where implemented. The resource routes define their route-specific schemas in their Astro files.
- The homepage currently has visible FAQs but does not emit `WebSite`, `Organization`, or `FAQPage` JSON-LD. Do not copy schema claims from old template instructions.

## Add or update a schema

1. Use the existing helper when the schema is a breadcrumb or FAQ; otherwise define a typed object near the route that owns the visible content.
2. Render `StructuredData` in the layout's `head` slot where possible. Do not emit a second copy of an entity already provided by the route.
3. Include only verified values. FAQ answers and claims must match visible page text.
4. Run `npm run check` and `npm run build`; validate schema syntax with the Schema.org validator when requested.
