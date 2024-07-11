/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlCalender } from 'react-icons/sl';
import { FaUserCircle } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

import { urlFor, client } from '../../client';
import './BlogHeader.scss';

import header from '../../assets/about02.png';

const BlogHeader = ({ img, title, date }) => (
	<motion.div
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.5, delayChildren: 0.5 }}
		className="app__blog-header"
	>
		<div className="app__blog-header_image">
			<img src={img && urlFor(img)} alt={title} />
		</div>
		<div className="app__blog-header_text">
			<h2>{title}</h2>
			<div>
				<Link to="/">
					<p>
						<FaUserCircle /> Aly Masri
					</p>
				</Link>
				|
				<p>
					<SlCalender /> {date && format(parseISO(date), 'LLLL	d, yyyy')}
				</p>
			</div>
		</div>
	</motion.div>
);

export default BlogHeader;
