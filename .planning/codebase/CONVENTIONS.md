# Conventions

**Analysis Date:** 2026-10-26

## Working Rules

- Read `AGENTS.md`, then `docs/README.md` and only relevant topic pages.
- Inspect source/configuration before trusting prose; source owns implemented behavior.
- Keep changes focused, preserve uncommitted/untracked work, and update the single owning document when durable facts change.
- Use `.agents/skills/` for a matching route, component, content, styling, or configuration procedure.
- Keep permanent engineering knowledge in `docs/`; use `.planning/` only for GSD-managed execution state.

## Component and Route Boundaries

Routes compose page-specific sections. Promote shared behavior only when reused; keep service/blog/resource presentation in its domain component folders. See [`docs/architecture/components.md`](../../docs/architecture/components.md).

## Commands

- Code/config/tooling changes: `npm run check` and `npm run build`.
- Documentation-only changes: validate links, paths, and commands, then run `npm run check`.
- Use `npm run sync` after collection-schema changes or before opening generated schemas in Astro Editor.

See [`AGENTS.md`](../../AGENTS.md) and [`docs/workflows/implementation.md`](../../docs/workflows/implementation.md).
