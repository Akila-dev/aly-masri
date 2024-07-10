import { BookIcon } from '@sanity/icons';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default {
	name: 'blog',
	title: 'Blog Posts',
	icon: BookIcon,
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
		},
		{
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'date',
			title: 'Date',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'caption',
							type: 'string',
							title: 'Image caption',
							description: 'Caption displayed below the image.',
						},
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity.',
						},
					],
				},
			],
		},
	],
};
