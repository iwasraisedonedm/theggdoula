import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const bookingPath = getPermalink('/book');
export const BOOKING_LINK = bookingPath.endsWith('/') ? bookingPath : `${bookingPath}/`;

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Our approach', href: getPermalink('/#approach') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  actions: [{ text: 'Book a Free Consultation', href: BOOKING_LINK, variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Our approach', href: getPermalink('/#approach') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'More',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
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
