---
name: add-component
description: Add a reusable Astro component using the repository component boundaries. Use when new shared presentation or behavior is requested.
---

# Add a reusable component

1. Read [component architecture](../../../docs/architecture/components.md) and inspect existing components in the matching folder.
2. Check [use-widgets](../use-widgets/SKILL.md) before adding a general page section; reuse or extend an existing widget when it fits.
3. Put page-specific composition in the page route. Put reusable behavior or presentation in the owning component area (`common/`, `blog/`, `resources/`, `services/`, `widgets/`, or `ui/`).
4. Keep service content in `src/data/services.ts`. Check actual prop types in the component or `src/types.d.ts` rather than copying an example signature.
5. Use current design guidance in `docs/design/brand.md` and `docs/design/system.md`. Do not add a demo route just to exercise a component.
6. Run `npm run check` and `npm run build` for source changes.
