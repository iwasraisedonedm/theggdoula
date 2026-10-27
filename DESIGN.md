---
name: Grit + Grace Doula
description: Thoughtful pregnancy, birth, and postpartum support across Orange County.
colors:
  canvas: '#F8F7F3'
  surface: '#FFFFFF'
  surface-subtle: '#F0EFE8'
  surface-tertiary: '#E6E8DE'
  canvas-dark: '#1B2119'
  surface-dark: '#20271E'
  heading: '#252820'
  body: '#54594F'
  muted: '#666B60'
  brand: '#404D32'
  brand-dark: '#A8BF96'
  on-brand: '#FFFFFF'
  border: '#D8DAD0'
typography:
  display:
    fontFamily: 'Newsreader, Georgia, Cambria, serif'
    fontSize: 'clamp(2.25rem, 4vw, 3.375rem)'
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: '-0.03em'
  body:
    fontFamily: 'Inter, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    fontSize: '0.75rem'
    fontWeight: 500
    letterSpacing: '0.08em'
rounded:
  none: '0px'
spacing:
  section-min: '48px'
  section-max: '96px'
  content-rail: '1280px'
---

## Overview

The site uses a calm editorial language: warm paper, botanical green, spacious content rails, readable type, and fine rules. The shared site system is authoritative for tokens; this page records its visual application.

## Colors

Use semantic tokens from `src/design/tokens/` and their generated CSS. The light theme uses paper and olive; the dark theme uses midnight surfaces and sage actions. Keep muted text legible on its actual surface, reserve brand color for meaningful emphasis and actions, and use the semantic focus role for keyboard indicators.

## Typography

Inter is the shared interface and body face. Homepage headings use regular-weight Newsreader; body copy is at least 16px with a readable measure, and compact uppercase monospace labels use the platform stack at 12px. Keep labels, controls, and links legible and consistent.

## Layout

Keep the homepage's 80rem content rail inside its existing exterior frame. Use a responsive 48–96px section rhythm, align headings and copy to shared left rails, and preserve the established section order. Use whitespace and changes in surface role to carry the long-page cadence.

## Elevation & Depth

Prefer flat surfaces and fine rules. Avoid decorative shadows and layered effects; distinguish content groups through spacing and restrained surface contrast.

## Shapes

Ordinary cards, controls, buttons, badges, forms, and media containers are square. On the homepage, service-stage labels match their 40px number squares; “How it works” uses one continuous section surface aligned to the content rail; planner labels and panel padding use a consistent compact rhythm; and the guide action wraps cleanly with a stacked tablet layout. Preserve the homepage's exterior frame and portrait-frame geometry. Keep borders role-based and keyboard focus clearly visible in both themes.

## Components

Use existing shared components and semantic color utilities. Keep service cards, planner controls, FAQ disclosures, navigation, and calls to action native and functional. Preserve visible keyboard focus and the established light/dark behavior.

## Do's and Don'ts

- Do preserve the current identity, framework, content, routes, assets, and integrations during refinements.
- Do use authentic pregnancy, birth, postpartum, and care imagery already approved for the site.
- Do maintain WCAG AA text contrast and clear non-color link affordances.
- Don't invent testimonials, outcomes, prices, credentials, or availability.
- Don't use pill shapes, stock technology imagery, heavy shadows, or mechanically alternating section fills.
- Don't change the homepage's protected exterior corner accents or theme contract.
