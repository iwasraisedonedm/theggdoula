# Grit + Grace Doula brand

## Direction

Use a calm, editorial visual language: warm paper, deep botanical green, generous whitespace, clear type, and fine rules. The homepage and supplied reference are the visual anchors. A faint square grid may sit behind the hero to support its alignment; do not repeat it across the page. Keep layouts simple and content-led; use imagery only when it is authentic to pregnancy, birth, postpartum care, or the people providing that care. Do not use stock technology imagery, invented reviews, or unsupported outcome claims.

## Color

Use these semantic values throughout the site. Do not introduce route-specific accent colors.

| Role               | Light     | Dark      |
| ------------------ | --------- | --------- |
| Page               | `#FBFAF7` | `#18231D` |
| Surface            | `#FFFFFF` | `#202E26` |
| Subtle surface     | `#F3F4F0` | `#263B30` |
| Heading            | `#26352D` | `#F4F3ED` |
| Body text          | `#39463E` | `#E4E8E2` |
| Muted text         | `#66736B` | `#B5C0B8` |
| Brand green        | `#28684F` | `#8FBCA3` |
| Brand green hover  | `#1F533E` | `#A8CBB7` |
| Text on brand fill | `#FFFFFF` | `#18231D` |
| Border             | `#DFE4DE` | `#3B4B41` |
| Focus ring         | `#28684F` | `#A8CBB7` |

Green is for primary actions, links, and small markers. Keep large surfaces neutral. Text and controls must remain legible in both modes.

## Type

- Body and interface: Inter, already self-hosted through Astro's Fonts API; use weight 400 for reading and 500–600 for controls.
- Headings: Inter, using weight 500–600 and restrained tracking. Create hierarchy with size, weight, line length, and spacing rather than adding a competing display face.
- Small labels: system monospace, uppercase, with modest letter spacing. Use sparingly for section markers and metadata only.
- Body copy: 16px minimum on desktop and mobile, 1.55–1.7 line height. Keep paragraphs to a readable measure of about 65 characters.
- Headings: use a compact descending scale (36–60px standard page title, 24–36px section title, 16–24px subsection title, adjusted responsively). Keep approved page-specific editorial mastheads and form compositions intact.

## Layout and components

- Spacing follows a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, and 96px. Use 16–24px inside compact controls and 24–32px inside content groupings.
- Separate each surface with a visible 1px border and/or a restrained surface-color change. Keep spacing controlled; do not use decorative background grids. Preserve actual CSS grid layouts for content alignment.
- Align page copy and section headings to the shared left content rail. Use consistent container widths and explicit column grids so related sections line up across routes; reserve centered alignment for compact controls, data values, and overlays where it improves use.
- Borders are 1px in the semantic border color. Use square corners by default; use a 2–4px radius for controls and content surfaces. Pills are reserved for compact status labels.
- Buttons use a solid brand green fill with the paired on-brand text color from the palette, or a transparent background and fine border for the secondary action. Use visible focus rings and clear hover states. Avoid gradient borders, drop shadows, and animated color washes.
- Use simple, consistent line icons only when they clarify an action or service. Do not use emoji as brand marks.
- Use the text wordmark “Grit + Grace Doula” in the header and the `G+G` monogram in browser and touch icons. Keep the warm paper and botanical green pairing.
- Prefer authentic, softly lit, natural imagery with warm neutral color balance. Avoid overlays, heavy filters, and imagery that implies a specific clinical outcome.

## Motion

Motion should explain state or gently guide attention. Keep transitions to 150–250ms, use opacity or small positional changes, and honor `prefers-reduced-motion`. Do not use looping marquees or entrance animations for essential content.

## Light and dark mode

The site follows the operating-system preference by default and retains the explicit user theme toggle. Both modes use the paired semantic palette above; do not add independent dark-mode colors to individual components. Surfaces, borders, focus indicators, and text must all change together through the shared tokens.

## Source of truth

`src/components/CustomStyles.astro` owns shared typography and color tokens. `src/assets/styles/tailwind.css` maps those tokens into Tailwind utilities and shared component classes; usage is documented in [the design system](system.md). `src/navigation.ts` owns the branded header and footer links. `src/config.yaml` owns the site name, metadata, and system theme default. Keep this page aligned when those values change.
