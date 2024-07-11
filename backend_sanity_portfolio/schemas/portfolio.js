export default {
	name: 'works',
	title: 'My Portfolio',
	type: 'document',
	fields: [
		{
			name: 'company',
			title: 'Company',
			type: 'string',
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
			name: 'projectLinks',
			title: 'project Links',
			type: 'array',
			of: [
				{
					name: 'projectLink',
					title: 'project Link',
					type: 'string',
				},
			],
		},
		{
			name: 'websiteLinks',
			title: 'Website Links',
			type: 'array',
			of: [
				{
					name: 'websiteLink',
					title: 'Website Link',
					type: 'string',
				},
			],
		},
		{
			name: 'smeLinks',
			title: 'Social Media Links',
			type: 'array',
			of: [
				{
					name: 'smeLink',
					title: 'Social Media Link',
					type: 'string',
				},
			],
		},
		{
			name: 'beforeImgs',
			title: 'Before Images',
			type: 'array',
			of: [
				{
					name: 'imgUrl',
					title: 'ImageUrl',
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		},
		{
			name: 'afterImgs',
			title: 'After Images',
			type: 'array',
			of: [
				{
					name: 'imgUrl',
					title: 'ImageUrl',
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
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
