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

<!-- antislop:start -->

## antislop

For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):

- Core filter, always on: `antislop`: `.agents/skills/antislop/SKILL.md`
- UI / visual: `antislop-ui`: `.agents/skills/antislop-ui/SKILL.md`
- Copy & text: `antislop-copywriting`: `.agents/skills/antislop-copywriting/SKILL.md`
- People: `antislop-human`: `.agents/skills/antislop-human/SKILL.md`
- Mobile / responsive: `antislop-layoutmobile`: `.agents/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `antislop-code`: `.agents/skills/antislop-code/SKILL.md`
  Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
  Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
  If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
  To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.

<!-- antislop:end -->
