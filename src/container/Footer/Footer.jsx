/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import jsonp from 'jsonp';
import queryString from 'query-string';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
	const [formData, setFormData] = useState({
		NAME: '',
		EMAIL: '',
		MESSAGE: '',
		newsletter: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { NAME, EMAIL, MESSAGE, newsletter } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		jsonp(
			`https://alymasri.us10.list-manage.com/subscribe/post?u=69f5a35efbb528b5e8a51a8d8&amp;id=1981f3d9c7&amp;f_id=00eb41e5f0&${queryString.stringify(formData)}`,
			{ param: 'c' },
			(err, data) => {
				// console.log('data:', data);
				// console.log(formData);
			}
		);
	};

	return (
		<>
			<h2 className="head-text">Take a coffee & chat with me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href="mailto:aly.masryy@gmail.com" className="p-text">
						aly.masryy@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+971 543210980" className="p-text">
						+971 543210980
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<form className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="NAME"
							value={NAME}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="EMAIL"
							placeholder="Your Email"
							name="EMAIL"
							value={EMAIL}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							name="MESSAGE"
							value={MESSAGE}
							onChange={handleChangeInput}
						/>
					</div>
					{/* <div className="app__checkbox-container">
						<input
							type="checkbox"
							name="group[498916][1]"
							value={newsletter}
							onChange={handleChangeInput}
						/>
						<span className="p-text">Subscribe to my Newsletter</span>
					</div> */}
					<button type="button" className="p-text" onClick={handleSubmit}>
						{!loading ? 'Send Message' : 'Sending...'}
					</button>
				</form>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
