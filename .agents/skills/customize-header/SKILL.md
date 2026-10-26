---
name: customize-header
description: Update shared navigation/header composition using current source and route inventory. Use for requested header or navigation changes.
---

# Customize the header

Inspect current source before changing the site header:

- `src/components/widgets/Header.astro` — header markup, behavior, and actual prop contract.
- `src/navigation.ts` — site navigation links and actions.
- `src/layouts/PageLayout.astro` and `src/layouts/LandingLayout.astro` — how each layout configures the header.
- `src/components/common/ToggleMenu.astro` and `ToggleTheme.astro` — shared controls.

Update navigation labels and destinations in `src/navigation.ts` when only the information architecture changes. Keep page scope aligned with [the route inventory](../../../docs/design/pages.md). Do not rely on the old widget demo's breakpoints, colors, or prop documentation; current source is authoritative.

For visual changes, read the [brand](../../../docs/design/brand.md) and [design system](../../../docs/design/system.md). Run `npm run check` and `npm run build` for source changes.
