/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import jsonp from 'jsonp';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import clapping from '../../assets/clapping.wav';
import './Footer.scss';

const Footer = () => {
	const location = useLocation();

	const form = useRef();
	const checkbox = useRef();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showFireworks, setShowFireworks] = useState(false);
	const [formData, setFormData] = useState({
		NAME: '',
		EMAIL: '',
		MESSAGE: '',
		newsletter: '',
	});
	const [newsletterData, setNewsletterData] = useState({
		NAME: '',
		EMAIL: '',
	});

	const { NAME, EMAIL, MESSAGE, newsletter } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		if (name === 'NAME') {
			setNewsletterData({ ...newsletterData, [name]: value });
		} else if (name === 'EMAIL') {
			setNewsletterData({ ...newsletterData, [name]: value });
		}
	};

	const playAudio = (audio) => {
		const music = new Audio(audio);
		music.playbackRate = 1;
		music.play();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		if (checkbox.current.checked) {
			jsonp(
				`${process.env.REACT_APP_MAILCHIMP_ACTION_URL}&EMAIL=${formData.EMAIL}&NAME=${formData.NAME}`,
				{ param: 'c' },
				(err, data) => {
					console.log('data:', data);
				}
			);
		}

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_CONTACT_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setLoading(false);
					setIsFormSubmitted(true);
					playAudio(clapping);
					setShowFireworks(true);

					setTimeout(() => {
						setShowFireworks(false);
					}, 6000);
					setFormData({
						NAME: '',
						EMAIL: '',
						MESSAGE: '',
						newsletter: '',
					});
				},
				(error) => {
					console.log('FAILED TO SEND... ', error.text);
					setLoading(false);
				}
			);
	};

	return (
		location.pathname !== '/visual-identity-workbook' && (
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
					<form
						ref={form}
						onSubmit={handleSubmit}
						className="app__footer-form app__flex"
					>
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
						<div className="app__checkbox-container">
							<input
								ref={checkbox}
								type="checkbox"
								name="newsletter"
								value={newsletter}
								onChange={handleChangeInput}
							/>
							<span className="p-text">Subscribe to my Newsletter</span>
						</div>
						<button type="submit" className="p-text">
							{!loading ? 'Send Message' : 'Sending...'}
						</button>
					</form>
				) : (
					<div>
						<h3 className="head-text">Thank you for getting in touch!</h3>
					</div>
				)}

				{showFireworks && (
					<div className="fixed top-0 left-0 h-screen w-full z-[1000000000000] pointer-events-none">
						<Fireworks autorun={{ speed: 2 }} />
					</div>
				)}
			</>
		)
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
