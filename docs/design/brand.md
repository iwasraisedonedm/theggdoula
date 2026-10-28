# Grit + Grace Doula brand

## Direction

Use a calm, editorial visual language: warm paper, deep botanical green, generous whitespace, clear type, and fine rules. The homepage is being redesigned in stages. Its current first stage is a full-viewport olive hero with a restrained animated “teesee | the gg doula” wordmark; later landing-page sections will be designed separately. Keep the animation quiet and respect reduced-motion preferences. Keep layouts simple and content-led; use imagery only when it is authentic to pregnancy, birth, postpartum care, or the people providing that care. Do not use stock technology imagery, invented reviews, or unsupported outcome claims.

## Color

The brand has one botanical identity with two semantic theme mappings. Olive anchors light mode; muted sage is reserved for dark-mode interaction; midnight olive provides dark surfaces. The [DTCG token sources](../../src/design/tokens/) own the exact primitive values and theme aliases, and [generated CSS](../../src/assets/styles/generated/design-tokens.css) is their runtime output.

| Role              | Light     | Dark      |
| ----------------- | --------- | --------- |
| Canvas            | `#F8F7F3` | `#1B2119` |
| Primary surface   | `#FFFFFF` | `#20271E` |
| Secondary surface | `#F0EFE8` | `#273024` |
| Tertiary surface  | `#E6E8DE` | `#2E382B` |
| Botanical surface | `#EEF2E8` | `#253222` |
| Heading           | `#252820` | `#F5F4EF` |
| Body              | `#54594F` | `#E7E7DF` |
| Muted             | `#666B60` | `#C6C9BE` |
| Brand action      | `#404D32` | `#A8BF96` |
| Brand hover       | `#293622` | `#BED0AE` |
| On brand          | `#FFFFFF` | `#1B2119` |
| Link              | `#476039` | `#BED0AE` |
| Default border    | `#D8DAD0` | `#465142` |
| Structural border | `#858C7B` | `#88A475` |
| Focus             | `#404D32` | `#BED0AE` |

The light palette was calibrated to reduce the yellow cast in paper neutrals and give the canvas, section, and recessed roles clearer temperature and value separation. The dark mapping remains an independent midnight-and-sage system. Keep earth tones decorative; they must not compete with olive or sage CTAs. Prefer whitespace and surface changes before adding borders or shadows. The current homepage hero uses the semantic brand surface; later sections should use the paper, raised, secondary, botanical, and dark surface roles according to their content. Do not alternate section fills mechanically.

Target WCAG 2.2 AA contrast: 4.5:1 for normal text, 3:1 for large text and applicable UI boundaries. Use the semantic focus role for keyboard indicators in both themes; check actual text, focus, and control pairings against their rendered neighboring surfaces. Tertiary text is not automatically suitable for small copy. Use underlines or another non-color affordance for inline links and preserve natural photography coloration.

## Type

- Body and interface: the shared sans-serif token; use weight 400 for reading and 500–600 for controls.
- Shared page headings: the same sans-serif token, using weight 500–600 and restrained tracking. The homepage and journal use Newsreader at regular weight for approved editorial display roles, with a consistent hierarchy that scales fluidly at narrower widths.
- Small labels: the shared monospace token, uppercase, with modest letter spacing. Use sparingly for section markers and metadata only; use the 10px compact role only where fixed geometry requires it.
- Body copy: the shared 16px / 1.65 role, with centrally defined 18px lead and 14px supporting roles, and a readable measure near 65 characters. Apply the generated `gg-type-*` roles from `tailwind.css`; DTCG tokens own their values and the stylesheet composes responsive sizes. Keep standard Tailwind type utilities at their documented scale for supporting text.
- Keep the established descending heading scale and page-specific editorial mastheads.

## Layout and components

- Spacing follows a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, and 96px. Use 16–24px inside compact controls and 24–32px inside content groupings.
- The current homepage hero fills the viewport and does not use the prior exterior frame or portrait composition. Design later homepage sections as a continuation of the botanical editorial system.
- Align page copy and section headings to shared left content rails. Keep layouts content-led and group sections according to their purpose.
- Use a responsive 48–96px vertical section rhythm for later homepage sections; let open surfaces carry the long-page cadence and reserve borders for content groups that need them.
- Design later homepage section patterns from their content and visitor goals; the previous service-stage and planner compositions are no longer constraints for the redesign.
- Determine the relationship between future resource and FAQ sections as the landing page is redesigned; their previous shared-band layout is not a constraint.
- Ordinary UI surfaces use square corners (`border-radius: 0`), including cards, controls, buttons, badges, forms, and media containers. Create separation with spacing and surface hierarchy; reserve borders for structural edges and useful grouping.
- Buttons use a solid brand fill with the paired on-brand text color, or a transparent fine-border treatment. Keep keyboard focus visible and avoid gradient borders, decorative shadows, and animated color washes.
- Use simple line icons only when they clarify an action or service. Do not use emoji as brand marks.
- Use the square `GG` monogram in the header and footer, with the full site name available to assistive technology. Keep the footer compact and editorial.
- Prefer authentic, softly lit, natural imagery. Avoid heavy filters and imagery that implies a specific clinical outcome.

## Motion

Motion should explain state or gently guide attention. Keep transitions to 150–250ms, use opacity or small positional changes, and honor `prefers-reduced-motion`.
