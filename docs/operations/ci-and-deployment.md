# CI and deployment

## Continuous integration

The repository uses npm only: `packageManager` pins npm 11.6.2, `package-lock.json` is the authoritative dependency tree, and CI installs it with `npm ci`. The workflow in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on pushes and on pull requests targeting `main`. It pins the runner to Ubuntu 24.04 and uses `actions/checkout@v7` and `actions/setup-node@v7` with Node.js 24. It then runs `npm run check` and `npm run build`. The check runs TypeScript 7.1 beta with Astro's content mapper, Oxlint with type-aware rules, Biome formatting on JavaScript, TypeScript, and JSON, and Prettier formatting on Astro, CSS, Markdown, and YAML. The experimental mapper currently surfaces some dependency-only diagnostics, which the type-check wrapper filters; project diagnostics remain blocking. It validates code and build output; it does not deploy.

The workflow has read-only repository permissions, does not persist the checkout token, and cancels superseded runs for the same branch or pull request.

The project package engine requires Node.js `>=22.23.4`. The root [`README.md`](../../README.md) has the end-user command reference; the workflow file is authoritative for CI steps.

## Static output and hosting files

Astro emits the static site to `dist/`. The repository includes:

- [`vercel.json`](../../vercel.json): site-wide Content Security Policy and security headers, plus immutable caching for content-hashed `/_astro/*` assets. The CSP permits inline Astro scripts and styles used by this static site, limits external scripts and embeds to configured providers, and blocks inline event-handler attributes. Vercel supplies HSTS. Astro owns route and trailing-slash behavior in `src/config.yaml`.

The ignored [`.vercel/repo.json`](../../.vercel/repo.json) links this checkout to the `theggdoula` Vercel project and the `iwasraisedonedm/theggdoula` GitHub repository. The project uses Astro, Node.js 24, and `main` as its production branch. Never use a production target for feature-branch verification.

## Vercel deployment

This checkout's Git remote is `iwasraisedonedm/theggdoula`, and Vercel project `theggdoula` is present in the `iwasraisedonedm` account. Its production URL is `https://theggdoula.vercel.app`, which matches `src/config.yaml`. Vercel's Git integration connects to this repository and uses `main` for production.

Astro emits a static site to `dist/`, which Vercel deploys with its Astro framework preset. This project has no on-demand routes or serverless functions, so it does not need the `@astrojs/vercel` adapter. Keep `src/config.yaml` as the canonical source for route and trailing-slash behavior; use `vercel.json` only for Vercel-specific behavior that Astro does not own.

Keep GitHub Actions responsible for checks and builds, and use Vercel's Git integration for preview and production deployments. Vercel Deployment Checks require the GitHub Actions `check-and-build` job to pass before promoting a production deployment. Keep that job name stable. Standard Deployment Protection is enabled while the production domain remains public.

The shared Astro layout includes Vercel Web Analytics and Speed Insights, and both are available in the Vercel project dashboard. Astro's image pipeline emits optimized static images, and Astro's Fonts API self-hosts Inter. The existing Google Analytics integration remains optional and is controlled by `analytics.vendors.googleAnalytics.id` in `src/config.yaml`.

Because the site is static and has no request-handling API, function regions, failover, ISR, function tracing, runtime rate limits, and Fluid Compute do not apply. Vercel Firewall has baseline mitigations active but no custom managed rules or bot blocking; keep search crawlers available and add targeted rules if the project gains dynamic endpoints or experiences abuse. Enterprise-only controls such as SSO, SCIM, audit logs, and load testing are outside the current setup.
