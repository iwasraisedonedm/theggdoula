# Roadmap: Grit + Grace Doula production readiness

## Overview

This roadmap verifies the existing site's release path and conversion integrations, resolves the outstanding route-scope decision, closes narrowly evidenced validation gaps, and records a final readiness result. Existing features and documentation are accepted as the brownfield baseline; no completed application work is recreated. Phases are not authorized for execution by this onboarding.

## 📋 v1.0 Production readiness (Provisional)

**Milestone Goal:** Verify the existing site's release path and critical conversion flows, resolve public-route scope, close known validation debt, and record a readiness decision. The `v1.0` planning label is provisional; no release version was approved. No phase has been executed.

## Phases

- [ ] **Phase 1: Verify release path and conversion integrations** — Check provider-owned GitHub/Vercel state and approved test procedures for Formspree and Cal.com.
- [ ] **Phase 2: Resolve generated route scope** — Record the product decision for public and indexing behavior of the example routes.
- [ ] **Phase 3: Close validation debt** — Review helper-test seams and the filtered upstream TypeScript diagnostics.
- [ ] **Phase 4: Record production readiness** — Verify requirements against evidence and document any accepted blockers.

## Phase Details

### Phase 1: Verify release path and conversion integrations

**Goal**: Establish evidence for the repository's actual release path and externally managed inquiry and booking flows without changing production settings.
**Depends on**: Nothing (first phase)
**Requirements**: [OPS-01, OPS-02]
**Success Criteria** (what must be TRUE):

1. GitHub Actions and branch-protection state for the production branch are recorded from provider state.
2. Vercel project linkage, production branch, and required environment configuration are recorded from provider state.
3. Formspree and Cal.com paths have provider-approved verification evidence, or a named blocker/owner is recorded without exposing personal data.
   **Plans**: TBD during phase planning

### Phase 2: Resolve generated route scope

**Goal**: Align public access and search indexing behavior for the generated example routes with an explicit product decision.
**Depends on**: Phase 1
**Requirements**: [ROUTE-01]
**Success Criteria** (what must be TRUE):

1. A decision is recorded for `/homes/*`, `/landing/*`, and `/pricing`.
2. Source, redirects, and sitemap/indexing policy match the recorded decision if implementation work is separately authorized.
3. If the decision is unavailable, the routes remain unchanged and the blocker is recorded.
   **Plans**: TBD during phase planning

### Phase 3: Close validation debt

**Goal**: Address the documented gaps in focused test coverage and TypeScript diagnostic filtering without adding unnecessary dependencies or broad refactors.
**Depends on**: Phase 2
**Requirements**: [QUAL-01, QUAL-02]
**Success Criteria** (what must be TRUE):

1. Candidate pure-utility test seams and the selected coverage scope are documented; any added tests target stable behavior.
2. All eight filtered diagnostics are classified against upstream compatibility; any retained filtering has an evidence-backed reason.
3. `npm run check` and `npm run build` pass after any authorized tooling changes.
   **Plans**: TBD during phase planning

### Phase 4: Record production readiness

**Goal**: Provide a traceable readiness decision based on completed evidence rather than repository configuration alone.
**Depends on**: Phases 1–3
**Requirements**: [READY-01]
**Success Criteria** (what must be TRUE):

1. Every active requirement has verification evidence or an explicitly accepted blocker.
2. Project check and build results are current and recorded.
3. Any deployment, commit, push, production-setting, or real-data action has separate user authorization before it is performed.
   **Plans**: TBD during phase planning

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4.

| Phase                                              | Milestone | Plans Complete | Status      | Completed |
| -------------------------------------------------- | --------- | -------------- | ----------- | --------- |
| 1. Verify release path and conversion integrations | v1.0      | 0/TBD          | Not started | -         |
| 2. Resolve generated route scope                   | v1.0      | 0/TBD          | Not started | -         |
| 3. Close validation debt                           | v1.0      | 0/TBD          | Not started | -         |
| 4. Record production readiness                     | v1.0      | 0/TBD          | Not started | -         |
