# Implementation workflow

1. Read [AGENTS.md](../../AGENTS.md), then use the [documentation index](../README.md) to load the smallest relevant references.
2. Inspect the owning source and configuration before editing. Use [the current page inventory](../design/pages.md) for route scope and a matching [skill procedure](../README.md#task-oriented-skill-catalog) when one exists.
3. Make the smallest change that satisfies the request. Preserve existing behavior and unrelated staged, modified, and untracked files.
4. Update the single owning document when a durable architecture, configuration, or workflow fact changes. Keep permanent knowledge in `docs/`; reserve `.planning/` for GSD-managed execution state.
5. For source, configuration, or tooling changes, run `npm run check` and `npm run build`. For documentation-only changes, validate links, paths, and command names, then run `npm run check` for formatting.
6. Report the changed files, checks actually run, and any remaining decision or blocker. Do not commit, push, or deploy unless requested.
