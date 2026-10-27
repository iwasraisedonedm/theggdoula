# Component architecture

Source files define props and runtime behavior; the [design system](../design/system.md) owns visual tokens and shared styling conventions.

## Composition layers

| Layer           | Owner                                                      | Responsibility                                                  |
| --------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| Routes          | `src/pages/`                                               | Load route data and compose page sections.                      |
| Layouts         | `src/layouts/`                                             | Shared document shell and page-level header/footer composition. |
| Site shell      | `src/components/site/`                                     | Shared navigation and footer.                                   |
| Domain sections | `src/components/blog/`, `home/`, `resources/`, `services/` | Presentation for the owning content area.                       |
| Shared behavior | `src/components/common/`                                   | Cross-route behavior and presentation.                          |
| UI primitives   | `src/components/ui/`                                       | Low-level controls used by routes and shared sections.          |

## Placement rules

- Keep one-off composition in its route until another route needs the same structure or behavior.
- Put reusable behavior in `common/`; keep content presentation in its matching domain folder.
- Keep service content in `src/data/services.ts`; route templates and service components render that data.
- Align visual choices with `docs/design/brand.md` and `docs/design/system.md`.
- Define local prop contracts beside the component; keep shared domain types in `src/types.d.ts` only when multiple consumers need them.
- Confirm the actual component signature before consuming it.

## Change procedure

Read the [component skill](../../.agents/skills/add-component/SKILL.md) and the [reuse skill](../../.agents/skills/use-widgets/SKILL.md) before adding a reusable section. Update this page only when ownership boundaries change.
