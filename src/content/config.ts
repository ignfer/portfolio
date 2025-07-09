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
		lastModified: z.string(),
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