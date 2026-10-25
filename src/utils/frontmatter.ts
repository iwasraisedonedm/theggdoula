import getReadingTime from 'reading-time';
import { toString as toMdastString } from 'mdast-util-to-string';
import { defineHastPlugin, defineMdastPlugin } from 'satteri';
import type { SatteriAstroData } from '@astrojs/markdown-satteri';

export const readingTimeMdastPlugin = defineMdastPlugin({
  name: 'astro-reading-time',
  after(tree, context) {
    const textOnPage = toMdastString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);
    const astroData = context.data.astro as SatteriAstroData | undefined;

    if (astroData) {
      astroData.frontmatter.readingTime = readingTime;
    }
  },
});

export const responsiveTablesHastPlugin = defineHastPlugin({
  name: 'responsive-tables',
  element: {
    filter: ['table'],
    visit(node, context) {
      context.wrapNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { style: 'overflow:auto' },
        children: [],
      });
    },
  },
});
