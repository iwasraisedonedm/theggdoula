import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

export interface Post {
  /** Unique ID identifying the post. */
  id: string;
  /** URL-friendly slug derived from the post name. */
  slug: string;
  /** Fully resolved permalink, computed from the configured pattern. */
  permalink: string;

  publishDate: Date;
  updateDate?: Date;

  title: string;
  /** Required summary used for post metadata and article structured data. */
  excerpt: string;
  image?: ImageMetadata | string;
  /** Alternative text for the cover image. */
  imageAlt?: string;

  category?: Taxonomy;
  tags: Taxonomy[];
  author?: string;

  metadata?: MetaData;

  draft: boolean;

  /** Rendered Astro component factory for the post body. */
  Content?: AstroComponentFactory;

  /** Estimated reading time in minutes. */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
  /** Open Graph `article:*` properties, used when `type` is `article`. */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    authors?: Array<string>;
    section?: string;
    tags?: Array<string>;
  };
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Input {
  type: astroHTML.JSX.HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  classes?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface Select {
  name: string;
  label: string;
  options: Array<SelectOption>;
  placeholder?: string;
  required?: boolean;
  classes?: string;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  classes?: string;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface Form {
  id?: string;
  action?: string;
  method?: 'get' | 'post';
  inputs?: Array<Input>;
  select?: Select;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  buttonIcon?: string;
  description?: string;
  honeypot?: boolean;
}
