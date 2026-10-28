# Engineering documentation

Read the smallest topic reference needed. Source and checked-in configuration are authoritative for behavior; these documents explain ownership, constraints, and workflows.

| Topic                                   | Owner                                                   |
| --------------------------------------- | ------------------------------------------------------- |
| Project purpose, setup, commands        | [Root README](../README.md)                             |
| Agent policy and task routing           | [AGENTS.md](../AGENTS.md)                               |
| Runtime and source ownership            | [System overview](architecture/system-overview.md)      |
| Component layers and composition        | [Component architecture](architecture/components.md)    |
| Current routes, navigation, page intent | [Page inventory](design/pages.md)                       |
| Brand direction                         | [Brand guidelines](design/brand.md)                     |
| Shared tokens and visual patterns       | [Design system](design/system.md)                       |
| Blog schema and route generation        | [Content and routes](engineering/content-and-routes.md) |
| Site configuration and integrations     | [Configuration](integrations/configuration.md)          |
| CI, checks, and hosting                 | [CI and deployment](operations/ci-and-deployment.md)    |
| Engineering audit and remediation       | [Engineering audit](operations/engineering-audit.md)    |
| Implementation and verification         | [Implementation workflow](workflows/implementation.md)  |

`CLAUDE.md` remains a short compatibility pointer because published project guidance links to it. Codex and Pi should use `AGENTS.md` as the sole agent entry point.

## Task-oriented skill catalog

Skills are short procedures for specific tasks. The relevant source and documentation remain authoritative.

| Task                                    | Procedure                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add a route/page                        | [add-page](../.agents/skills/add-page/SKILL.md)                                                                                                                                                                                                                                                                                    |
| Build a landing page                    | [write-landing-page](../.agents/skills/write-landing-page/SKILL.md), [landing-page-design](../.agents/skills/landing-page-design/SKILL.md)                                                                                                                                                                                         |
| Design or audit a public-facing page    | [design-taste-frontend](../.agents/skills/design-taste-frontend/SKILL.md), [redesign-existing-projects](../.agents/skills/redesign-existing-projects/SKILL.md)                                                                                                                                                                     |
| Apply anti-slop review guidance         | [antislop](../.agents/skills/antislop/SKILL.md), [UI](../.agents/skills/antislop-ui/SKILL.md), [copy](../.agents/skills/antislop-copywriting/SKILL.md), [people](../.agents/skills/antislop-human/SKILL.md), [mobile](../.agents/skills/antislop-layoutmobile/SKILL.md), [code comments](../.agents/skills/antislop-code/SKILL.md) |
| Add a reusable component                | [add-component](../.agents/skills/add-component/SKILL.md)                                                                                                                                                                                                                                                                          |
| Select an existing widget               | [use-widgets](../.agents/skills/use-widgets/SKILL.md)                                                                                                                                                                                                                                                                              |
| Add a blog post                         | [add-blog-post](../.agents/skills/add-blog-post/SKILL.md)                                                                                                                                                                                                                                                                          |
| Understand build-time content           | [content-at-build-time](../.agents/skills/content-at-build-time/SKILL.md)                                                                                                                                                                                                                                                          |
| Add JSON-LD                             | [add-structured-data](../.agents/skills/add-structured-data/SKILL.md)                                                                                                                                                                                                                                                              |
| Set social preview images               | [set-open-graph-image](../.agents/skills/set-open-graph-image/SKILL.md)                                                                                                                                                                                                                                                            |
| Configure the contact form              | [configure-contact-form](../.agents/skills/configure-contact-form/SKILL.md)                                                                                                                                                                                                                                                        |
| Customize the header                    | [customize-header](../.agents/skills/customize-header/SKILL.md)                                                                                                                                                                                                                                                                    |
| Change tokens and component styles      | [styling](../.agents/skills/styling/SKILL.md), [shadcn-compatible tokens](../.agents/skills/use-shadcn-tokens/SKILL.md)                                                                                                                                                                                                            |
| Work with shadcn/ui                     | [shadcn](../.agents/skills/shadcn/SKILL.md)                                                                                                                                                                                                                                                                                        |
| Build a Tailwind design system          | [tailwind-design-system](../.agents/skills/tailwind-design-system/SKILL.md)                                                                                                                                                                                                                                                        |
| Add browser-agent tools with WebMCP     | [webmcpify](../.agents/skills/webmcpify/SKILL.md)                                                                                                                                                                                                                                                                                  |
| Audit and improve an existing interface | [redesign-existing-projects](../.agents/skills/redesign-existing-projects/SKILL.md)                                                                                                                                                                                                                                                |
| Configure a base path or blog           | [deploy-with-base-path](../.agents/skills/deploy-with-base-path/SKILL.md), [disable-blog](../.agents/skills/disable-blog/SKILL.md)                                                                                                                                                                                                 |

### External deployment skill

[deploy-to-vercel](../.agents/skills/deploy-to-vercel/SKILL.md) is a local adaptation of the Vercel agent skill, with Codex and Pi compatible instructions. It defaults to preview deployments and requires explicit authorization for production or any Git push. The Codex fallback uploader sends a reviewed project archive to an external deployment service; use the Vercel CLI where possible. Pi should use the CLI workflow.

Each procedure lives in a named directory with a `SKILL.md`, the format discovered by Codex and Pi. Three root-level Markdown pointers remain only because published source articles link to their historical paths: `add-structured-data.md`, `configure-contact-form.md`, and `use-widgets.md`. The directory `SKILL.md` files are authoritative.

External skills are declared in the root `package.json` `skills` array and tracked by `skills-lock.json`. Restore the project skills with `npx skills experimental_install`.

## Planning state

Permanent project knowledge belongs in this `docs/` tree. GSD requirements, roadmap, codebase map, phase context, and execution state live in `.planning/`. Install the per-developer Codex/Pi runtime with `npx --yes @opengsd/gsd-core@1.18.0 --codex --pi --local --profile=core --no-legacy-cleanup`; generated `.codex/` and `.pi/` runtime assets are machine-local and are not committed. Use `$gsd-help` in Codex or `/gsd help` in Pi to see the installed command surface. GSD plans must link to owning docs rather than copy their durable guidance. Automatic phase advancement, planning commits, and tag creation are disabled.
