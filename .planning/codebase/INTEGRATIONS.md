# Integrations

**Analysis Date:** 2026-10-26

## External Services

- Formspree handles the configured contact-form submission from `src/pages/contact.astro` and `src/components/ui/Form.astro`.
- Cal.com hosts the consultation event linked from `src/pages/book.astro`.
- Vercel Web Analytics and Speed Insights are enabled through shared layout integration; Google Analytics is unconfigured (`id: null` in `src/config/site.ts`).
- Astro community embed packages provide Twitter, Vimeo, and YouTube support; `astro.config.ts` configures the relevant integrations.

## Hosting and Automation

- Astro emits static output; `vercel.json` owns redirects, security headers, and asset caching.
- `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`; it checks and builds but does not deploy.
- Provider dashboard state is not represented in the repository.

## Verification Limits

- Repository documentation records mocked Formspree behavior tests; no real inquiry was submitted for this audit.
- Cal.com availability and a real confirmation were not tested.
- GitHub branch protection and Vercel project linkage/production settings remain provider-side checks.

See [`docs/design/pages.md`](../../docs/design/pages.md), [`docs/integrations/configuration.md`](../../docs/integrations/configuration.md), and [`docs/operations/ci-and-deployment.md`](../../docs/operations/ci-and-deployment.md) for canonical details.
