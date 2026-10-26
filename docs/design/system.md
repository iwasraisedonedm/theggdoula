# Grit + Grace design system

This document describes the shared styles available to Astro pages and widgets. The brand palette and art direction live in [brand.md](brand.md); implementation is owned by [`CustomStyles.astro`](../../src/components/CustomStyles.astro) and [`tailwind.css`](../../src/assets/styles/tailwind.css).

## Tokens

Use semantic names in templates. The CSS variables in `CustomStyles.astro` resolve to the matching light or `.dark` palette and retain AstroWind's `--aw-*` compatibility names.

| Purpose           | Tailwind token and utility                                                                                                                                            | Source                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Brand action      | `--color-brand` (`bg-brand`, `text-brand`)                                                                                                                            | `--aw-color-primary`                                  |
| Brand hover       | `--color-brand-hover` (`bg-brand-hover`)                                                                                                                              | `--aw-color-secondary`                                |
| Page, surfaces    | `--color-page`, `--color-surface`, `--color-surface-subtle`                                                                                                           | `--aw-color-bg-page`, `--gg-color-surface*`           |
| Text              | `--color-heading`, `--color-default`, `--color-muted`                                                                                                                 | `--aw-color-text-*`                                   |
| Borders and focus | `--color-border`, `--color-focus`, `--color-divider`                                                                                                                  | `--gg-color-*`                                        |
| Typography        | `font-sans`, `font-heading`, `text-display`, `text-title`, `text-subsection`, `text-body`, `leading-reading`, `leading-heading`, `tracking-heading`, `tracking-label` | Inter and `--gg-type-*`                               |
| Layout            | `max-w-content`, `max-w-reading`, `max-w-site`                                                                                                                        | `--gg-layout-*` / `--container-*`                     |
| Shape and motion  | `rounded-control`, `rounded-surface`, `rounded-pill`, `shadow-surface`, `duration-fast`, `duration-standard`, `duration-slow`, `ease-standard`                        | `--gg-radius-*`, `--gg-shadow-*`, `--gg-transition-*` |

The base spacing scale is Tailwind's 4px scale. Use its standard responsive breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px); the system does not replace them. Section spacing and grid gaps are also available as CSS variables (`--gg-layout-section-sm` 48px, `--gg-layout-section-md` 64px, `--gg-layout-section-lg` 96px, `--gg-layout-grid-gap` 24px). Use responsive Tailwind spacing utilities when a layout needs to change across breakpoints.

## Shared classes

### Actions and links

Use the existing [`Button.astro`](../../src/components/ui/Button.astro) component for action buttons and links. Its `variant` prop remains `primary`, `secondary`, `tertiary`, or `link`; `primary` is filled, `secondary` is outlined, `tertiary` is text-only, and `link` is an inline text link. The component accepts the shared `CallToAction` props (`text`, `href`, `type`, `target`, `icon`) and a `class` override. Existing `btn`, `btn-primary`, `btn-secondary`, and `btn-tertiary` utility names remain supported.

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

Use `gg-card` for a neutral content surface, optionally adding `gg-card-subtle` for a distinct subtle region. The Contact, Newsletter, Pricing, Testimonials, Integrations, and CallToAction widgets use this shared surface treatment. Keep content groups on the 24–32px spacing scale. `Headline.astro` supplies the shared heading hierarchy and supports `title`, `subtitle`, `tagline`, and `classes` overrides. For direct markup, use `gg-section-intro`, `gg-section-label`, and `gg-heading`.

```astro
<article class="gg-card p-6 md:p-8">
  <p class="gg-section-label">Postpartum care</p>
  <h3 class="gg-heading mt-3 text-2xl">Support for your first weeks</h3>
  <p class="mt-4 max-w-reading leading-reading text-default">A clear, readable description.</p>
</article>
```

### Forms, badges, and dividers

Apply `gg-field` to `input`, `select`, and `textarea`; use `gg-checkbox` for checkbox inputs. The existing [`Form.astro`](../../src/components/ui/Form.astro) applies these styles to its text inputs and textarea and keeps its current `inputs`, `textarea`, `disclaimer`, `button`, and `description` props. Associate visible labels with controls and preserve native validation and keyboard behavior.

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

## Interaction and accessibility

Tokens change together in `.dark`, following the explicit theme toggle and system default. Use semantic foreground and background utilities rather than hard-coded light or dark colors. Buttons, links, and fields have visible focus indicators; preserve those indicators when adding custom classes. Motion uses short opacity or positional transitions and honors `prefers-reduced-motion`. Keep body copy at 16px or larger, use the muted color for secondary information sparingly, and check both themes when adding text over a surface or brand fill.

## Shared site shell

`PageLayout` owns one shared header, main region, and footer. `LandingLayout` uses the same navigation data and honors the same named slots; page templates should not add a second header or footer. Use `gg-site-container` for 72rem-wide aligned content with responsive 16/24/32px side gutters. `WidgetWrapper` and `MarkdownLayout` provide 48/64/96px responsive section spacing.

`Header.astro` uses `headerData` from `src/navigation.ts`, marks the current route with `aria-current`, and keeps dropdowns keyboard-operable with disclosure buttons and Escape handling. The mobile menu is a fixed overlay, so opening it does not move page content. Global, footer, home, and service consultation actions lead to `/book/`, which connects to the verified Cal.com event. `/contact/` remains the general inquiry route and uses the configured Formspree endpoint.

### Integration gap

The consultation CTA is connected to the verified Cal.com event at `/book/`. The `/contact/` inquiry form posts to the configured Formspree endpoint; the form uses the class-only `@tailwindcss/forms` plugin alongside the site's `gg-field` tokens. The contact form's `fetch` request is permitted by `vercel.json`'s Content Security Policy.
