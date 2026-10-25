import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const categories = ['Documentation', 'Resources', 'Tutorials'] as const;
const tags = [
  'ai',
  'astro',
  'blog',
  'front-end',
  'landing-pages',
  'markdown',
  'resources',
  'tailwind css',
  'theme',
  'tools',
] as const;

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z
    .object({
      title: z.string().trim().min(1).describe('Post title'),
      excerpt: z.string().trim().min(1).describe('Short summary used in post cards and metadata'),
      publishDate: z.coerce.date().describe('Original publication date'),
      updateDate: z.coerce.date().optional().describe('Most recent substantial update date'),
      draft: z.boolean().default(false).describe('Draft posts are hidden from public listings'),
      category: z.enum(categories).optional().describe('Primary post category'),
      tags: z.array(z.enum(tags)).default([]).describe('Lowercase topic tags'),
      author: z.string().optional().describe('Post author'),
      image: z.url().optional().describe('Remote URL for the post cover image'),
      imageAlt: z
        .string()
        .optional()
        .describe('Alternative text for the cover image; leave empty for decorative images'),

      metadata: metadataDefinition().describe('Optional search and social metadata'),
    })
    .refine((post) => !post.image || post.imageAlt !== undefined, {
      message: 'Add imageAlt whenever a cover image is provided.',
      path: ['imageAlt'],
    }),
});

export const collections = {
  post: postCollection,
};
