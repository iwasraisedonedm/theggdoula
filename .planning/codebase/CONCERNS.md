# Concerns

**Analysis Date:** 2026-10-26

## Confirmed Follow-up

1. **External release state is unverified.** Repository CI is configured, but GitHub branch protections and Vercel project/production settings require provider-side verification.
2. **Conversion transactions are unverified.** Contact form client behavior was tested with mocked provider responses; no real Formspree inquiry or Cal.com booking confirmation was performed.
3. **Example routes need a product decision.** `/homes/*`, `/landing/*`, and `/pricing` are generated and accessible. They are excluded from the sitemap and marked `noindex`; this does not make them inaccessible.
4. **Automated behavior coverage is narrow.** The current Node tests cover service records and FAQs; broader pure-helper tests were deferred.
5. **TypeScript diagnostics are filtered.** Eight upstream Astro/TypeScript mapper diagnostics are allowlisted. Their compatibility rationale should be revisited when upstream support changes.

## Worktree State

The repository was already dirty before onboarding. Do not treat mapped source as committed baseline, stage unrelated files, or stamp the current `HEAD` as a clean mapping baseline while local edits remain.

## Canonical Tracking

Details and remediation status remain in [`docs/operations/engineering-audit.md`](../../docs/operations/engineering-audit.md). This file is a concise planning index, not a replacement audit.
