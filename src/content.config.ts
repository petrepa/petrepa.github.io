import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		moreInfoLink: z.string().optional(),
	}),
});

const honourableMentions = defineCollection({
	loader: glob({ base: './src/content/honourableMentions', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		moreInfoLink: z.string().optional(),
	}),
});

const ntnuRelated = defineCollection({
	loader: glob({ base: './src/content/ntnuRelated', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		moreInfoLink: z.string().optional(),
	}),
});

export const collections = { blog, honourableMentions, ntnuRelated };
