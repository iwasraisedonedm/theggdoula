# Implementation workflow

1. Read `AGENTS.md`, then use [the documentation index](../README.md) to open only the relevant references.
2. Search for the owning files and inspect their current implementation before editing.
3. Check `.agents/skills/` for a feature-specific procedure; follow it when applicable.
4. Make the smallest change that satisfies the task. Preserve unrelated staged, modified, and untracked files.
5. Update the owning engineering page when architecture, configuration, or workflow behavior changes.
6. Run `npm run check` and `npm run build` for code changes. For documentation-only changes, verify links, paths, and command names, then run `npm run check` for formatting.
7. Stage only the files that belong to the task and report checks actually run.
