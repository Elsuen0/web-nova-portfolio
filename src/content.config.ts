import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    seoTitle: z.string().optional(),
    services: z.array(z.string()).default([]),
    author: z.string().default('Lucas Capart'),
  }),
});

export const collections = { blog };
