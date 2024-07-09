import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Services.scss';
import { urlFor, client } from '../../client';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const query = '*[_type == "services"]';

		client.fetch(query).then((data) => {
			setServices(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				What <span>I do</span>
			</h2>

			<div className="app__services-container">
				{services.map((service, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__service-item"
						key={service.title + index}
					>
						<img src={urlFor(service.imgUrl)} alt={service.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{service.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{service.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Services, 'app__services'),
	'services',
	'app__primarybg'
);
