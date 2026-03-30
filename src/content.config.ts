import { type ImageMetadata } from 'astro';
import { defineCollection, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * In a collection entry's frontmatter, `src` is the string path to a
 * local image, but when this object is referenced in JS, `src` is of type
`* ImageMetadata`. Astro optimizes images in the 'src/' directory, and
 * overwrites src prop with `ImageMetadata`.
 */
export interface GalleryImage {
    src: ImageMetadata,
    alt: string,
    title: string,
    description: string,
}

/**
 * Spread this object into schemas of collections that need a gallery.
 * Add { src: string, alt, title, description } as props in the entry's
 * frontmatter.
 */
const gallery = (image: ImageFunction) => ({
	gallery: z
		.array(
			z.object({
				src: image(),
				alt: z.string(),
				title: z.string(),
				description: z.string(),
			}),
		)
		.optional(),
});

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),

		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				img: image(),
				img_alt: z.string().optional(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				...gallery(image),
			}),
	}),
	notes: defineCollection({
		// Load Markdown files in the src/content/notes directory.
		loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
		}),
	}),
};
