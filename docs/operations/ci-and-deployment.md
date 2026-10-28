# CI and deployment

## Continuous integration

The versioned workflow in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on pushes and pull requests targeting `main`. It uses Ubuntu 24.04, Node.js 24, npm `11.6.2`, read-only repository permissions, and `npm ci`. It runs `npm run check` and `npm run build`; it does not deploy.

`npm run check` runs `astro sync`, the TypeScript mapper wrapper, built-in Node tests, Oxlint, Biome formatting, and Prettier formatting. `npm run build` validates the Astro routes and emits static files to `dist/`. The typecheck wrapper filters the currently allowlisted upstream diagnostics from the TypeScript 7.1 beta compatibility set; project diagnostics remain blocking.

Third-party skill collections installed under `.agents/skills/` remain verbatim and are excluded from Prettier checks in `.prettierignore`.

Local development requires Node.js `>=22.23.4` and npm `11.6.2`. The project package and `package-lock.json` declare the dependency tree; CI enforces the npm version before `npm ci`.

## Hosting configuration

- `astro.config.ts` selects static output; there is no server adapter.
- `src/config/site.ts` owns the canonical site URL, base path, and trailing-slash policy.
- `vercel.json` owns versioned Vercel headers, CSP, redirects, and static-asset caching.
- GitHub Actions owns repository checks and builds. It does not trigger a deployment.

Vercel project linkage, production branch, protection settings, and team/account state are configured in provider dashboards and are not established by these files. Verify those settings with the provider when deployment work is explicitly requested. Do not infer current dashboard state from ignored local `.vercel/` files.
