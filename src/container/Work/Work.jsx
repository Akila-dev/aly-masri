import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const location = useLocation();

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			if (location.pathname === '/portfolio') {
				setWorks(data);
				setFilterWork(data);
			} else {
				setWorks(data.slice(0, 6));
				setFilterWork(data.slice(0, 6));
			}
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === 'All') {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<>
			<h2
				className="head-text"
				style={{ marginBottom: location.pathname === '/portfolio' ? 0 : 35 }}
			>
				My Creative <span>Portfolio</span> Section
			</h2>

			{location.pathname === '/portfolio' && (
				<div className="app__work-filter">
					{[
						'Social Media',
						'Half Branding',
						'Full Branding',
						'Logo',
						'Website',
						'All',
					].map((item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
						>
							{item}
						</div>
					))}
				</div>
			)}

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: 'easeInOut',
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex"
							>
								{work.projectLink && (
									<a href={work.projectLink} target="_blank" rel="noreferrer">
										{' '}
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<AiFillEye />
										</motion.div>
									</a>
								)}
								{work.websiteLink && (
									<a href={work.websiteLink} target="_blank" rel="noreferrer">
										{' '}
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<FaGlobe />
										</motion.div>
									</a>
								)}
								{work.smeLink && (
									<a href={work.smeLink} target="_blank" rel="noreferrer">
										{' '}
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<IoShareSocialSharp />
										</motion.div>
									</a>
								)}
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				<Link to="/portfolio" className="app__btn">
					View All
				</Link>
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	'work',
	'app__primarybg'
);
