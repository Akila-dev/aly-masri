import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Footer } from './container';
import { Navbar } from './components';
import { Home, Blogs, Portfolio, BlogPost, SinglePortfolio } from './pages';
import './App.scss';

const App = () => (
	<div className="app">
		<Navbar />
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/blogs" element={<Blogs />} />
			<Route exact path="/blog/:blogId" element={<BlogPost />} />
			<Route exact path="/portfolio" element={<Portfolio />} />
			<Route
				exact
				path="/portfolio/:portfolioId"
				element={<SinglePortfolio />}
			/>
		</Routes>
		<Footer />
	</div>
);

export default App;
