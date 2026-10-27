---
name: styling
description: Apply existing Grit + Grace visual tokens and shared styles. Use for explicitly requested styling work.
---

# Styling workflow

Read the [Grit + Grace brand guidelines](../../../docs/design/brand.md) and [design system](../../../docs/design/system.md) before changing styles. Those documents own approved colors, typography, shared classes, and interaction conventions.

## Source ownership

- `src/assets/styles/tailwind.css` — Tailwind CSS v4 entry point, plugins, theme mappings, and utilities.
- `src/components/CustomStyles.astro` — site CSS variables and theme values.
- `src/assets/styles/shadcn.css` — shadcn-compatible semantic tokens.
- Component-local classes — layout and presentation specific to that component.
- `astro.config.ts` — Tailwind Vite plugin and Astro Fonts API configuration.

Inspect current values before editing; use the semantic design tokens and approved brand guidance as the design contract. Preserve light/dark behavior and existing responsive/accessibility conventions. For token-specific usage, see [use-shadcn-tokens](../use-shadcn-tokens/SKILL.md).
