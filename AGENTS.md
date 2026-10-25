# Agent guidance

Read this file first, then [docs/README.md](docs/README.md) and only the topic pages relevant to the task. Check `.agents/skills/` for an existing workflow before changing a supported feature.

## Working rules

- Inspect source and configuration before relying on documentation; source is authoritative.
- Keep documentation concise and update the owning page when implementation changes.
- Preserve existing behavior and unrelated worktree changes. Stage only task files.
- Keep internal engineering docs in Markdown. Do not add a documentation site, framework, MCP server, or dependency.
- Keep active GSD plans, decisions, and execution state in `.planning/` when GSD is present; do not use `docs/` as a plan tracker.

## Repository map

- `src/pages/`: file-based Astro routes.
- `src/components/`, `src/layouts/`: reusable UI and page composition.
- `src/data/post/`, `src/content.config.ts`: blog content and collection schema.
- `src/config.yaml`, `vendor/integration/`: site configuration and `astrowind:config` loader.
- `astro.config.ts`, `src/assets/styles/`: Astro integrations and Tailwind CSS v4.
- `docs/`: engineering documentation; start at `docs/README.md`.

## Task routing

- Architecture or source ownership: [system overview](docs/architecture/system-overview.md).
- Blog content or route generation: [content and routes](docs/engineering/content-and-routes.md).
- Configuration and integrations: [configuration](docs/integrations/configuration.md).
- CI, builds, or deployments: [CI and deployment](docs/operations/ci-and-deployment.md).
- Change workflow: [implementation workflow](docs/workflows/implementation.md).

Run `npm run check` and `npm run build` for code changes. The package requires Node.js `>=22.22.3`.
