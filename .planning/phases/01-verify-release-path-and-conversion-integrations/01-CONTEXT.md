# Phase 1: Verify release path and conversion integrations - Context

**Gathered:** 2026-10-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Verify the existing GitHub-to-Vercel release path and the website's inquiry and consultation workflows. Cover project linkage and deployment settings; branch, preview, and production behavior; Cal.com booking and confirmation; contact-form validation, submission, delivery, and success/error states; existing analytics and conversion-event coverage; required environment variables; and external dependencies.

Preserve the current architecture, design, and providers. Verify existing implementations before proposing changes and fix confirmed defects only. Do not introduce providers or services, alter production or provider-side configuration, deploy, push, submit real customer data, submit live forms, or create real bookings. Use provider-approved test modes only. Mark inaccessible or unsafe provider-side checks **UNVERIFIED** with the reason and blocker.

The expected production branch is `main`, carried forward from the user's prior release instruction. Verify provider state; do not change it.
</domain>

<decisions>
## Implementation Decisions

### Release and provider verification

- **D-01:** Verify the existing GitHub and Vercel linkage, branch protections, preview and production behavior, production branch, and required environment settings from provider state where accessible. The repository's GitHub workflow is evidence of CI behavior only; it does not prove Vercel's provider-side deployment configuration.
- **D-02:** Keep all provider checks read-only. Do not change GitHub/Vercel settings, production configuration, or deployment state. Record inaccessible or unsafe checks as **UNVERIFIED**, including the missing access/evidence needed to close them.
- **D-03:** Fix only confirmed defects that remain within this phase and do not require an unauthorized provider-side or production change. Do not add providers or services.

### Inquiry and booking verification

- **D-04:** Verify the current Formspree inquiry path, including browser validation, submission response handling, delivery evidence, and success/error states. Use a provider-approved test mode only; never submit a live form or real customer data.
- **D-05:** Verify the existing Cal.com consultation link and any provider-approved test-mode confirmation flow. Never create a real booking. If confirmation cannot be safely verified, record it as **UNVERIFIED**.

### Analytics and environment configuration

- **D-06:** Audit existing analytics and conversion-event coverage, including inquiry success/error and booking click/confirmation paths. Do not add analytics instrumentation. Record missing or unverified event coverage as a finding.
- **D-07:** Identify environment variables and external dependencies from source/configuration, then compare required provider settings only against accessible provider state. Repository configuration alone does not prove that provider values or environments are active.

### the agent's Discretion

- Choose read-only evidence sources and verification order that best establish each result. Keep evidence concise and identify its source and verification date.
- Classify each in-scope check as **PASS**, **FAIL**, or **UNVERIFIED**. A failed build/check or confirmed implementation defect is distinct from an inaccessible external provider check.

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase scope and project constraints

- `.planning/PROJECT.md` — architecture, scope, and production-action constraints.
- `.planning/REQUIREMENTS.md` — OPS-01 and OPS-02 acceptance requirements.
- `.planning/ROADMAP.md` — Phase 1 goal and success criteria.

### Release path and configuration

- `docs/operations/ci-and-deployment.md` — CI and hosting boundaries.
- `docs/integrations/configuration.md` — configuration ownership and external form/booking integrations.
- `.github/workflows/ci.yml` — checked-in CI triggers, permissions, and commands.
- `vercel.json` — checked-in Vercel redirects, headers, and caching configuration.
- `astro.config.ts` and `src/config.yaml` — Astro/site configuration and analytics settings.
- `package.json` — scripts, runtime requirements, and external package dependencies.

### Inquiry, booking, and analytics

- `docs/design/pages.md` — current conversion paths and previously unverified provider transactions.
- `src/pages/contact.astro` and `src/components/ui/Form.astro` — Formspree endpoint, fields, validation, submission, and user-visible status handling.
- `src/pages/book.astro` — Cal.com event link and booking-page flow.
- `src/layouts/Layout.astro` — shared Vercel Analytics and Speed Insights integrations.
- `src/components/common/Analytics.astro` — optional Google Analytics behavior.
- `src/pages/privacy.md` — disclosed form, booking, and analytics behavior.

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- `src/components/ui/Form.astro` already implements native validity checks, a Formspree fetch, loading/success/error states, provider field errors, and direct-contact fallback messaging.
- `src/layouts/Layout.astro` already mounts Vercel Web Analytics and Speed Insights for the site.
- The shared layout and existing pages provide the integration surface; no new provider or application architecture is needed for verification.

### Established Patterns

- Astro builds static output and has no server adapter. GitHub Actions runs checks/builds on pushes and pull requests to `main`; the checked-in workflow does not deploy.
- The booking page links directly to `https://cal.com/theggdoula/consultation`; Cal.com owns booking confirmation and management, with no local booking callback route.
- Google Analytics is disabled (`id: null`). Source has no explicit custom conversion-event calls; the audit should assess inquiry success/error and booking click/confirmation coverage without adding instrumentation.
- The source/config scan found no direct `process.env` or public environment-variable references. `src/pages/rss.xml.ts` uses Astro's generated `import.meta.env.SITE`; compare provider-required settings against actual configuration rather than assuming repository files prove provider state.
- Existing documentation records mocked Formspree response tests, but no real Formspree delivery or Cal.com confirmation was previously verified. The new phase must use provider-approved test modes only.

### Integration Points

- GitHub CI: `.github/workflows/ci.yml`; production deployment linkage and preview/production behavior: Vercel project settings.
- Inquiry: `src/pages/contact.astro` → `src/components/ui/Form.astro` → Formspree, subject to `vercel.json`'s `connect-src` policy.
- Consultation: `src/pages/book.astro` → Cal.com event.
- Analytics: `src/layouts/Layout.astro` → Vercel Analytics and Speed Insights; optional Google Analytics is configured through `src/config.yaml` and `src/components/common/Analytics.astro`.
  </code_context>

<specifics>
## Specific Ideas

- Use only provider-approved test modes. Never submit live forms, create real bookings, or submit real customer data.
- Audit existing conversion-event coverage for inquiry success/error and booking click/confirmation. Do not add instrumentation.
- Report each check with evidence-backed PASS / FAIL / UNVERIFIED status; explain external blockers.
- Make no production/provider configuration changes, deployments, or pushes.
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 1 scope.
</deferred>

---

_Phase: 1-Verify release path and conversion integrations_
_Context gathered: 2026-10-26_
