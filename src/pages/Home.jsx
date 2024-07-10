import React from 'react';

import {
	About,
	Blogs,
	Services,
	Header,
	Skills,
	Testimonial,
	Work,
} from '../container';

const Home = () => (
	<div>
		<Header />
		<About />
		<Services />
		<Blogs />
		<Work />
		<Skills />
		<Testimonial />
	</div>
);

export default Home;
