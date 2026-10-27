---
name: use-widgets
description: Find and compose existing reusable page sections in this Astro site.
---

# Reuse page sections

Before adding a page section, inspect `src/components/services/`, `src/components/resources/`, `src/components/blog/`, `src/components/home/`, `src/components/site/`, and `src/components/common/` for an existing owner.

## Rules

- Keep one-off composition in the route until another route needs the same structure or behavior.
- Put reusable behavior in `common/`; keep domain presentation in its matching folder.
- Keep a single page-level `h1`, accurate image alternative text, and real anchor targets.
- Use shared tokens and styles from `docs/design/brand.md` and `docs/design/system.md`.
- Preserve route content, SEO, keyboard access, and responsive behavior.
- Run `npm run check` and `npm run build` after source changes.
