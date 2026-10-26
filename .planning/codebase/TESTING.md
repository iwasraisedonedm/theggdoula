# Testing Patterns

**Analysis Date:** 2026-10-26

## Framework and Commands

- Test runner: Node.js built-in test runner with `node --experimental-strip-types --test tests/*.test.mjs` (`npm run test`).
- `npm run check` also runs Astro sync/type checking, Oxlint, Biome, and Prettier.
- `npm run build` runs the production static-site build.

## Current Tests

`tests/services.test.mjs` has two tests for route-safe/unique service data, required service fields, and FAQ question/answer completeness. The suite has no separate test dependency.

## Known Coverage Limits

- Broader pure-helper behavior coverage remains deferred pending stable test-seam selection.
- The TypeScript wrapper reports eight known upstream Astro/TypeScript mapper diagnostics as filtered; project diagnostics remain blocking.
- Repository audit notes that Formspree UI status behavior has been exercised with mocked provider responses, but no real inquiry or Cal.com transaction was run.

See [`docs/operations/ci-and-deployment.md`](../../docs/operations/ci-and-deployment.md) and [`docs/operations/engineering-audit.md`](../../docs/operations/engineering-audit.md).
