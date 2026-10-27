---
name: write-landing-page
description: Compose a requested landing page with the current site system.
---

# Compose a landing page

Use this procedure only when landing-page work is requested.

1. Check the [current route inventory](../../../docs/design/pages.md) and follow [add-page](../add-page/SKILL.md) before changing routes.
2. Use the shared `PageLayout` unless the route has a documented reason for a distinct shell.
3. Inspect current reusable components before creating new composition; see [use-widgets](../use-widgets/SKILL.md).
4. Keep claims, pricing, testimonials, and calls to action factual and linked to configured destinations.
5. Add structured data only when it matches visible content; follow [add-structured-data](../add-structured-data/SKILL.md).
6. Run `npm run check` and `npm run build` for source changes.
