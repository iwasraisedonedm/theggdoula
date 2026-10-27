---
name: customize-header
description: Update shared navigation and header composition from current project source.
---

# Customize the header

Inspect these current owners before making a change:

- `src/components/site/Header.astro` — header markup, behavior, and props.
- `src/navigation.ts` — navigation links and calls to action.
- `src/layouts/PageLayout.astro` — shared header and footer composition.
- `src/components/common/ToggleMenu.astro` and `ToggleTheme.astro` — shared controls.

Update labels and destinations in `src/navigation.ts` when only the information architecture changes. Keep route scope aligned with [the route inventory](../../../docs/design/pages.md). For visual changes, read [brand](../../../docs/design/brand.md) and [design system](../../../docs/design/system.md). Run `npm run check` and `npm run build` for source changes.
