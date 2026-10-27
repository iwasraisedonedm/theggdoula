export const siteConfig = {
  name: 'Grit + Grace Doula',
  url: 'https://theggdoula.vercel.app',
  basePath: '/',
  trailingSlash: false,
  googleSiteVerificationId: '',
};

export const metadataConfig = {
  title: {
    default: 'Grit + Grace Doula | Birth & Postpartum Support',
    template: '%s — Grit + Grace Doula',
  },
  description:
    'Compassionate prenatal, birth, postpartum, breastfeeding, and newborn-care support from Grit + Grace Doula.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Grit + Grace Doula',
    images: [{ url: '~/assets/images/default.png', width: 1200, height: 628 }],
    type: 'website',
  },
  twitter: {
    cardType: 'summary_large_image',
    site: undefined,
    handle: undefined,
  },
};

export const localeConfig = {
  language: 'en',
  textDirection: 'ltr',
};

export const blogConfig = {
  enabled: true,
  postsPerPage: 4,
  post: {
    enabled: true,
    permalink: '/resources/blog/%slug%',
    robots: { index: true, follow: true },
  },
  list: {
    enabled: true,
    path: 'resources/blog',
    robots: { index: true, follow: true },
  },
  category: {
    enabled: true,
    path: 'resources/blog/category',
    robots: { index: true, follow: true },
  },
  tag: {
    enabled: true,
    path: 'resources/blog/tag',
    robots: { index: false, follow: true },
  },
  relatedPostsEnabled: true,
  relatedPostsCount: 4,
};

export const analyticsConfig = {
  googleAnalyticsId: '',
  partytown: false,
};

export const themeConfig = {
  default: 'system',
  allowUserToggle: true,
};
