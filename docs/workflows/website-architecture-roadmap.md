# Grit + Grace Doula website architecture and page plan

## Scope rule

This document is the working architecture reference for upcoming page tasks. It is not authorization to build every route listed below. Implement only the page or pages explicitly requested in the current user prompt. The user will request missing pages as needed. Keep the phases as a sequencing guide, do not start later work automatically, and reuse already completed work.

The Services overview and five service detail routes already exist. See the [current route inventory and content plan](../design/pages.md) before changing routes or page scope.

## Content reference

The user designated `~/Projects/doula` as a separate, read-only content reference for Teesee's biography, training, qualifications, services, and authentic site imagery, and confirmed that the credentials posted there are verified and true. When a requested page needs those details, copy the relevant text and assets into this checkout and keep the copy independent. Do not link to the reference checkout or change current-project routes as part of a content transfer. Preserve this checkout's design and routing. Leave a content gap only when the reference does not supply the information needed for the requested page.

## Objective

Build a complete, conversion-focused, multi-page website using the existing Astro/AstroWind project.

The homepage serves as the primary introduction and conversion funnel. Dedicated pages provide deeper information, establish trust, support SEO, answer client questions, and guide visitors toward booking a free consultation.

## 1. Pre-implementation audit

Before modifying code:

- Inspect existing routes, layouts, components, navigation, design tokens, and content.
- Review AstroWind's blog configuration, permalink settings, and content collections.
- Identify reusable components and existing implementations.
- Preserve established branding, typography, colors, spacing, surfaces, and interactions.
- Follow existing project instructions and architectural conventions.
- Do not introduce competing component systems, duplicate routes, or unnecessary dependencies.
- Preserve functional integrations and existing content.

## 2. Required sitemap

### Primary pages

- `/` — Homepage
- `/about/` — Teesee's story, qualifications, philosophy, and approach
- `/services/` — Services overview and package comparisons
- `/testimonials/` — Approved client experiences
- `/contact/` — General inquiry form
- `/book/` — Free consultation booking

### Service pages

- `/services/prenatal/`
- `/services/birth/`
- `/services/postpartum/`
- `/services/breastfeeding/`
- `/services/newborn-care/`

### Resource pages

- `/resources/` — Resource hub
- `/resources/blog/` — Blog index
- `/resources/blog/[slug]/` — Individual articles
- `/resources/guides/` — Downloadable guides
- `/resources/better-birth-guide/` — Dedicated guide landing page
- `/resources/faq/` — Frequently asked questions

### Supporting pages

- `/privacy/`
- `/terms/`
- Custom 404 page
- Booking confirmation/success state
- Inquiry confirmation/success state
- Cancellation/rescheduling information, if required by the booking workflow

## 3. Implementation priority

Use this order when the user requests the corresponding work. Do not implement unrequested pages just because they appear in a phase.

### Phase 1 — Core conversion architecture

Pages:

1. `/services/` — implemented
2. `/about/`
3. `/book/`
4. `/contact/`

Requirements:

- Establish the primary visitor journey.
- Provide consistent navigation and conversion opportunities.
- Use existing design-system components.
- Make every page useful independently of the homepage.
- Preserve existing form and scheduling integrations.

### Phase 2 — Primary service pages

Build when requested:

1. `/services/birth/`
2. `/services/postpartum/`
3. `/services/prenatal/`

Each service page should contain:

- Service-specific hero and value proposition
- Intended client and relevant needs
- Benefits and scope of support
- Services, deliverables, and package details, only when verified
- Before/during/after process where applicable
- Qualifications and trust signals, only when verified
- Relevant FAQs
- Related services/resources
- Contextual CTA linking to `/book/` when booking is configured

Avoid duplicating identical page compositions with only text substitutions. Adapt layouts and section hierarchy to the actual service.

### Phase 3 — Additional services

Build when requested:

1. `/services/breastfeeding/`
2. `/services/newborn-care/`

Requirements:

- Clearly describe included support and service boundaries.
- Explain client expectations and engagement process using verified information.
- Cross-link related services.
- Include contextual booking CTAs when booking is configured.

### Phase 4 — Educational resources

Build when requested:

1. `/resources/`
2. `/resources/faq/`
3. `/resources/guides/`
4. `/resources/better-birth-guide/`
5. `/resources/blog/`
6. `/resources/blog/[slug]/`

Requirements:

- Organize resources by relevant pregnancy, birth, and postpartum topics.
- Make articles and guides discoverable through internal navigation.
- Link educational content to relevant service pages.
- Provide appropriate download or lead-capture flows.
- Reuse AstroWind's existing blog/content infrastructure.
- Update permalink configuration to support `/resources/blog/`.
- Avoid creating parallel blog systems.
- Preserve canonical URLs and implement redirects where existing routes change.

### Phase 5 — Trust and supporting pages

Build when requested:

1. `/testimonials/` when approved testimonials are available
2. `/privacy/`
3. `/terms/`
4. Custom 404
5. Booking/inquiry success states

Requirements:

- Use only authentic, approved testimonials.
- Do not fabricate reviews, qualifications, certifications, or outcomes.
- Keep legal pages aligned with actual data collection and integrations.
- Provide clear navigation from error and confirmation states.

## 4. Primary navigation

Desktop:

- Logo → `/`
- About → `/about/`
- Services → `/services/` (dropdown)
- Resources → `/resources/` (dropdown)
- Contact → `/contact/`
- Book Now → `/book/` (primary CTA, once the route can complete booking)

### Services dropdown

- All Services
- Prenatal Support
- Birth Doula
- Postpartum Support
- Breastfeeding Support
- Newborn Care

### Resources dropdown

- All Resources
- Blog
- Guides
- Better Birth Guide
- FAQs

### Secondary navigation

- Testimonials
- Privacy
- Terms
- Additional supporting links

Requirements:

- Every primary navigation item must link to its own dedicated route.
- Do not substitute homepage anchor links for dedicated pages.
- Dropdown parent links must remain navigable.
- Support keyboard navigation, focus states, and mobile menus.
- Maintain active route indicators.
- Use semantic HTML and accessible interactions.
- Avoid unnecessary client-side JavaScript.

## 5. Conversion and internal linking

### Visitor journey

Discovery:

- Homepage
- Blog
- Educational guides

Evaluation:

- About
- Services overview
- Individual service pages
- FAQs
- Testimonials

Conversion:

- `/book/`
- `/contact/`

### Internal linking rules

- Homepage → Services → Specific Service → Book
- Blog Article → Related Service → Book
- Guide → Related Resources/Services → Book
- About → Services/Book
- FAQ → Relevant Service/Book
- Testimonials → Related Service/Book

Requirements:

- Every meaningful visitor journey should offer a contextual next step.
- Avoid forcing visitors to return to the homepage.
- Use descriptive links rather than generic "Learn More" everywhere.
- Differentiate primary booking CTAs from secondary informational CTAs.
- Avoid excessive or repetitive CTAs.
- Until `/book/` is configured, label contact-form links as inquiries rather than completed bookings.

## 6. Shared page architecture

Reuse existing project components where appropriate:

- SiteHeader
- SiteFooter
- PageHero
- SectionContainer
- SectionHeading
- ServiceCard
- ServiceGrid
- TrustSection
- TestimonialCard
- FAQAccordion
- RelatedResources
- RelatedServices
- CTASection
- Breadcrumbs
- FormSection
- BookingSection

Only extract reusable components when multiple pages genuinely share the same structure or behavior.

Requirements:

- Consistent typography, spacing, containers, surfaces, borders, and interactions.
- Preserve the established design system.
- Allow page-specific compositions.
- Maintain responsive layouts.
- Ensure visual hierarchy and intentional section separation.
- Avoid generic template repetition.

## 7. SEO and technical requirements

- Unique page titles and meta descriptions.
- One meaningful H1 per page.
- Semantic heading hierarchy.
- Canonical URLs.
- Appropriate structured data where supported.
- Descriptive internal links.
- XML sitemap coverage.
- Accessible image alt text.
- Optimized images and loading behavior.
- Responsive layouts.
- Minimal client JavaScript.
- No duplicate or competing routes.
- No broken internal links.
- Preserve existing analytics, forms, and scheduling integrations.

For blog routing, inspect AstroWind's existing content collections and permalink configuration before changing routes.

## 8. Content integrity

- Reuse verified existing project content.
- Do not invent package prices, credentials, client testimonials, service availability, or guarantees.
- Keep uncertain details in clearly marked content placeholders.
- Avoid unsupported medical claims.
- Preserve the client's established tone and brand identity.

## 9. Anti-slop guardrails

- No generic SaaS-style page layouts.
- No identical section sequences across every page.
- No excessive gradients, glow effects, or decorative animations.
- No unnecessary cards or nested containers.
- No competing design systems.
- No arbitrary color or typography changes.
- No placeholder testimonials or fabricated credibility signals.
- No unnecessary dependencies or client-side frameworks.
- No homepage-section redirects in place of dedicated pages.
- Prioritize purposeful layouts, strong typography, clear hierarchy, and conversion clarity.

## 10. Execution and verification

For each user-requested page task:

1. Audit the current implementation and routes before editing.
2. Map only the requested page(s) to the target sitemap.
3. Identify reusable components and any dependency on missing pages or integrations.
4. Implement and verify the requested page(s) only.
5. Reuse existing design tokens and layout conventions.
6. Verify routes, navigation, integrations, and internal links related to the change.
7. Run `npm run check` and `npm run build` for code changes.
8. Follow the user's requested npm → GitHub → Vercel deployment workflow after each requested implementation task.
9. Fix implementation regressions before proceeding.

## Definition of done

- Every route implemented for the current task renders correctly.
- Navigation links to dedicated pages that exist or are explicitly part of the current task.
- Desktop and mobile navigation function correctly.
- Service pages provide distinct, useful content when requested.
- Booking and inquiry integrations remain functional; do not imply a missing integration works.
- Blog routes use one canonical content system.
- Internal links support the intended discovery-to-booking journey without linking into unimplemented pages.
- Existing design-system consistency is preserved.
- Build and relevant validation checks pass.

## Immediate task handling

The original roadmap named the Phase 1 pages as Services Overview, About, Book, and Contact. The Services overview is now implemented. For future work, implement only the page named in the user's next prompt; the remaining Phase 1 pages are not authorized until requested.
