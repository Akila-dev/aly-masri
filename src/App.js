import React from 'react';

import {
	About,
	Services,
	Footer,
	Header,
	Skills,
	Testimonial,
	Work,
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
	<div className="app">
		<Navbar />
		<Header />
		<About />
		<Services />
		<Work />
		<Skills />
		<Testimonial />
		<Footer />
	</div>
);

export default App;
