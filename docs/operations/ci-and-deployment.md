# CI and deployment

## Continuous integration

The workflow in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on pushes and on pull requests targeting `main`. It pins the runner to Ubuntu 24.04 and uses `actions/checkout@v7` and `actions/setup-node@v7` with Node.js 24. It installs from `package-lock.json` with `npm ci`, then runs `npm run check` and `npm run build`. It validates code and build output; it does not deploy.

The project package engine requires Node.js `>=22.22.3`. The root [`README.md`](../../README.md) has the end-user command reference; the workflow file is authoritative for CI steps.

## Static output and hosting files

Astro emits the static site to `dist/`. The repository includes:

- [`vercel.json`](../../vercel.json): clean URLs, no trailing slash, and immutable caching for `/_astro/*` assets.
- [`netlify.toml`](../../netlify.toml): `npm run build` with `dist` as the publish directory.
- [`wrangler.jsonc`](../../wrangler.jsonc): Cloudflare static assets from `dist/`.
- `Dockerfile`, `docker-compose.yml`, and `nginx/nginx.conf`: static Nginx container serving the built site.

These files describe build/deploy behavior; their presence alone does not prove that a hosting project is connected to this Git repository. Check the hosting project, repository, branch, and target environment before treating a push as a deployment. Never use a production target for feature-branch verification.

## Vercel deployment (checked 2026-10-26)

The Git remote for this checkout is `iwasraisedonedm/theggdoula`. Vercel project `theggdoula` in the `iwasraisedonedm` account is linked to that GitHub repository with `main` as its production branch. Git pushes create previews for other branches and production deployments from `main`. Its default production domain is `theggdoula.vercel.app`.

This independent site uses the Vercel-provided project domain; no custom domain is configured.
