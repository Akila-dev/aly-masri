export default {
	name: 'portfolio',
	title: 'My Portfolio',
	type: 'document',
	fields: [
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'company',
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		},
		{
			name: 'logoUrl',
			title: 'Company Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'beforeProjectLinks',
			title: 'Before Project Links',
			type: 'array',
			of: [
				{
					name: 'beforeProjectLink',
					title: 'Before Project Link',
					type: 'string',
				},
			],
		},
		{
			name: 'beforeWebsiteLinks',
			title: 'Before Website Links',
			type: 'array',
			of: [
				{
					name: 'beforeWebsiteLink',
					title: 'Before Website Link',
					type: 'string',
				},
			],
		},
		{
			name: 'beforeSmeLinks',
			title: 'Before Social Media Links',
			type: 'array',
			of: [
				{
					name: 'beforeSmeLink',
					title: 'Before Social Media Link',
					type: 'string',
				},
			],
		},
		{
			name: 'beforeImgs',
			title: 'Before Images',
			type: 'array',
			of: [{ type: 'gridImage' }],
		},
		{
			name: 'afterProjectLinks',
			title: 'After Project Links',
			type: 'array',
			of: [
				{
					name: 'afterProjectLink',
					title: 'After Project Link',
					type: 'string',
				},
			],
		},
		{
			name: 'afterWebsiteLinks',
			title: 'After Website Links',
			type: 'array',
			of: [
				{
					name: 'afterWebsiteLink',
					title: 'After Website Link',
					type: 'string',
				},
			],
		},
		{
			name: 'afterSmeLinks',
			title: 'After Social Media Links',
			type: 'array',
			of: [
				{
					name: 'afterSmeLink',
					title: 'After Social Media Link',
					type: 'string',
				},
			],
		},
		{
			name: 'afterImgs',
			title: 'After Images',
			type: 'array',
			of: [{ type: 'gridImage' }],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					name: 'tag',
					title: 'Tag',
					type: 'string',
				},
			],
		},
	],
};
