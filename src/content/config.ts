import { z, defineCollection } from 'astro:content';
//berita content
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
//info content
const infoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});
//pengumuman content
const pengumumanCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});
// daftar guru
const guruCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    image_profile: z.object({
      src : image().optional(),
      alt: z.string(),
    }),
    contact: z.object({
      no : z.string().optional(),
      address : z.string().optional()                      
    }),
    mapel: z.string().optional()
  }),
});
// fasilitas
const fasilitasCollections = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
      src : image().optional(),
      alt: z.string().optional(),
    }),
    description: z.string(),
  })
});
// exskul
const extrakurikulerCollections = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
      src: image().optional(),
      alt: z.string().optional()
    }),
    time: z.string()
  })
})

// pages content
const pagesCollections = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
      src: image().optional(),
      alt: z.string().optional()
    }).optional()
  })
})

export const collections = {
  'berita': beritaCollection,
  'informasi': infoCollection,
  'pengumuman': pengumumanCollection,
  'guru': guruCollection,
  'fasilitas' : fasilitasCollections,
  'extrakurikuler' : extrakurikulerCollections,
  'pages' : pagesCollections
};
