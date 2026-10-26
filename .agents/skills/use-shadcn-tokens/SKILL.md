---
name: use-shadcn-tokens
description: Use the project’s shadcn-compatible semantic CSS tokens. Use when building or adapting components that consume these tokens.
---

# Use shadcn-compatible tokens

The project exposes shadcn-style semantic tokens through `src/assets/styles/shadcn.css`, imported by `src/assets/styles/tailwind.css`. The CSS file is the source of truth for token mappings; consult it before assuming stock shadcn meanings.

- Examples include `bg-background`, `text-foreground`, `bg-card`, `border-border`, `ring-ring`, and `text-muted-foreground`.
- The values follow the Grit + Grace theme variables. Do not change their mappings as part of component work unless the design-system task includes it.
- Astro does not include React. Do not add React or shadcn CLI-generated dependencies for a styling-only task. Follow the user's request and the [component architecture](../../../docs/architecture/components.md) before introducing a framework component.
- For visual changes, use the [brand guidelines](../../../docs/design/brand.md) and [design system](../../../docs/design/system.md).
