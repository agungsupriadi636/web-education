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

const team = defineCollection({
    loader: glob({ pattern: '**/**.yaml', base: "./src/data/team" }),
    schema: ({ image }) => z.object({
        nama: z.string(),
        jabatan: z.string(),
        foto: image(),
        kategori: z.string(),
        mapel: z.string(),
    })
});

const alumni = defineCollection({
    loader: glob({ pattern: '**/**.yaml', base: "./src/data/alumni" }),
    schema: ({ image }) => z.object({
        nama: z.string(),
        foto: image(),
        angkatan: z.number(),
        pekerjaan: z.string(),
        qoute: z.string(),
    })
});

export const collections = { blog, team, alumni };