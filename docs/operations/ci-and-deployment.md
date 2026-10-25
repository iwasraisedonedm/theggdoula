# CI and deployment

## Continuous integration

The repository uses npm only: `packageManager` pins npm 11.6.2, `package-lock.json` is the authoritative dependency tree, and CI installs it with `npm ci`. The workflow in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on pushes and on pull requests targeting `main`. It pins the runner to Ubuntu 24.04 and uses `actions/checkout@v7` and `actions/setup-node@v7` with Node.js 24. It then runs `npm run check` and `npm run build`. The check runs TypeScript 7.1 beta with Astro's content mapper, Oxlint with type-aware rules, Biome formatting on JavaScript, TypeScript, and JSON, and Prettier formatting on Astro, CSS, Markdown, and YAML. The experimental mapper currently surfaces some dependency-only diagnostics, which the type-check wrapper filters; project diagnostics remain blocking. It validates code and build output; it does not deploy.

The workflow has read-only repository permissions, does not persist the checkout token, and cancels superseded runs for the same branch or pull request.

The project package engine requires Node.js `>=22.23.4`. The root [`README.md`](../../README.md) has the end-user command reference; the workflow file is authoritative for CI steps.

## Static output and hosting files

Astro emits the static site to `dist/`. The repository includes:

- [`vercel.json`](../../vercel.json): immutable caching for content-hashed `/_astro/*` assets. Astro owns route and trailing-slash behavior in `src/config.yaml`.

The repository does not contain a Vercel project link. Check the Vercel project, repository, branch, and target environment before treating a push as a deployment. Never use a production target for feature-branch verification.

## Vercel deployment

This checkout's Git remote is `iwasraisedonedm/theggdoula`, and Vercel project `theggdoula` is present in the `iwasraisedonedm` account. Its production URL is `https://theggdoula.vercel.app`, which matches `src/config.yaml`. Vercel build settings and the Git production branch are managed in the dashboard; the repository does not contain a local `.vercel` project link, and those dashboard settings were not verified in this pass.

Astro emits a static site to `dist/`, which Vercel can deploy with its Astro framework preset. Keep `src/config.yaml` as the canonical source for the site's route and trailing-slash behavior; use `vercel.json` only for Vercel-specific behavior that Astro does not own.

Keep GitHub Actions responsible for checks and builds, and use Vercel's Git integration for preview and production deployments. Verify the repository connection and production branch in the Vercel dashboard. The shared Astro layout includes Vercel Web Analytics and Speed Insights. Enable both features for the Vercel project in its dashboard before expecting data in those views. The existing Google Analytics integration remains optional and is controlled by `analytics.vendors.googleAnalytics.id` in `src/config.yaml`.
