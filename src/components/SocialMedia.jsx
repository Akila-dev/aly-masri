import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<a href="https://www.linkedin.com/in/aly-masri-mba-0a247a172/">
			<FaLinkedinIn />{' '}
		</a>
		<a href="https://twitter.com/AlyMasri">
			<BsTwitter />{' '}
		</a>

		<a href="https://www.instagram.com/alymasri/">
			<BsInstagram />{' '}
		</a>
	</div>
);

export default SocialMedia;
