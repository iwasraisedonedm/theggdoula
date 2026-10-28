# Grit + Grace design system

This document describes the shared style API for Astro pages and widgets. The brand direction and approved theme palette live in [brand.md](brand.md). Implementation follows the source-of-truth map below.

## Agent contract

| Layer                     | Owner                                                                                                                                                                | Rule                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Primitive authoring       | [`src/design/tokens/primitives.tokens.json`](../../src/design/tokens/primitives.tokens.json)                                                                         | DTCG color, dimension, radius, and typography primitives.                                                            |
| Light/dark meaning        | [`semantic.light.tokens.json`](../../src/design/tokens/semantic.light.tokens.json), [`semantic.dark.tokens.json`](../../src/design/tokens/semantic.dark.tokens.json) | Same semantic key paths; values alias primitives.                                                                    |
| Validation and generation | [`build-design-tokens.mjs`](../../scripts/build-design-tokens.mjs)                                                                                                   | Validates the restricted DTCG profile, resolves aliases, checks parity, and generates stable CSS.                    |
| Runtime CSS               | [`generated/design-tokens.css`](../../src/assets/styles/generated/design-tokens.css)                                                                                 | Derived output; never edit by hand.                                                                                  |
| Tailwind v4               | [`tailwind.css`](../../src/assets/styles/tailwind.css)                                                                                                               | `@theme inline` maps semantic variables to project utilities.                                                        |
| Runtime styles            | [`CustomStyles.astro`](../../src/components/CustomStyles.astro), [`shadcn.css`](../../src/assets/styles/shadcn.css)                                                  | CustomStyles declares the local editorial font and site utility values; shadcn names adapt the same semantic tokens. |
| Consumers                 | `src/components/` and `src/pages/`                                                                                                                                   | Prefer semantic utilities and shared component classes.                                                              |

### Typography roles

`primitives.tokens.json` owns shared `--gg-type-*` values. The generator emits them into both theme blocks, and `tailwind.css` composes responsive roles from tokenized minimum, fluid, and maximum dimensions. Astro's Fonts API supplies Inter through `--font-inter`; `CustomStyles.astro` declares the local Newsreader display face. Use the `gg-type-*` roles for page, section, card, body, lead, supporting, metadata, and compact-label text. Semantic `h1`, `h2`, and `h3` elements receive the shared page, section, and card fallback roles. Standard Tailwind type utilities remain available for local supporting text, not as a second hierarchy.

The shared sans-serif is the default for interface text, body copy, and ordinary page headings. Newsreader is reserved for the approved homepage and journal editorial display roles. Compact uppercase labels use the shared monospace role. Body and supporting copy use 16px/1.65, lead copy 18px, and labels and metadata 13px/1.4 or larger. The Tailwind `text-xs` and `text-sm` utilities map to those token roles, so they retain familiar markup without introducing a second set of fixed sizes. Page, section, card, subsection, and editorial title roles use responsive values composed from DTCG dimensions; consumers should not copy those values into page CSS.

The generator supports inherited `$type` on groups and leaf `$type` overrides, color, dimension, number, font-weight, and font-family values, and single-path `{group.token}` references. It rejects duplicate JSON keys, unresolved or cyclic aliases, invalid values, unsupported types/fields, and light/dark shape differences. It is a project-specific DTCG profile, not a parser for every DTCG feature.

Semantic naming is role-first. For example, `{color.olive.800}` is the light `color.brand` value and generates `--gg-color-brand`; Tailwind exposes it as `bg-brand` or `text-brand`. A component should use `bg-brand`, not a palette shade or a copied hex value. Add a semantic role only when a reusable visual role needs a distinct value in one or both themes.

Tailwind `primary` maps to the brand action, `secondary` to its hover state, `accent` to the botanical surface, and `muted` to muted text. The shadcn adapter retains these project meanings. Shadcn `background`, `card`, `border`, `input`, and `ring` remain available through semantic aliases.

### Change a semantic color in five steps

1. Confirm the role and intended light/dark use in [brand.md](brand.md).
2. Add or select a primitive in `primitives.tokens.json`; do not paste hex values into templates.
3. Point the matching light and dark semantic paths at primitives, keeping identical key shapes.
4. Run `npm run tokens:build`, inspect the generated diff, then run `npm run check:tokens`.
5. Check actual text/UI contrast, theme switching, representative routes, and responsive behavior before considering the change complete.

## Tokens and utilities

| Purpose             | Tailwind tokens/utilities                                                                                                                                                                | Canonical runtime variables                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Canvas and surfaces | `bg-page`, `bg-surface`, `bg-surface-subtle`, `bg-surface-tertiary`, `bg-surface-botanical`                                                                                              | `--gg-color-canvas`, `--gg-color-surface*`                       |
| Text and actions    | `text-heading`, `text-default`, `text-muted`, `bg-brand`, `bg-brand-hover`, `text-on-brand`, `text-link`                                                                                 | `--gg-color-text-*`, `--gg-color-brand*`, `--gg-color-link`      |
| Borders and focus   | `border-border`, `border-divider`, `outline-focus`                                                                                                                                       | `--gg-border-color-*`, `--gg-color-border-*`, `--gg-color-focus` |
| Typography          | `font-sans`, `font-heading`, `text-display`, `text-title`, `text-subsection`, `text-body`, `leading-reading`, `leading-heading`, `tracking-heading`, `tracking-label`, `gg-type-*` roles | Inter, editorial Newsreader roles, `--gg-type-*`                 |
| Layout              | `max-w-content`, `max-w-reading`, `max-w-site`                                                                                                                                           | `--gg-layout-*` / `--container-*`                                |
| Shape and motion    | `rounded-control`, `rounded-surface`, `rounded-pill`, `shadow-surface`, `duration-fast`, `duration-standard`, `duration-slow`, `ease-standard`                                           | `--gg-radius-*`, `--gg-shadow-*`, `--gg-transition-*`            |

The base spacing scale is Tailwind's 4px scale. Breakpoints remain `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, and `2xl` 1536px. Shared section spacing is 48px, 64px, and 96px; the grid gap is 24px. Keep the document root at 16px and body tracking normal.

The generated border contract defines a 2px structural/featured width, 1px card/internal/divider width, 3px exceptional maximum, and zero radius. Role colors are generated for structural, component, internal, divider, emphasis, interactive, focus, disabled, and error use. Component and structural boundaries use the contrast-adjusted `#858C7B` light / `#88A475` dark values to reach 3:1 on their field/canvas surfaces; the softer `#B7BCAF` / `#626E5D` suggestions remain documented primitives but are not used for identifying a control boundary. Internal and ordinary card borders can stay understated when surface contrast already supplies grouping. Use the semantic focus token for keyboard indicators and verify it against adjacent surfaces in each theme. Focus states should not cause layout shift. Avoid stacked borders where a surface or parent boundary already groups the content.

The light semantic stack uses a neutral paper canvas (`#F8F7F3`), white primary surface, subdued secondary surface (`#F0EFE8`), and cooler recessed surface (`#E6E8DE`). These are distinct roles, not a recipe to alternate backgrounds on every section. Dark values remain independently tuned to midnight surfaces and sage actions. Keep color changes in the DTCG primitives and semantic aliases, then regenerate CSS; do not add page-level copies of these values. Image text, image scrims, and frame accents are semantic color roles too; use `--gg-color-image-*` and `--gg-color-frame-accent` rather than page-local color literals. Image translucency is composed with `color-mix()` from the opaque semantic role.

## Shared classes

### Homepage typography and layout

The current homepage hero uses the shared editorial display family for “teesee” and the shared sans-serif role for “the gg doula.” It uses the semantic brand surface and foreground tokens and a restrained two-thread letter animation. Future homepage sections should continue the shared typography and surface roles. Use the compact-label role only for metadata, not as a decorative texture.

### Actions and links

Use the existing [`Button.astro`](../../src/components/ui/Button.astro) component for action buttons and links. Its `variant` remains `primary`, `secondary`, `tertiary`, or `link`; corresponding `btn`, `btn-primary`, `btn-secondary`, `btn-tertiary`, and `gg-link` classes remain supported.

```astro
<Button variant="primary" href="/contact">
  Start a conversation
</Button>
<Button variant="secondary" href="/services">
  Explore services
</Button>
<a class="gg-link" href="/about">
  Meet the doula
</a>
```

### Content and section introductions

Use `gg-card` for a neutral content surface and `gg-card-subtle` only when a separate region is useful. Semantic `h1`, `h2`, and `h3` elements inherit the shared page, section, and card title roles; use the matching `gg-type-*` utility when a heading needs an explicit role. For direct markup, use `gg-section-intro`, `gg-section-label`, and `gg-heading`.

```astro
<article class="gg-card p-6 md:p-8">
  <p class="gg-section-label">Postpartum care</p>
  <h3 class="gg-type-card-title mt-3">Support for your first weeks</h3>
  <p class="gg-type-body mt-4 max-w-reading text-default">A clear, readable description.</p>
</article>
```

### Service preview cards

Use [`ServicePreviewCard.astro`](../../src/components/services/ServicePreviewCard.astro) for compact service summaries in a service list. It accepts `number`, `label`, `name`, `description`, and `href`, composes the shared `gg-card` and `gg-badge` styles, and names its detail link for assistive technology. Use a fuller page-specific card when visitors need detailed service information, benefits, or fit guidance.

### Forms, badges, and dividers

Apply `gg-field` to inputs, selects, and textareas; use `gg-checkbox` for checkbox inputs. The existing [`Form.astro`](../../src/components/ui/Form.astro) composes these styles. Associate visible labels with controls and preserve native validation and keyboard behavior. Use `gg-badge` for compact metadata and `gg-divider` for meaningful separation; all ordinary surfaces remain square.

```astro
<label for="visit-type" class="mb-2 block text-base font-medium text-heading">
  Visit type
</label>
<select id="visit-type" name="visitType" class="gg-field">
  <option>Birth doula support</option>
</select>
<span class="gg-badge">Accepting clients</span>
<hr class="gg-divider" />
```

## Theme and accessibility

`ApplyColorMode.astro` applies the `html.dark` class before paint and after Astro `ClientRouter` swaps. `localStorage.theme` stores explicit `light`/`dark` choices; the default is `ui.theme: system`, which follows OS changes until the visitor makes an explicit choice. Storage failures leave the current theme toggle usable and fall back to the configured/system preference. The existing toggle remains two-state. Shiki highlighting continues to follow `.dark`.

Use semantic variables/utilities instead of color literals or mode-specific utility overrides. Run `npm run check:tokens` to verify generated output and contrast pairings; `npm run check` and `npm run build` include token validation. Normal text requires at least 4.5:1 contrast, large text 3:1, and applicable non-text UI 3:1. Re-check rendered surfaces, focus, placeholders, validation, links, and overlay text; automated token tests do not establish full WCAG conformance.

## Do not change

- Preserve established Inter typography and the homepage Newsreader editorial exception.
- Preserve existing spacing, section order, content, routes, assets, integrations, and functionality.
- Keep ordinary UI surfaces at `border-radius: 0`; do not introduce pill or rounded-card treatments.
- The homepage hero is a full-viewport composition without the previous exterior frame. Keep its brand colors semantic and preserve reduced-motion behavior.
- Keep the `.dark`, `localStorage.theme`, system default, and ClientRouter theme behavior compatible.

Component placement and reuse boundaries belong to [component architecture](../architecture/components.md). Keep service records in `src/data/services.ts` and visual choices aligned with [brand.md](brand.md).
