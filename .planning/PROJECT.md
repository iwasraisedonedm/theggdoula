# Grit + Grace Doula

## What This Is

Grit + Grace Doula is a static website for families seeking nonmedical prenatal, birth, postpartum, breastfeeding, and newborn-care support. It explains the services and practitioner, provides educational resources, and links visitors to an inquiry form or consultation booking.

## Core Value

Help families understand the available doula support and reach a clear next step: ask a question or book a consultation.

## Requirements

### Validated

- ✓ The site builds as a static Astro website with Grit + Grace branding and approved service content — existing source and `docs/design/pages.md`.
- ✓ Service overview and five data-backed service detail routes are implemented — `src/pages/services.astro`, `src/pages/services/[service].astro`, and `src/data/services.ts`.
- ✓ The contact route has a configured Formspree endpoint, client-side status handling, and direct contact fallbacks — `src/pages/contact.astro` and `src/components/ui/Form.astro`.
- ✓ The booking route links to the configured Cal.com consultation event — `src/pages/book.astro`.
- ✓ Resources include the blog, downloadable guides, canonical metadata, RSS, sitemap, and route-specific structured data — see `docs/engineering/content-and-routes.md`.
- ✓ CI runs the project checks and static build; the current check suite includes service-data tests — `.github/workflows/ci.yml` and `package.json`.

These are implementation facts, not proof that external provider transactions or deployment settings have been verified.

### Active

- [ ] Verify the production release path and externally managed conversion integrations.
- [ ] Resolve the public and indexing policy for generated AstroWind example routes.
- [ ] Close the known test-coverage and filtered TypeScript diagnostic review gaps.
- [ ] Record a production-readiness acceptance result with evidence.

### Out of Scope

- UI redesign, styling changes, and content revisions without a separate request.
- New product features or replacement hosting/form/booking providers.
- Production configuration changes, submissions containing real personal data, deployments, commits, pushes, or tags without separate authorization.
- Recreating completed routes, source architecture documentation, or prior engineering-foundation work.

## Context

- The repository is a brownfield Astro/AstroWind site using TypeScript, Tailwind CSS v4, GitHub Actions, and Vercel static hosting.
- `docs/README.md` is the documentation index. Existing architecture, route, integration, and implementation references remain authoritative and should be linked rather than copied into plans.
- `docs/operations/engineering-audit.md` records confirmed gaps: generated example routes remain accessible; tests cover service data but not broader pure helpers; eight upstream Astro/TypeScript mapper diagnostics are filtered; GitHub/Vercel provider state and real Formspree/Cal.com transactions were not verified.
- The working tree already contains substantial unrelated edits. Preserve them; do not infer that the current branch or its contents are ready to commit or deploy.
- GSD Core is locally installed for Codex and Pi. The minimal profile has no named GSD subagents; mapping was therefore completed sequentially. GSD state belongs in `.planning/`, while permanent engineering knowledge stays in `docs/`.

## Constraints

- **Compatibility**: Keep the current Astro, TypeScript, Tailwind, GitHub Actions, and Vercel stack unless a separately approved task proves a change necessary.
- **Scope**: Production-readiness work is gap-based; do not rework functionality already implemented.
- **Safety**: Do not commit, push, tag, deploy, or change production settings without separate explicit authorization.
- **Knowledge ownership**: Source owns implemented behavior; `docs/` owns durable engineering knowledge; `.planning/` owns GSD requirements, roadmap, execution, and state.

## Key Decisions

| Decision                                                                                             | Rationale                                                                                      | Outcome   |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------- |
| Keep the current static Astro/Vercel architecture                                                    | It is implemented, documented, and builds successfully                                         | ✓ Retain  |
| Treat provider operations and transactions as unverified until checked with evidence                 | Repository configuration does not prove provider-dashboard state or live transactions          | — Pending |
| Defer the `/homes/*`, `/landing/*`, and `/pricing` route disposition to an explicit product decision | These generated examples are accessible but outside the business route inventory               | — Pending |
| Use GSD Core's `.planning/` state for execution and link to `docs/` for permanent knowledge          | Prevent duplicate documentation ownership                                                      | ✓ Retain  |
| Treat the `v1.0` roadmap label as provisional                                                        | It follows the current `1.0.0-beta.66` package version; no release milestone has been approved | — Pending |

---

_Last updated: 2026-10-26 after brownfield onboarding_
