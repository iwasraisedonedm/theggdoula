# Requirements: Grit + Grace Doula production readiness

**Defined:** 2026-10-26
**Core Value:** Help families understand the available doula support and reach a clear next step: ask a question or book a consultation.

## Existing validated capabilities

These are implemented baseline capabilities, not new roadmap work. See `.planning/PROJECT.md` and the linked source/docs for evidence.

- ✓ **SITE-01**: Static pages present the business, services, resources, and supporting policies.
- ✓ **INQ-01**: The contact route implements the configured Formspree form and direct contact alternatives.
- ✓ **BOOK-01**: The booking route links to the configured Cal.com consultation event.
- ✓ **CONT-01**: The resource hub includes guides and a content-managed blog with generated routes and metadata.
- ✓ **CI-01**: GitHub Actions runs dependency installation, `npm run check`, and `npm run build`.

## v1 Requirements

Requirements for the production-readiness milestone. They are not complete until evidence is recorded.

### Operations

- [ ] **OPS-01**: GitHub Actions, branch protections, Vercel project linkage, production branch, and required environment settings are verified against provider state; any unavailable checks are recorded as blockers.
- [ ] **OPS-02**: Formspree inquiry and Cal.com consultation flows are verified through provider-approved, non-sensitive test procedures, or their remaining verification limits and owners are recorded.

### Route scope

- [ ] **ROUTE-01**: The product decision for the generated `/homes/*`, `/landing/*`, and `/pricing` routes is recorded, and public availability, redirects, and indexing behavior match that decision.

### Engineering quality

- [ ] **QUAL-01**: Stable pure-utility test seams are reviewed and the selected coverage gap is closed without unnecessary test dependencies.
- [ ] **QUAL-02**: The eight filtered upstream Astro/TypeScript mapper diagnostics are reviewed against the supported compatibility state; the allowlist is narrowed or its continued need is evidenced.

### Acceptance

- [ ] **READY-01**: All production-readiness requirements have recorded evidence, `npm run check` and `npm run build` pass, and remaining provider or product blockers are explicitly accepted or resolved.

## Out of Scope

| Feature                                                      | Reason                                                                |
| ------------------------------------------------------------ | --------------------------------------------------------------------- |
| UI or content redesign                                       | Excluded by the onboarding task; existing implementation is baseline. |
| Replacing the booking, form, analytics, or hosting providers | No source evidence justifies a provider migration.                    |
| Automatically changing production or publishing a deployment | Requires separate user authorization.                                 |

## Traceability

| Requirement | Phase   | Status  |
| ----------- | ------- | ------- |
| OPS-01      | Phase 1 | Pending |
| OPS-02      | Phase 1 | Pending |
| ROUTE-01    | Phase 2 | Pending |
| QUAL-01     | Phase 3 | Pending |
| QUAL-02     | Phase 3 | Pending |
| READY-01    | Phase 4 | Pending |

**Coverage:**

- v1 requirements: 6 total
- Mapped to phases: 6
- Unmapped: 0

---

_Requirements defined: 2026-10-26_
_Last updated: 2026-10-26 after brownfield onboarding_
