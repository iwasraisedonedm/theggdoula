---
title: Getting started
description: Install dependencies, start the development server, and build AstroWind.
---

## Requirements

Use Node.js 22.22.3 or newer and npm, which is the package manager used by this repository's lockfile and deployment workflows.

## Install and run

From the repository root, install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Astro prints the local address in the terminal. Open it in a browser to view the site. Changes to source files are reflected while the server is running.

## Check and build

Run the project's checks and create the production build with:

```sh
npm run check
npm run build
```

The static production output is written to `dist/`. Use `npm run preview` to inspect that output locally.
