import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/**.md', base: "./src/data/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        cover: image(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        categories: z.array(z.string()),
        author: z.string().default('admin sekolah'),
    })
});

const teacher = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/data/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        cover: image(),
        description: z.string(),
    })
});

export const collections = { blog, teacher };