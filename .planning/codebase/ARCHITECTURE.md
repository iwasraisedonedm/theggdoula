# Architecture

**Analysis Date:** 2026-10-26

## Shape

Astro uses file-based routes under `src/pages/` and builds a static site. Shared document and page composition is in `src/layouts/`; reusable controls, widgets, and domain sections are in `src/components/`. There is no server adapter.

## Data Flow

- Site/blog defaults are configured in `src/config.yaml`, loaded by the local integration in `vendor/integration/`, and exposed as `astrowind:config`.
- The blog collection is declared in `src/content.config.ts`; `src/utils/blog.ts` filters drafts and normalizes post and taxonomy data for route generation under `src/pages/[...blog]/`.
- Service content is centralized in `src/data/services.ts`; the services index, dynamic detail route, and service-specific compositions use that data.
- Metadata and structured data helpers live in `src/components/common/Metadata.astro` and `src/utils/structuredData.ts`.

## Ownership References

- Runtime and configuration flow: [`docs/architecture/system-overview.md`](../../docs/architecture/system-overview.md)
- Composition and module boundaries: [`docs/architecture/components.md`](../../docs/architecture/components.md)
- Content and route generation: [`docs/engineering/content-and-routes.md`](../../docs/engineering/content-and-routes.md)
- Current route inventory: [`docs/design/pages.md`](../../docs/design/pages.md)
