import { getCanonical } from '~/utils/permalinks';

/** Serialize JSON-LD safely inside an HTML script element. */
export const serializeJsonLd = (schema: unknown): string =>
  JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

export interface BreadcrumbSchemaItem {
  text: string;
  href?: string;
}

/** Build breadcrumb markup from the same items rendered by the page. */
export const buildBreadcrumbSchema = (items: BreadcrumbSchemaItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ text, href }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: text,
    ...(href ? { item: String(getCanonical(href)) } : {}),
  })),
});

export interface FaqSchemaItem {
  title?: string;
  description?: string;
}

/** Build FAQPage markup from visible FAQ items. */
export const buildFaqSchema = (items: FaqSchemaItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items
    .filter((item): item is FaqSchemaItem & { title: string; description: string } =>
      Boolean(item.title && item.description)
    )
    .map(({ title, description }) => ({
      '@type': 'Question',
      name: title
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: description
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
      },
    })),
});
