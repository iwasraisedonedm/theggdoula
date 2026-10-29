import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const CONSULTATION_LINK = getPermalink('/book');

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Book Now', href: CONSULTATION_LINK, variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'All services', href: getPermalink('/services') },
        { text: 'Prenatal support', href: getPermalink('/services/prenatal') },
        { text: 'Birth doula', href: getPermalink('/services/birth') },
        { text: 'Postpartum care', href: getPermalink('/services/postpartum') },
        { text: 'Breastfeeding education', href: getPermalink('/services/breastfeeding') },
        { text: 'Newborn care', href: getPermalink('/services/newborn-care') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Resource library', href: getPermalink('/resources') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Guides', href: getPermalink('/resources/guides') },
        { text: 'Better Birth Guide', href: getPermalink('/resources/better-birth-guide') },
        { text: 'Frequently asked questions', href: getPermalink('/resources/faq') },
        { text: 'Gallery', href: getPermalink('/resources/gallery') },
      ],
    },
    {
      title: 'Grit + Grace',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Client experiences', href: getPermalink('/testimonials') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: '© GG Doula',
};
