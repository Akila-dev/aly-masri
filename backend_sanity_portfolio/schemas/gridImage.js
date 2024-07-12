export default {
	name: 'gridImage',
	title: 'Grid Image (ignore)',
	type: 'document',
	fields: [
		{ name: 'width', title: 'Span Width (1 or 2)', type: 'string' },
		{ name: 'height', title: 'Span Height (1 or 2)', type: 'string' },
		{
			name: 'imgUrl',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
