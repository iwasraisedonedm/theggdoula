---
name: deploy-to-vercel
description: Deploy a project to Vercel. Use only when the user explicitly requests a preview or production deployment, or asks for a deployment URL.
metadata:
  adapted-from: vercel-labs/agent-skills/skills/deploy-to-vercel
  upstream-version: '3.0.0'
---

# Deploy to Vercel

Use this workflow only for an explicit deployment request. Default to a preview deployment; deploy to production only when the user explicitly names production. A request to deploy does not by itself authorize committing or pushing local changes.

## Preflight

1. Inspect repository state with `git status --short` and `git remote get-url origin`.
2. Check `.vercel/project.json` or `.vercel/repo.json` only if present. These files identify an existing link; do not use `vercel link`, `vercel ls`, or project-inspection commands just to discover whether a project exists.
3. If installed, use `vercel whoami` to check CLI authentication. Use `vercel teams list --format json` only when the account/team is needed.
4. If multiple teams are available and the linked project's `orgId` does not settle the target, ask which team to use. Pass that team as `--scope` on subsequent commands.
5. Check the repo's deployment notes and local validation requirements before uploading or triggering a build.

## Choose the deployment path

### Git-connected project

Vercel's Git integration deploys on a Git push. Ask for explicit authorization before committing or pushing, and stage only task files. Never use `git add .` as a deployment shortcut. Confirm the target branch and expected preview/production effect before pushing.

### Linked project with authenticated CLI

Deploy directly from the linked project directory:

```sh
vercel deploy --yes --no-wait
```

For production, only after explicit production authorization:

```sh
vercel deploy --prod --yes --no-wait
```

If the directory is not linked, `vercel link` creates a project association. Explain that effect and obtain authorization before linking. Do not silently link based on inferred defaults.

Use `vercel inspect <deployment-url> --wait` to wait for the build and inspect the deployment. Report the resulting URL and status; do not claim success until Vercel reports a completed deployment.

### Codex environment without Vercel CLI access

The bundled `resources/deploy-codex.sh` uploads the project archive to the Codex deployment service and returns a preview URL and claim URL. It sends project files outside the repository, so use it only when the user explicitly requested a preview and understands this upload path. Review its exclusions and package contents before running it. This fallback is Codex-specific; Pi should use the Vercel CLI path.

## Report

State whether the deployment is a preview or production deployment, include the returned URL and final status, and identify any external setup the user must complete. Never report a deployment as complete while its build is still pending or failed.

## References

- [Vercel deploy command](https://vercel.com/docs/cli/deploy)
- [Vercel inspect command](https://vercel.com/docs/cli/inspect)
