# Stack

**Analysis Date:** 2026-10-26

## Runtime and Framework

- Node.js `>=22.23.4`; package manager npm `11.6.2` (`package.json`). CI uses Node 24.
- Astro `^7.4.2`, static output; AstroWind provides the template foundation.
- TypeScript `7.1.0-beta`; Tailwind CSS `^4.3.3` through its Vite plugin.
- Blog content uses Astro Content Collections and MDX. The test runner is Node's built-in test runner.

## Main Tooling

- Astro check/build: `npm run check`, `npm run build`.
- Type checking: `scripts/typecheck.mjs`, invoked by `npm run check:types` after `astro sync`.
- Oxlint, Biome, and Prettier are the configured lint/format tools.
- Dependencies and lockfile are `package.json` and `package-lock.json`.

## Canonical References

- Setup and commands: [`README.md`](../../README.md)
- Configuration flow and integration ownership: [`docs/architecture/system-overview.md`](../../docs/architecture/system-overview.md) and [`docs/integrations/configuration.md`](../../docs/integrations/configuration.md)
- CI verification: [`docs/operations/ci-and-deployment.md`](../../docs/operations/ci-and-deployment.md)
