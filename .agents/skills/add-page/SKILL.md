---
name: add-page
description: Add a requested Astro route using current page scope, layouts, and components. Use when a new route or page is explicitly requested.
---

# Add a page

1. Check the [current route inventory](../../../docs/design/pages.md) and confirm the requested route belongs in this site.
2. Add the route in `src/pages/`; Astro derives routes from filenames. Do not create routes from template examples unless requested.
3. Use `PageLayout` for the shared site header/footer, or inspect existing route compositions before choosing another layout.
4. Follow the [component architecture](../../../docs/architecture/components.md), reuse a suitable component, and set route metadata from verified page content.
5. Link only to routes and integrations that exist. Avoid copying demo copy, sample claims, or placeholder destinations.
6. Run `npm run check` and `npm run build` for route changes.

See [write-landing-page](../write-landing-page/SKILL.md) for landing-page-specific composition guidance.
