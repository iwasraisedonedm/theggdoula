import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const CONSULTATION_LINK = getPermalink('/book');

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Our approach', href: getPermalink('/#approach') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Resources', href: getPermalink('/resources') },
  ],
  actions: [{ text: 'Book Now', href: CONSULTATION_LINK, variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Our approach', href: getPermalink('/#approach') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'More',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Client experiences', href: getPermalink('/testimonials') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: '© Grit + Grace Doula',
};
