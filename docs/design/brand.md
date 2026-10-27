# Grit + Grace Doula brand

## Direction

Use a calm, editorial visual language: warm paper, deep botanical green, generous whitespace, clear type, and fine rules. The homepage and supplied reference are the visual anchors. Keep the homepage's diagonal paper texture faint and avoid vertical alignment guides. Use content panels to give each section a clear, quiet frame. Keep layouts simple and content-led; use imagery only when it is authentic to pregnancy, birth, postpartum care, or the people providing that care. Do not use stock technology imagery, invented reviews, or unsupported outcome claims.

## Color

Use these semantic values throughout the site. Do not introduce route-specific accent colors.

| Role               | Light     | Dark      |
| ------------------ | --------- | --------- |
| Page               | `#FBFAF7` | `#18231D` |
| Surface            | `#FFFFFF` | `#202E26` |
| Subtle surface     | `#F3F4F0` | `#263B30` |
| Homepage panel     | `#FBFAF7` | `#292A25` |
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
- Shared page headings: Inter, using weight 500–600 and restrained tracking. The homepage is an approved editorial exception: use Newsreader at weight 300 for its hero and major section headings, with a clear 48px / 36px desktop scale.
- Small labels: system monospace, uppercase, with modest letter spacing. Use sparingly for section markers and metadata only.
- Body copy: 16px minimum on desktop and mobile, 1.55–1.7 line height. Keep paragraphs to a readable measure of about 65 characters. The homepage hero description may use 20px / 28px to balance its display headline.
- Headings: use a compact descending scale (36–60px standard page title, 24–36px section title, 16–24px subsection title, adjusted responsively). Keep approved page-specific editorial mastheads and form compositions intact.

## Layout and components

- Spacing follows a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, and 96px. Use 16–24px inside compact controls and 24–32px inside content groupings.
- Separate each surface with a visible 1px border and/or a restrained surface-color change. On the homepage, use centered warm paper panels with clear gutters from the exterior frame. Inner panels use a fine border with short, high-contrast square corner marks to make the frame read clearly, without shadows. Keep spacing controlled and preserve actual CSS grid layouts for content alignment.
- Keep the homepage color rhythm to the warm page backdrop, one consistent paper panel, and a restrained sage tint for the conversation callout. Let nested cards stay transparent or use borders; avoid stacking white, gray, and textured fills inside each section.
- Align page copy and section headings to the shared left content rail. Use consistent container widths and explicit column grids so related sections line up across routes; reserve centered alignment for compact controls, data values, and overlays where it improves use.
- Use 1px semantic borders by default, with 1.5px section frames and a 2px portrait frame on the homepage for hierarchy. Keep homepage frames, panels, and controls square-cornered. Pills are reserved for compact status labels outside the homepage.
- Buttons use a solid brand green fill with the paired on-brand text color from the palette, or a transparent background and fine border for the secondary action. Use visible focus rings and clear hover states. Avoid gradient borders, drop shadows, and animated color washes.
- Use simple, consistent line icons only when they clarify an action or service. Do not use emoji as brand marks.
- Use the square `GG` monogram in the header and footer, with the full site name available to assistive technology. Keep the warm paper and botanical green pairing.
- Keep the footer compact and editorial: a clear brand and booking block, grouped navigation links, and a slim legal/social bar on a softly differentiated surface.
- Prefer authentic, softly lit, natural imagery with warm neutral color balance. Avoid overlays, heavy filters, and imagery that implies a specific clinical outcome.

## Motion

Motion should explain state or gently guide attention. Keep transitions to 150–250ms, use opacity or small positional changes, and honor `prefers-reduced-motion`. Do not use looping marquees or entrance animations for essential content.

## Light and dark mode

The site follows the operating-system preference by default and retains the explicit user theme toggle. Both modes use the paired semantic palette above; do not add independent dark-mode colors to individual components. Surfaces, borders, focus indicators, and text must all change together through the shared tokens.

## Source of truth

`src/components/CustomStyles.astro` owns shared typography and color tokens. `src/assets/styles/tailwind.css` maps those tokens into Tailwind utilities and shared component classes; usage is documented in [the design system](system.md). `src/navigation.ts` owns the branded header and footer links. `src/config.yaml` owns the site name, metadata, and system theme default. Keep this page aligned when those values change.
