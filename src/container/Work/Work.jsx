import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { GoArrowRight } from 'react-icons/go';
import { motion } from 'framer-motion';

// import { StarCanvas } from '../../components';
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
		const query = '*[_type == "portfolio"]|order(_createdAt desc)';

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
			{/* {location.pathname === '/' && (
				<div className="stars_canvas-container">
					<StarCanvas />
				</div>
			)} */}
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
					<Link
						to={work.slug.current && `/portfolio/${work.slug.current}`}
						key={index}
					>
						<div
							className="app__work-item app__flex"

							// onClick={() => showPortfolio()}
						>
							<div className="app__work-img app__flex">
								<img src={urlFor(work.logoUrl)} alt={work.company} />

								<motion.div className="app__work-hover app__flex">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</motion.div>
							</div>

							<div className="app__work-content app__flex">
								<h4 className="bold-text">{work.company}</h4>
								<p className="p-text" style={{ marginTop: 10 }}>
									{work.description}
								</p>

								<div className="app__work-tag app__flex">
									<p className="p-text">{work.tags[0]}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</motion.div>

			{location.pathname !== '/portfolio' && (
				<motion.div
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__work-portfolio"
				>
					<Link to="/portfolio" style={{ marginTop: 30 }}>
						<motion.div
							className="app__btn"
							style={{ padding: '0.75rem 2rem' }}
						>
							View All <GoArrowRight />
						</motion.div>
					</Link>
				</motion.div>
			)}

			{/* {showPopup && (
				<div className="app__work-popup" onClick={(e) => handlePopupClick(e)}>
					<div className="app__work-popup_card">
						<div className="app_work-popup_head">
							<div className="app_work-popup_logo">
								<img src={images.about01} alt="logo" />
							</div>
							<div className="app_work-popup_header">
								<h2>Toronto Media and Consult</h2>
								<div>
									<span className="p-text">Full Branding</span>
									<span className="p-text">Half Branding</span>
									<span className="p-text">Website</span>
								</div>
							</div>
						</div>
						<div className="app_work-popup_section">
							<p className="bold-text">
								Before Aly
								<MdOutlineCancel style={{ color: 'red' }} />
							</p>
							<div>
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<div>
									<a href="#m">
										<AiFillEye style={{ fontSize: 18 }} />
										<span className="hide-s">Project File</span>
									</a>{' '}
									<a href="#m">
										<FaGlobe />
										<span className="hide-s">Website</span>
									</a>
									<a href="#m">
										<IoShareSocialSharp />
										<span className="hide-s">Social Media</span>
									</a>
								</div>
							</div>
						</div>
						<div className="app_work-popup_section">
							<p className="bold-text">
								After Aly
								<MdVerified style={{ color: 'green' }} />
							</p>
							<div>
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<img src={images.about01} alt="logo" />
								<div>
									<a href="#m">
										<AiFillEye style={{ fontSize: 18 }} />{' '}
										<span className="hide-s">Project File</span>
									</a>{' '}
									<a href="#m">
										<FaGlobe />
										<span className="hide-s">Website Link</span>
									</a>
									<a href="#m">
										<IoShareSocialSharp />
										<span className="hide-s">Social Media</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)} */}
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	'portfolio',
	'app__primarybg'
);
