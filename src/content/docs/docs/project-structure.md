---
title: Project structure
description: A map of AstroWind's main source directories and configuration files.
---

## Main files

- `astro.config.ts` configures Astro, integrations, Markdown processing, and Vite.
- `src/config.yaml` contains the site's name, metadata, blog settings, and theme defaults.
- `src/navigation.ts` defines the shared header and footer links.
- `src/content.config.ts` defines the blog and documentation content collections.

## Source directories

- `src/pages/` contains file-based routes for the website.
- `src/components/` contains reusable UI components and page sections.
- `src/layouts/` contains the shared page layouts.
- `src/data/post/` contains blog posts.
- `src/content/docs/docs/` contains the Starlight pages published under `/docs/`.

The existing AstroWind pages continue to use their current layouts and styles. Starlight renders the documentation collection as its own section under `/docs/`.
