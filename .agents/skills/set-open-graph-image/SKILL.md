---
name: set-open-graph-image
description: Configure the default or route-specific social preview image. Use for Open Graph and Twitter image changes.
---

# Set a social preview image

1. Check `src/config.yaml` for the site-wide `metadata.openGraph.images` default.
2. For one route, set `metadata.openGraph.images` in that page's metadata. For one post, use `metadata.openGraph.images` in the post frontmatter; the post `image` is the normal cover image.
3. Local images use `~/assets/images/...`; public assets use root-relative paths such as `/images/...`; external images use absolute `https://` URLs.
4. `src/utils/images.ts` resolves local images and outputs optimized 1200 × 626 JPGs. Public images are used directly. Set `site.site` in `src/config.yaml` so generated URLs can be absolute.
5. Check the content schema in `src/content.config.ts` and metadata types in `src/types.d.ts` before adding fields. Run `npm run check` and `npm run build`.
