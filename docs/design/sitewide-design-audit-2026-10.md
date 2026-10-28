# Sitewide design audit

**Date:** 2026-10-27

**Scope:** All 38 generated routes in the static build, shared layout and token system, homepage, service and resource templates, and browser behavior at desktop, tablet, and phone widths.

**Direction:** The Printed Annual, seed `20261027`, zero redraws. Kept the established palette and type. The site’s idea is informed family choice through pregnancy, birth, and postpartum, with doula support clearly alongside clinical care. The live action is the verified free 30-minute consultation booking path.

## Route coverage

The real-browser sweep covered the 38 generated routes: home; About; Services overview and five service details; Contact and Book; Resources, Guides, Better Birth Guide, blog index and page two; seven articles; four category archives; eight tag archives including tag page two; Testimonials; Privacy; Terms; RSS and sitemap outputs. The post-change three-width inspector rechecked the homepage, About, Services, Birth, Prenatal, Better Birth Guide, blog index, and all seven article pages after typography and motion changes.

The route set is data-backed and does not contain demo pages or a standalone FAQ route. The audit preserved routes, titles’ subject matter, service details, clinical boundaries, the Formspree contact flow, the Cal.com booking path, and permission-backed client experiences.

## Findings and corrections

1. **Several key headings wrapped to three or four lines.** This made page entry and mobile scanning harder. Shortened headings on the homepage, About, Services, Prenatal, Birth, Better Birth Guide, and seven article cards/pages while retaining the information each heading introduces. Rechecked the changed routes at 1440, 768, and 390 CSS pixels.
2. **Small text roles fell below a comfortable reading size.** The shared body-small token was 14px, metadata and labels 12px, and compact labels 10px. Raised body-small to 16px and supporting labels/meta to 13px in the source token file; Tailwind `text-sm` and `text-xs` now resolve through those semantic roles. Replaced the homepage’s two 10px utility kickers with `text-xs`. Updated the design-system guidance and token contract assertion.
3. **A shared badge still used a fixed 12px size after the type-role correction.** Updated `.gg-badge` to use the compact-label token for its size, weight, and line-height. All five service-stage badges now render at 13px, with no other service-overview text below 13px.
4. **The shared scroll controller had no participating content.** Added an opt-in-by-system reveal to below-the-fold section headings and editorial images in the existing controller. It only activates with `IntersectionObserver` and `prefers-reduced-motion: no-preference`; first-screen elements stay visible and unsupported browsers keep content visible. Browser inspection confirmed the reduced-motion preference removes the hidden state.

## System and integrity checks

- Type and color continue to come from the DTCG token source and shared Tailwind role mappings. No per-page token overrides were added.
- Preserved the botanical paper/olive identity, Newsreader and Inter roles, fine rules, frame, `.dark` behavior, and existing responsive navigation. Generic inspector rules for mono labels, eyebrows, fine rules, warm paper color, sequential step numbers, outlined cards, and low authentic-photo counts were allowed with explicit reasons; these are existing brand and content choices. No remaining visual-inspector FAILs were accepted for those exceptions, while small supporting copy and service badges were corrected.
- Existing real family-support imagery and first-party guide covers remain in use. No stock or generated care imagery or unsupported testimonials were introduced.
- Checked image alternative text and viewport overflow during the route sweep. No missing alt text or horizontal overflow was found. Lazy images initially absent from screenshots loaded when scrolled into view; this was a capture-timing issue, not a broken asset.
- Mobile navigation opens and closes with its accessible label and expanded state. Theme switching preserves the existing `.dark` contract.
- Contact submission and Cal.com appointment confirmation are provider-owned and were not submitted during this visual audit. The configured flows and links remain intact.

## Critique

The site reads as a calm editorial guide rather than a generic clinic template. The homepage carries the strongest composition; detail pages remain information-led and do not repeat its full layout. The family-choice message and nonmedical scope are specific to this practice, with the consultation action clear on the first screen. The main asset limitation is the small authentic photography set, so imagery was not padded with unrelated stock. Nearby-provider differentiation was not independently researched as part of this source-only audit.

**Scores (design / usability / creativity / content):** 8 / 8 / 7 / 8. **Weighted overall:** 7.8. The system is coherent and readable; it does not claim a novel visual concept, and the authentic image set limits variety.

## Validation

`npm run check`, `npm run build`, and `git diff --check` passed after the changes. The build generated 38 pages. Browser inspection used agent-browser and the design-taste inspector; screenshots and raw per-route measurements were kept in `/tmp/gg-taste-final` and `/tmp/gg-taste-final-mobile` for this review. The modified templates were remeasured at 390px after final edits; the homepage was also inspected at 1440px and 768px.
