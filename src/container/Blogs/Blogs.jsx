import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Blogs.scss';
import { urlFor, client } from '../../client';

const Blogs = () => {
	const [services, setServices] = useState([]);
	const location = useLocation();

	useEffect(() => {
		const query = '*[_type == "services"]';

		client.fetch(query).then((data) => {
			if (location.pathname === '/blogs') {
				setServices(data);
			} else {
				setServices(data.slice(0, 4));
			}
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				My <span>Blogs</span>
			</h2>

			<div className="app__blogs-container">
				{services.map((service, index) => (
					<Link to={`blog/${service.title}`} key={service.title + index}>
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className="app__blog-item"
						>
							<img src={urlFor(service.imgUrl)} alt={service.title} />
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{service.title} <br />
							</h2>
							<div>
								Aly Masri<span> | </span>August 12, 2024
							</div>
							<p className="p-text" style={{ marginTop: 10 }}>
								{service.description}
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
