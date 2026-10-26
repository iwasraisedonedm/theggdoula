---
name: write-landing-page
description: Compose a requested landing page with existing layouts and widgets. Use only when landing-page work is in scope.
---

# Compose a landing page

Use this procedure only when a landing page is part of the requested work. The files under `src/pages/landing/` are AstroWind examples, not approved Grit + Grace content or default starting points.

1. Follow [add-page](../add-page/SKILL.md) and check the [current route inventory](../../../docs/design/pages.md) before creating or changing a route.
2. Select a layout after inspecting current routes: `LandingLayout` has a separate header; `PageLayout` uses the site header and footer.
3. Compose the requested content with existing components from `src/components/widgets/`; see [use-widgets](../use-widgets/SKILL.md).
4. Keep claims, pricing, quotes, and calls to action factual and linked to configured destinations. Do not copy SaaS/demo text or add a route outside the requested scope.
5. Add structured data only when it matches visible content; follow [add-structured-data](../add-structured-data/SKILL.md).
6. Run `npm run check` and `npm run build` for source changes.
