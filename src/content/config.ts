import { z, defineCollection } from 'astro:content';

const beritaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
		src: image().optional(),
		alt: z.string().optional()
	}),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});

const infoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});

const pengumumanCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  'berita': beritaCollection,
  'informasi': infoCollection,
  'pengumuman': pengumumanCollection,
};
