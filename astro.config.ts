import { defineConfig, fontProviders } from 'astro/config';

import { satteri } from '@astrojs/markdown-satteri';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import type { AstroIntegration } from 'astro';

import { analyticsConfig, siteConfig } from './src/config/site';
import { readingTimeMdastPlugin, responsiveTablesHastPlugin } from './src/utils/frontmatter';

const hasExternalScripts = analyticsConfig.partytown;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  compressHTML: true,
  site: siteConfig.url,
  base: siteConfig.basePath,
  trailingSlash: siteConfig.trailingSlash ? 'always' : 'never',

  // Keep ClientRouter prefetching opt-in and limited to explicit navigation links.
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  // Native Fonts API: self-hosts + subsets + preloads Inter and generates
  // metric-adjusted fallbacks. Injected via <Font /> in Layout.astro and
  // consumed through the `--font-inter` CSS variable in CustomStyles.astro.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !(
          pathname.startsWith('/resources/blog/tag/') ||
          /^\/resources\/blog\/\d+$/.test(pathname) ||
          /^\/resources\/blog\/category\/[^/]+\/\d+$/.test(pathname)
        );
      },
    }),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: { tabler: ['*'] },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    // Unsplash is listed so post covers can be rendered as real 1200×626 Open Graph images.
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: satteri({
      mdastPlugins: [readingTimeMdastPlugin],
      hastPlugins: [responsiveTablesHastPlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
