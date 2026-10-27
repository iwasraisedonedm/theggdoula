# Agent entry point

Use this as the canonical repository guidance for Codex and Pi. Start at [the documentation index](docs/README.md), then read only the reference for the task. Source and checked-in configuration own implemented behavior.

## Rules

- Work only from this checkout unless the user explicitly expands scope.
- Preserve existing behavior and unrelated staged, modified, and untracked files.
- Keep durable engineering knowledge in `docs/`; `.planning/` is reserved for GSD-managed execution state. Do not initialize GSD unless requested.
- Do not add dependencies, frameworks, or documentation systems without a task requirement.
- Do not commit, push, deploy, or change production settings unless the user requests it.
- Update the owning document when implementation or workflow behavior changes.

## Task routing

| Task                                       | Read                                                                       |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| Project setup and commands                 | [README](README.md)                                                        |
| Architecture and source ownership          | [System overview](docs/architecture/system-overview.md)                    |
| Component boundaries and composition       | [Component architecture](docs/architecture/components.md)                  |
| Current routes, navigation, and page scope | [Page inventory](docs/design/pages.md)                                     |
| Blog content and route generation          | [Content and routes](docs/engineering/content-and-routes.md)               |
| Astro components and content changes       | Relevant procedure in [skills](docs/README.md#task-oriented-skill-catalog) |
| Configuration and integrations             | [Configuration](docs/integrations/configuration.md)                        |
| Brand and shared visual tokens             | [Brand](docs/design/brand.md) and [design system](docs/design/system.md)   |
| CI, validation, and hosting                | [CI and deployment](docs/operations/ci-and-deployment.md)                  |
| Change process and verification            | [Implementation workflow](docs/workflows/implementation.md)                |

## Validation

For source, configuration, or tooling changes, run `npm run check` and `npm run build`. For documentation-only changes, validate changed links, paths, and command references, then run `npm run check` for formatting. The project requires Node.js `>=22.23.4` and npm `11.6.2`.

## Design Context

The full project context is documented in [`.design-context.md`](.design-context.md). In brief: serve pregnant and postpartum families in Orange County with warm, grounded, respectful, nonjudgmental guidance; use the calm botanical editorial system in both themes; preserve family agency and describe doula care as nonmedical support alongside the clinical care team. Favor semantic tokens, shared typography roles, and reusable components. Preserve responsive behavior, WCAG 2.2 AA contrast and keyboard focus, reduced-motion support, and clear next steps. Keep the homepage as the visual anchor without copying its layout to every route; use authentic care-related imagery and avoid unsupported claims or invented testimonials.
