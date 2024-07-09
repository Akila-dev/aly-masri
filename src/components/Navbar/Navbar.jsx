import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{['home', 'about', 'services', 'blog', 'work', 'skills'].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className="hide-sm">
				<a href="contact" className="app__btn">
					<FaPaperPlane /> <span>Contact</span>
				</a>
			</div>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				<AnimatePresence>
					{toggle && (
						<motion.div
							animate={{ x: [300, 0] }}
							exit={{ x: [0, 300] }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
						>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{[
									'home',
									'about',
									'services',
									'blog',
									'work',
									'skills',
									'contact',
								].map((item) => (
									<li key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
