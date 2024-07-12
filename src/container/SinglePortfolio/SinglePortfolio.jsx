/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdVerified, MdOutlineCancel } from 'react-icons/md';
import { BlogWrap, MotionWrap } from '../../wrapper';
import './SinglePortfolio.scss';

import { urlFor, client } from '../../client';
import { images } from '../../constants';

const SinglePortfolio = () => {
	const [portfolioData, setPortfolioData] = useState([]);
	const [noLink, setNoLink] = useState(false);
	// eslint-disable-next-line prefer-const
	const { portfolioId } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		client
			.fetch(`*[_type=='portfolio' && slug.current=='${portfolioId}']`)
			.then((data) => {
				setPortfolioData(data[0]);
			})
			.then(() => {
				// console.log(portfolioData);
				if (portfolioData) {
					if (
						portfolioData.afterProjectLinks.length === 0 &&
						portfolioData.afterWebsiteLinks.length === 0 &&
						portfolioData.afterSmeLinks.length === 0
					) {
						setNoLink(true);
					}
				}
			});
	}, [portfolioId]);

	return (
		<>
			<div className="app__work-popup">
				<div className="app__work-popup_card">
					<div className="app_work-popup_head">
						<div className="app_work-popup_logo">
							<img
								src={portfolioData.logoUrl && urlFor(portfolioData.logoUrl)}
								alt={portfolioData.company}
							/>
						</div>
						<div className="app_work-popup_header">
							<h2>{portfolioData.company}</h2>
							{portfolioData.tags && (
								<div>
									{portfolioData.tags.map((tag, index) => (
										<span key={index} className="p-text">
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
					{portfolioData.beforeImgs && (
						<div className="app_work-popup_section">
							<p className="bold-text">
								Before Aly
								<MdOutlineCancel style={{ color: 'red' }} />
							</p>
							<div>
								{portfolioData.beforeImgs.map((img, index) => (
									<img
										src={img.imgUrl && urlFor(img.imgUrl)}
										key={index}
										alt={portfolioData.company + index}
									/>
								))}

								<div>
									{portfolioData.beforeProjectLinks &&
										portfolioData.beforeProjectLinks.map((link, i) => (
											<a href={link} key={i}>
												<AiFillEye style={{ fontSize: 18 }} />
												<span className="hide-s">Project File</span>
											</a>
										))}
									{portfolioData.beforeWebsiteLinks &&
										portfolioData.beforeWebsiteLinks.map((link, i) => (
											<a href={link}>
												<FaGlobe />
												<span className="hide-s">Website Link</span>
											</a>
										))}
									{portfolioData.beforeSmeLinks &&
										portfolioData.beforeSmeLinks.map((link, i) => (
											<a href={link}>
												<IoShareSocialSharp />
												<span className="hide-s">Social Media</span>
											</a>
										))}
								</div>
							</div>
						</div>
					)}
					{portfolioData.afterImgs && (
						<div className="app_work-popup_section">
							<p className="bold-text">
								After Aly
								<MdVerified style={{ color: 'green' }} />
							</p>
							<div>
								{portfolioData.afterImgs.map((img, index) => (
									<img
										src={img.imgUrl && urlFor(img.imgUrl)}
										key={index}
										alt={portfolioData.company + index}
									/>
								))}
								{!noLink && (
									<div>
										{portfolioData.afterProjectLinks &&
											portfolioData.afterProjectLinks.map((link, i) => (
												<a href={link} key={i}>
													<AiFillEye style={{ fontSize: 18 }} />
													<span className="hide-s">Project File</span>
												</a>
											))}
										{portfolioData.afterWebsiteLinks &&
											portfolioData.afterWebsiteLinks.map((link, i) => (
												<a href={link} key={i}>
													<FaGlobe />
													<span className="hide-s">Website Link</span>
												</a>
											))}
										{portfolioData.afterSmeLinks &&
											portfolioData.afterSmeLinks.map((link, i) => (
												<a href={link} key={i}>
													<IoShareSocialSharp />
													<span className="hide-s">Social Media</span>
												</a>
											))}
									</div>
								)}
							</div>
						</div>
					)}
					{/* <div className="divider">
						<HiOutlineDotsHorizontal />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default BlogWrap(
	MotionWrap(SinglePortfolio, 'app__singlePortfolio'),
	'blogItem',
	'app__whitebg'
);
