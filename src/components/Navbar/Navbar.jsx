import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	return (
		location.pathname !== '/visual-identity-workbook' && (
			<nav className="app__navbar">
				<div className="app__navbar-logo">
					<Link to="/">
						<img src={images.logo} alt="logo" />
					</Link>
				</div>
				<ul className="app__navbar-links">
					{['home', 'about', 'services', 'blogs', 'portfolio', 'skills'].map(
						(item) => (
							<li className="app__flex p-text" key={`link-${item}`}>
								<div />
								<a
									href={
										// eslint-disable-next-line no-nested-ternary
										item === 'blogs'
											? '/blogs'
											: item === 'portfolio'
												? '/portfolio'
												: `/#${item}`
									}
								>
									{item}
								</a>
							</li>
						)
					)}
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
								animate={{ x: [300, 0], opacity: [0, 1] }}
								exit={{ x: [0, 300], opacity: [1, 0] }}
								transition={{ duration: 0.65, ease: 'easeOut' }}
							>
								<HiX onClick={() => setToggle(false)} />
								<ul>
									{[
										'home',
										'about',
										'services',
										'blogs',
										'portfolio',
										'skills',
										'contact',
									].map((item) => (
										<li key={item}>
											<a
												href={
													// eslint-disable-next-line no-nested-ternary
													item === 'blogs'
														? '/blogs'
														: item === 'portfolio'
															? '/portfolio'
															: `/#${item}`
												}
												onClick={() => setToggle(false)}
											>
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
		)
	);
};

export default Navbar;
