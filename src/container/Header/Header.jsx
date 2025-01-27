import React from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from 'lottie-react';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { StarCanvas } from '../../components';
import './Header.scss';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const backgrounds = ['#2b4954', '#D9D9FD', '#FFEAC9'];

const Header = () => (
	<>
		<div className="app__header app__flex">
			<div className="stars_canvas-container">
				<StarCanvas />
			</div>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text-1">Aly Masri</h1>
						</div>
					</div>

					<div className="tag-cmp app__flex">
						<p className="p-text">Digital Marketing &</p>
						<p className="p-text">Social Media Marketing</p>
						<p className="p-text">Specialist</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
				// style={{ overflowX: 'hidden', overflowY: 'visible' }}
			>
				<img src={images.profile} alt="profile_bg" />
				{/* <motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/> */}
				<motion.div
					whileInView={{ scale: [0, 1.5] }}
					className="overlay_circle"
					style={{ zIndex: -1 }}
				>
					<Lottie
						animationData={images.globe}
						style={{
							objectFit: 'contain',
							width: '100%',
							height: '100%',
						}}
					/>
				</motion.div>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.horizontalLogo, images.photoshop, images.illustrator].map(
					(circle, index) => (
						<div
							className="circle-cmp app__flex"
							style={{ backgroundColor: backgrounds[index] }}
							key={`circle-${index}`}
						>
							<img src={circle} alt="profile_bg" />
						</div>
					)
				)}
			</motion.div>
		</div>
	</>
);

export default AppWrap(Header, 'home');
