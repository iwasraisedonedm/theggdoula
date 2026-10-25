# CI and deployment

## Continuous integration

The workflow in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on pushes and on pull requests targeting `main`. It uses Node.js 24, installs from `package-lock.json` with `npm ci`, then runs `npm run check` and `npm run build`. It validates code and build output; it does not deploy.

The project package engine requires Node.js `>=22.22.3`. The root [`README.md`](../../README.md) has the end-user command reference; the workflow file is authoritative for CI steps.

## Static output and hosting files

Astro emits the static site to `dist/`. The repository includes:

- [`vercel.json`](../../vercel.json): clean URLs, no trailing slash, and immutable caching for `/_astro/*` assets.
- [`netlify.toml`](../../netlify.toml): `npm run build` with `dist` as the publish directory.
- [`wrangler.jsonc`](../../wrangler.jsonc): Cloudflare static assets from `dist/`.
- `Dockerfile`, `docker-compose.yml`, and `nginx/nginx.conf`: static Nginx container serving the built site.

These files describe build/deploy behavior; their presence alone does not prove that a hosting project is connected to this Git repository. Check the hosting project, repository, branch, and target environment before treating a push as a deployment. Never use a production target for feature-branch verification.

## Unresolved Vercel connection (checked 2026-10-25)

The Git remote for this checkout is `iwasraisedonedm/theggdoula`. The existing Vercel project `doula4astrowind` reported recent Git deployments from `iwasraisedonedm/doula4astrowind`. A CLI preview submitted from this checkout was `BLOCKED` with no target or alias; Vercel rejected cancellation. Therefore a Vercel preview deployment for this repository is not verified. Confirm or correct the Vercel Git connection before relying on automatic deploys. No production alias was assigned to that preview.
