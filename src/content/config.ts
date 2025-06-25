import {defineCollection, z} from 'astro:content';

const aboutCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
	}),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		author: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	about: aboutCollection,
	blog: blogCollection
};