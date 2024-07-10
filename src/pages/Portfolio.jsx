import React, { useEffect } from 'react';

import { Work, Skills, Testimonial } from '../container';

const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div style={{ paddingTop: 50 }}>
			<Work />
			<Skills />
			<Testimonial />
		</div>
	);
};

export default Portfolio;
