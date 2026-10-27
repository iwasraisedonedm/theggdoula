# Engineering foundation audit

## Status

Baseline findings were recorded on 2026-10-26 and rechecked during the AI-agent and documentation optimization pass. Source/configuration owns implemented behavior; this report tracks audit findings, not a second implementation specification.

### P0

No P0 findings.

### P1

No P1 findings.

### P2

- **Generated example routes — resolved.** `/homes/*`, `/landing/*`, and `/pricing` source pages and template-only draft articles have been removed. The route inventory and public `llms.txt` now describe only doula content.
- **Behavioral test coverage — partially resolved.** `tests/services.test.mjs` verifies route-safe, unique service identifiers, required fields, and FAQ completeness. `npm run check` runs it. Broader helper behavior tests remain deferred until stable test seams are selected.
- **Repository identity — resolved.** `README.md`, `package.json`, and the lockfile identify the Grit + Grace Doula website; the README describes the project-owned configuration.
- **Duplicate page roadmap — resolved.** `docs/design/pages.md` owns current route status, page intent, and navigation. The redundant long-form roadmap was removed; references now route to the canonical inventory.

### P3

- **Skill discoverability and overlap — resolved.** `docs/README.md` has a task-based catalog. Skills now defer to canonical source/docs for prop and token behavior; outdated template assumptions were corrected.
- **GSD onboarding — completed in Phase 5.** The policy established here remains: durable knowledge belongs in `docs/`, while GSD execution state belongs in `.planning/`.
- **Deployment workflow — resolved for Codex/Pi.** The unused archive, Claude-specific uploader, and obsolete upstream lock were removed. The local Vercel workflow documents the CLI path and the retained Codex uploader's external upload behavior.
- **npm version drift — resolved.** CI installs npm `11.6.2` before `npm ci`, matching `package.json` and the lockfile.
- **Claude-specific guidance — minimized.** No `.claude/` directory or independent Claude policy remains. `CLAUDE.md` is a minimal pointer retained because published guidance links to it; Claude product mentions in published content remain unchanged by scope.

## Dependency and tooling disposition

The direct dependencies remain referenced by application source, content, or configuration. The lockfile's root dependency declarations match `package.json`; no package removal or addition was justified. CI remains read-only and runs the repository check and static build. The check includes the Node built-in test runner without adding a test dependency.

## Canonical knowledge ownership

| Topic                                              | Owner                                           |
| -------------------------------------------------- | ----------------------------------------------- |
| Product summary and local setup                    | `README.md`                                     |
| Agent policy and task routing                      | `AGENTS.md`                                     |
| Legacy compatibility pointer referenced by content | `CLAUDE.md` → `AGENTS.md`                       |
| Engineering index, skill catalog, GSD policy       | `docs/README.md`                                |
| Runtime and source ownership                       | `docs/architecture/system-overview.md`          |
| Component placement and composition                | `docs/architecture/components.md`               |
| Brand and visual tokens                            | `docs/design/brand.md`, `docs/design/system.md` |
| Current route inventory and page intent            | `docs/design/pages.md`                          |
| Blog schema, content, and routes                   | `docs/engineering/content-and-routes.md`        |
| Site/Astro configuration                           | `docs/integrations/configuration.md`            |
| CI and hosting boundaries                          | `docs/operations/ci-and-deployment.md`          |
| Change and verification procedure                  | `docs/workflows/implementation.md`              |
| Task-specific procedures                           | `.agents/skills/`, indexed by `docs/README.md`  |
| GSD execution state, when explicitly initialized   | `.planning/` only                               |

There is no separate product document because the root README owns project identity/setup, while the page inventory and brand guide own site-specific product intent. The system overview and implementation workflow already cover architecture and workflow responsibilities; `docs/architecture/components.md` fills the distinct component-boundary gap.

## Deferred risks and follow-up

2. Add focused tests for other pure utilities when test seams can be created without introducing runtime mocks or dependencies.
3. Verify GitHub and Vercel dashboard state only during an explicitly requested operational task. `docs/operations/ci-and-deployment.md` now distinguishes provider state from checked-in configuration.

The remaining follow-up is focused utility coverage. The demo-route retirement was authorized and completed as a separate application change; the historical audit scope above remains unchanged.

## Phase 4: AI-agent migration and verification

- **Skill discovery — resolved.** All 14 project procedures formerly stored as flat Markdown files now use `.agents/skills/<name>/SKILL.md` with `name` and `description` frontmatter. This directory format is supported by Codex and Pi. Three root-level `.md` files are compatibility pointers because published source articles link to those historical paths; they are not skill entry points.
- **Vercel workflow — adapted.** The deployment skill is now a local Codex/Pi procedure with preview as the default, explicit production authorization, and a Vercel CLI workflow. The Claude-specific `resources/deploy.sh` was removed. The retained Codex uploader is a separate, external-upload fallback and must be reviewed before use; Pi uses the CLI.
- **Obsolete skill lock — removed.** `skills-lock.json` described the upstream skill hash, while the local skill is now adapted and has no synchronization tooling. Provenance and upstream version are recorded in the local skill frontmatter instead.
- **Claude pointer — retained narrowly.** `.claude/` and independent Claude instructions/hooks are absent. `CLAUDE.md` is only a pointer to `AGENTS.md`; published source guidance links to it, so removing it would leave a stale instruction. Claude mentions in published source are retained under the Phase 4 no-content-change constraint.
- **Discovery validation — partial.** Codex prompt-input inspection listed the project skills from `.agents/skills`. Pi accepts the `--skill` option and project path, but runtime prompt loading could not be verified because no provider API key is configured.
- **GSD — ready for brownfield initialization as of Phase 4.** No `.planning/` artifacts existed at that point; Phase 5 records the initialization below.

### Phase 4 validation record

Markdown links and all 15 skill entry points passed structure validation. Codex prompt-input inspection confirmed project skill discovery. Pi runtime loading remains unverified because no API key is configured; its CLI help confirms the `--skill` option and the attempted offline run stopped at provider authentication. The stale-reference scan found no Claude deployment service or removed-lock references in active tooling. Remaining Claude mentions are the retained `CLAUDE.md` compatibility file and published source content.

`npm run check` passed: type checks, both existing Node tests, Oxlint, Biome, and Prettier. The type check reports that it filters 8 known upstream Astro/TypeScript mapper diagnostics; the project diagnostics pass. `npm run build` passed and generated 49 pages. `npm ls --depth=0`, the retained uploader's `bash -n`, `git diff --check`, the documentation link/path and npm script reference checks all passed. The checked-in CI workflow matches the documented Node 24/npm 11.6.2, `npm ci`, check, and build sequence. The initial check reported Prettier issues in three files changed for this phase; those files were formatted and the full check then passed.

**GSD readiness: READY.** No existing `.planning/` artifacts or initialization requirements remain. Initialize GSD only when the user requests a planning run.

## Phase 5: GSD brownfield onboarding

- **Supported runtime — verified.** Installed `@opengsd/gsd-core` 1.18.0 locally for Codex and Pi using its `core` profile. Codex CLI 0.164.0 exceeds the documented minimum 0.130.0. The deprecated/archived `get-shit-done-cc` predecessor was not installed.
- **Brownfield state — initialized.** Native GSD Core created `.planning/config.json`; GSD project requirements, roadmap, state, and codebase map now live in `.planning/`. Completed application and foundation work is recorded as the baseline, not recreated as roadmap phases.
- **Runtime profile — constrained.** GSD Core is installed for both runtimes. The minimal `core` profile does not install named mapper/planner agents; the codebase map was prepared sequentially using the GSD map workflow/templates and canonical docs. No GSD roadmap phase was executed.
- **Safety defaults — set.** Automatic phase advancement, planning commits, and tag creation are disabled in `.planning/config.json`. No commits, pushes, tags, deployments, provider changes, or application changes were made in Phase 5.
- **Open production-readiness gaps — mapped.** Provider-side GitHub/Vercel settings, real Formspree/Cal.com transactions, example-route disposition, broader utility coverage, and review of eight filtered upstream TypeScript diagnostics are mapped to Phases 1–3; Phase 4 records acceptance evidence.
- **Next command:** Codex `$gsd-discuss-phase 1`; the Pi extension is available through `/gsd`.

### Phase 5 validation record

GSD Core reports runtime identity `@opengsd/gsd-core` 1.18.0. `roadmap validate` returned no warnings, `validate consistency` passed, and roadmap analysis found one provisional milestone with four ordered phases, zero completed phases, and Phase 1 as the next phase. All six active requirements have phase mappings; all five implemented capabilities remain baseline evidence. Local Markdown links and paths passed across 24 agent, product, engineering, and planning documents.

Codex `debug prompt-input` included the installed `gsd-discuss-phase` skill. A Pi extension harness loaded `.pi/extensions/gsd.js`, registered `/gsd`, and successfully dispatched its help command to the local GSD engine. Interactive Pi/model behavior remains unverified; the runtime has no configured provider credential. No roadmap phase or execution plan was started.

The first `npm run check` attempt found generated GSD runtime files included by repository-wide lint/format checks. The project now excludes only `.codex/` and `.pi/` runtime assets from Oxlint, Biome, and Prettier; authored `.planning/` documents remain in the Markdown formatting check. The final `npm run check` passed, including both existing Node tests. It continues to report that eight upstream TypeScript diagnostics are intentionally filtered. `npm run build` passed and generated 49 pages. `git diff --check` passed. At that audit point, generated example routes remained a product decision; they were subsequently removed as part of the doula-only route cleanup.

**GSD readiness: READY.** The local Codex and Pi integrations, brownfield baseline, requirement set, roadmap, state, and source-linked codebase map are present. The first recommended action is to discuss Phase 1 with `$gsd-discuss-phase 1`; do not execute a roadmap phase until it is planned and the user requests execution.
