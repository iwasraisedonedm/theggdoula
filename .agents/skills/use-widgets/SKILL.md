---
name: use-widgets
description: Select and compose existing AstroWind widgets without copying demo content. Use when a page section can reuse a current widget.
---

# Reuse a page widget

`src/components/widgets/` contains AstroWind's general-purpose section components. Treat them as implementation options, not as approved site content or a prescribed page layout.

## Find the right component

| Need                    | Start with                                                              |
| ----------------------- | ----------------------------------------------------------------------- |
| Page introduction       | `Hero`, `Hero2`, `HeroText`, `Headline`                                 |
| Content and features    | `Content`, `Features`, `Features2`, `Features3`, `Bento`, `FeatureTabs` |
| Process or chronology   | `Steps`, `Steps2`, `Timeline`                                           |
| Quotes and credibility  | `Quote`, `Testimonials`, `SocialProof`, `Stats`, `Brands`               |
| Questions and next step | `FAQs`, `CallToAction`, `Contact`                                       |
| Blog content            | `BlogLatestPosts`, `BlogHighlightedPosts`                               |

The source component and its props are authoritative. Inspect its Astro frontmatter and `src/types.d.ts`; this index intentionally does not duplicate full prop schemas.

## Use rules

- Check `src/components/services/`, `src/components/resources/`, and `src/components/common/` for site-specific components before using a generic widget.
- Keep one clear page heading and use section IDs only for real anchor destinations.
- Pass accurate image alt text and use current design guidance in `docs/design/brand.md` and `docs/design/system.md`.
- Do not copy demo text or add a demo route. See [component architecture](../../../docs/architecture/components.md) before creating a new component.
