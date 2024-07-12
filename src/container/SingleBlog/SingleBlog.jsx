/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import BlockContent from '@sanity/block-content-to-react';

import { BlogWrap, MotionWrap } from '../../wrapper';
import './SingleBlog.scss';

import { urlFor, client } from '../../client';
import { BlogHeader } from '../../components';

const serializers = {
	types: {
		code: (props) => (
			<pre data-language={props.node.language}>
				<code>{props.node.code}</code>
			</pre>
		),
	},
};

const SingleBlog = () => {
	const [blogPost, setBlogPost] = useState([]);
	// eslint-disable-next-line prefer-const
	const { blogId } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		client
			.fetch(`*[_type=='blog' && slug.current=='${blogId}']`)
			.then((data) => {
				setBlogPost(data[0]);
			});
	}, [blogId]);

	return (
		<>
			<motion.div className="app__blog-container">
				<BlogHeader
					title={blogPost.title}
					img={blogPost.coverImage}
					date={blogPost.date}
				/>
				<div className="app__blog-content">
					{blogPost.content && (
						<BlockContent
							blocks={blogPost.content}
							serializers={serializers}
							// projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
							// dataset="production"
						/>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default BlogWrap(
	MotionWrap(SingleBlog, 'app__singleBlog'),
	'blogItem',
	'app__whitebg'
);
