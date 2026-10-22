// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// Last-modified date of each blog post (updatedDate, else publishDate), for the sitemap.
const blogDir = './src/content/blog';
const postDates = Object.fromEntries(
  readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const frontmatter = readFileSync(`${blogDir}/${file}`, 'utf8');
      const date = frontmatter.match(/^updatedDate:\s*(\S+)/m) ?? frontmatter.match(/^publishDate:\s*(\S+)/m);
      return [`/blog/${file.replace(/\.md$/, '')}/`, date?.[1]];
    })
    .filter(([, date]) => date)
);
const latestPostDate = Object.values(postDates).sort().at(-1);

// https://astro.build/config
export default defineConfig({
  site: 'https://lucascapart.fr',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['lucide-react']
    }
  },

  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = path === '/blog/' ? latestPostDate : postDates[path];
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
    }),
  ],
});
