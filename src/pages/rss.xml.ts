import { getRssString } from '@astrojs/rss';

import { siteConfig, metadataConfig, blogConfig, localeConfig } from '~/config/site';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

// The feed is generated from the build-time content collection, so keep it
// prerendered even if the project opts into on-demand rendering.
export const prerender = true;

export const GET = async () => {
  if (!blogConfig.enabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${siteConfig.name}’s Blog`,
    description: metadataConfig?.description || '',
    site: siteConfig.url,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
      ...(post.author ? { author: post.author } : {}),
      categories: [...(post.category ? [post.category.title] : []), ...(post.tags ?? []).map((tag) => tag.title)],
    })),

    trailingSlash: siteConfig.trailingSlash,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      `<language>${localeConfig?.language || 'en'}</language>`,
      `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
      `<atom:link href="${new URL(getPermalink('rss.xml', 'asset'), siteConfig.url)}" rel="self" type="application/rss+xml" />`,
    ].join(''),
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
