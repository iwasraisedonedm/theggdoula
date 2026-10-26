# Codebase Structure

**Analysis Date:** 2026-10-26

## Key Locations

- `src/pages/` — file-based public routes, including resources, services, blog catch-all routes, and generated AstroWind examples.
- `src/layouts/` — document shell and page-level composition.
- `src/components/` — common, blog, resource, service, widget, and UI layers.
- `src/data/` — service data, guides, and the `post/` collection content.
- `src/config.yaml` and `vendor/integration/` — site settings and local AstroWind config loader.
- `src/utils/` and `src/types.d.ts` — content, URL, metadata, and shared type helpers.
- `public/` — static images, downloads, and site assets.
- `tests/` — Node built-in tests; `scripts/` — local tooling.
- `docs/` — durable engineering references; `.agents/skills/` — task procedures.
- `.codex/` and `.pi/` — local GSD Core runtime integration for Codex and Pi.
- `.planning/` — GSD project, requirements, roadmap, codebase map, and state.

## Source of Truth

Use [`README.md`](../../README.md) for setup and the [documentation index](../../docs/README.md) for detailed ownership and task routing. Source/configuration remains authoritative for implemented behavior.
