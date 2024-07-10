import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Blogs.scss';
import { urlFor, client } from '../../client';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const location = useLocation();

	useEffect(() => {
		const query = '*[_type == "blog"]|order(_createdAt desc)';

		client.fetch(query).then((data) => {
			if (location.pathname === '/blogs') {
				setBlogs(data);
			} else {
				setBlogs(data.slice(0, 4));
			}
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				My <span>Blogs</span>
			</h2>

			<div className="app__blogs-container">
				{blogs.map((blog, index) => (
					<Link to={`blog/${blog.title}`} key={blog.title + index}>
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className="app__blog-item"
						>
							<img src={urlFor(blog.coverImage)} alt={blog.title} />
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{blog.title} <br />
							</h2>
							<div>
								Aly Masri<span> | </span>{' '}
								{format(parseISO(blog.date), 'LLLL	d, yyyy')}
							</div>
							<p className="p-text" style={{ marginTop: 10 }}>
								{blog.excerpt.slice(0, 100)}
							</p>
							{/* <a href="#h" className="app__btn-2" style={{ marginTop: 20 }}>
							Read More
						</a> */}
						</motion.div>
					</Link>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Blogs, 'app__services'),
	'blogs',
	'app__whitebg'
);
