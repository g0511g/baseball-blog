import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['sabermetrics', 'kbo-issue', 'season', 'history']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // 글 상단과 카드에 보여줄 핵심 수치 (선택)
    highlights: z
      .array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { posts };
