# Component architecture

This document defines component ownership and composition boundaries. Source files define props and runtime behavior; the [design system](../design/system.md) owns visual tokens and shared styling conventions.

## Composition layers

| Layer              | Owner                                                                         | Responsibility                                                                     |
| ------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Routes             | `src/pages/`                                                                  | Load route data and compose page-specific sections                                 |
| Layouts            | `src/layouts/`                                                                | Shared document shell and page-level header/footer composition                     |
| Service components | `src/components/services/`                                                    | Service-specific detail compositions backed by `src/data/services.ts`              |
| Site components    | `src/components/common/`, `src/components/blog/`, `src/components/resources/` | Shared behavior and content-specific presentation                                  |
| Widgets            | `src/components/widgets/`                                                     | General-purpose AstroWind page sections; shared prop types are in `src/types.d.ts` |
| UI primitives      | `src/components/ui/`                                                          | Shared low-level controls and wrappers used by higher layers                       |

## Placement rules

- Keep one-off page composition in its route until the same structure or behavior is used by multiple routes.
- Put reusable behavior in `common/`; keep blog, resource, and service-specific presentation in its matching folder.
- Put a general section in `widgets/` only when it is reusable beyond one route. Reuse or extend an existing widget before introducing another.
- Keep service content in `src/data/services.ts`; route templates and service components render that data.
- Keep visual choices aligned with `docs/design/brand.md` and `docs/design/system.md`. Do not copy widget-demo content into business pages.
- Define prop contracts beside the component when local, or in `src/types.d.ts` where existing widget types are shared. Confirm the actual component signature before consuming it.

## Change procedure

Read the [component skill](../../.agents/skills/add-component/SKILL.md) and [widget catalog](../../.agents/skills/use-widgets/SKILL.md) before adding a reusable section. Update this page only when ownership boundaries change; update design documentation only when visual conventions change.
