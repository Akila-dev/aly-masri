/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import { FaPaperPlane } from 'react-icons/fa6';

import './Workbook.scss';

import clapping from '../assets/clapping.wav';
import images from '../constants/images';

const Workbook = () => {
	const form = useRef();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showFireworks, setShowFireworks] = useState(false);
	const [formData, setFormData] = useState({
		purpose: '',
		mission: '',
		values: '',
		personality: '',
		strengths: '',
		competitors: '',
		weaknesses: '',
		uniqueness: '',
		benefits: '',
		primaryTarget: '',
		secondaryTarget: '',
		ageGroup: '',
		specificGender: '',
		attraction: '',
		logo: '',
		whyLogo: '',
		whyNotLogo: '',
		threeWords: '',
		logoExpectation: '',
		color: '',
		typography: '',
		type: '',
		definitionOfLogo: '',
		logoLikes: '',
		inAddition: '',
	});

	const {
		purpose,
		mission,
		values,
		personality,
		strengths,
		competitors,
		weaknesses,
		uniqueness,
		benefits,
		primaryTarget,
		secondaryTarget,
		ageGroup,
		specificGender,
		attraction,
		logo,
		whyLogo,
		whyNotLogo,
		threeWords,
		logoExpectation,
		color,
		typography,
		type,
		definitionOfLogo,
		logoLikes,
		inAddition,
	} = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const playAudio = (audio) => {
		const music = new Audio(audio);
		music.playbackRate = 1;
		music.play();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_WORKBOOK_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_WORKBOOK_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log('SUCCESS!');
					setLoading(false);
					setIsFormSubmitted(true);
					playAudio(clapping);
					setShowFireworks(true);

					setTimeout(() => {
						setShowFireworks(false);
					}, 6000);
					setFormData({
						purpose: '',
						mission: '',
						values: '',
						personality: '',
						strengths: '',
						competitors: '',
						weaknesses: '',
						uniqueness: '',
						benefits: '',
						primaryTarget: '',
						secondaryTarget: '',
						ageGroup: '',
						specificGender: '',
						attraction: '',
						logo: '',
						whyLogo: '',
						whyNotLogo: '',
						threeWords: '',
						logoExpectation: '',
						color: '',
						typography: '',
						type: '',
						definitionOfLogo: '',
						logoLikes: '',
						inAddition: '',
					});
				},
				(error) => {
					console.log('FAILED TO SEND... ', error.text);
					setLoading(false);
				}
			);
	};

	return (
		<div>
			{isFormSubmitted ? (
				<form ref={form} onSubmit={handleSubmit} className="app_workbook">
					{/* Hero */}
					<div className="app_workbook-hero">
						<h1 className="padding">THE VISUAL IDENTITY CLIENT WORKBOOK</h1>
						<div className="padding">
							<img src={images.horizontalLogo} alt="logo" />
						</div>
					</div>
					{/* Section 1 */}
					<div className="app_workbook-2cols">
						<div className="app_workbook-2cols-l padding">
							<h2 className="head-text">Your Purpose</h2>
							<p className="p-text">
								A brand’s purpose is the fundamental reason it exists beyond
								making money. It reflects the positive impact the brand aims to
								have on the world.{' '}
								<span className="show-sm">(Look below for examples)</span>
							</p>
							<div>
								<textarea
									className="p-text whitebg"
									placeholder="Your brand purpose is the reason your company exists beyond profit, focusing on the positive impact you want to make in the world. - Use this text box to write your client’s Purpose."
									name="purpose"
									value={purpose}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div className="app_workbook-2cols-img padding bg-dark">
							<img src={images.workbook1} alt="purpose" />
						</div>
					</div>
					{/* Section 2 */}
					<div className="app_workbook-2cols">
						<div className="app_workbook-2cols-l padding whitebg">
							<h2 className="head-text">Your Mission</h2>
							<p className="p-text">
								A brand’s mission is a statement that defines the company’s
								objectives and approach to reach those objectives. It outlines
								what the company aims to achieve in the short to medium term.
								world.{' '}
								<span className="show-sm">(Look below for examples)</span>
							</p>
							<div>
								<textarea
									className="p-text primarybg"
									placeholder="Your brand mission is a clear statement of what your company aims to achieve and how it plans to do it. - Use this text box to write your client’s Mission."
									name="mission"
									value={mission}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div className="app_workbook-2cols-img padding bg-dark">
							<img src={images.workbook2} alt="purpose" />
						</div>
					</div>
					{/* Section 3 */}
					<div className="app_workbook-2cols">
						<div className="app_workbook-2cols-l padding">
							<h2 className="head-text">Your Values</h2>
							<p className="p-text">
								Brand values are the core principles and beliefs that guide a
								company’s behaviour and decision-making. They shape the
								company’s culture and define how it interacts with customers,
								employees, and the broader community.
								<span className="show-sm">(Look below for examples)</span>
							</p>
							<div>
								<textarea
									className="p-text whitebg"
									placeholder="Your brand values are the core principles that guide your company’s actions, culture, and interactions with stakeholders. - Use this text box to write your client’s Values."
									name="values"
									value={values}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div className="app_workbook-2cols-img padding bg-dark">
							<img src={images.workbook3} alt="purpose" />
						</div>
					</div>
					{/* ABOUT THE BRAND */}
					<div className="padding section whitebg">
						<h2 className="head-text">ABOUT THE BRAND</h2>
						<div className="app_workbook-grid">
							<div>
								<p className="bold-text">
									Brand Personality - How would you describe your brand?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="personality"
										value={personality}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									What are the strengths of your brand?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="strengths"
										value={strengths}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									Who are your competitors? - 3/5 Examples
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="competitors"
										value={competitors}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">What are some weaknesses</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="weaknesses"
										value={weaknesses}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									What sets you apart from the competition?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="uniqueness"
										value={uniqueness}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									What value do customers get from your brand/product/service?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="benefits"
										value={benefits}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* ABOUT THE AUDIENCE */}
					<div className="padding section primarybg">
						<h2 className="head-text">ABOUT THE AUDIENCE</h2>
						<div className="app_workbook-grid">
							<div>
								<p className="bold-text">
									Who are your primary target audience and what do they look
									like?
								</p>
								<div>
									<textarea
										className="whitebg"
										placeholder="Use this text box"
										name="primaryTarget"
										value={primaryTarget}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									Is there a specific gender your brand speaks to?
								</p>
								<div>
									<textarea
										className="whitebg"
										placeholder="Use this text box"
										name="specificGender"
										value={specificGender}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div className="sub-grid">
								<div>
									<p className="bold-text">
										Do you have a secondary target audience?
									</p>
									<div>
										<textarea
											className="whitebg"
											placeholder="Use this text box"
											name="secondaryTarget"
											value={secondaryTarget}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div>
									<p className="bold-text">
										What are your primary target audiences age group?
									</p>
									<div>
										<textarea
											className="whitebg"
											placeholder="Use this text box"
											name="ageGroup"
											value={ageGroup}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<div className="row-2">
								<p className="bold-text">
									What is it about your brand/product/service that attracts your
									target audience?
								</p>
								<div>
									<textarea
										className="whitebg"
										placeholder="Use this text box"
										name="attraction"
										value={attraction}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* ABOUT THE LOGO/IDENTITY */}
					<div className="padding section whitebg">
						<h2 className="head-text">ABOUT THE LOGO/IDENTITY</h2>
						<div className="app_workbook-grid">
							<div>
								<p className="bold-text">What is your current logo?</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="logo"
										value={logo}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<p className="bold-text">
									What are 3 words you want your audience to think of when they
									see your logo?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="threeWords"
										value={threeWords}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div className="sub-grid">
								<div>
									<p className="bold-text">
										What do you like about your current logo?
									</p>
									<div>
										<textarea
											className="primarybg"
											placeholder="Use this text box"
											name="whyLogo"
											value={whyLogo}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div>
									<p className="bold-text">
										What do you dislike about your current logo?
									</p>
									<div>
										<textarea
											className="primarybg"
											placeholder="Use this text box"
											name="whyNotLogo"
											value={whyNotLogo}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<div className="row-2">
								<p className="bold-text">
									What are you looking for in your new logo?
								</p>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="logoExpectation"
										value={logoExpectation}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* BRAND SPECTRUM */}
					<div className="brand-spectrum padding bg-dark">
						<h1 className="head-text">BRAND SPECTRUM</h1>
						<div>
							<img src={images.workbook4} alt="BRAND SPECTRUM" />
						</div>
					</div>
					{/* DESIGN PREFERENCES */}
					<div className="padding section whitebg">
						<div className="app_workbook-grid">
							<div className="sub-grid">
								<h2 className="head-text">DESIGN PREFERENCES</h2>
								<div>
									<p className="bold-text">
										Do you have any colour preferences?
									</p>
									<div>
										<textarea
											className="primarybg"
											placeholder="Use this text box"
											name="color"
											value={color}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div>
									<img src={images.workbook5} alt="BRAND SPECTRUM" />
								</div>
								<div>
									<p className="bold-text">
										What are your typography preference
									</p>
									<div>
										<textarea
											className="primarybg"
											placeholder="Use this text box"
											name="typography"
											value={typography}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<div className="sub-grid">
								<p className="bold-text">
									What type of logo are you looking for?
								</p>
								<div>
									<img src={images.workbook6} alt="BRAND SPECTRUM" />
									<img src={images.workbook7} alt="BRAND SPECTRUM" />
								</div>
								<div>
									<textarea
										className="primarybg"
										placeholder="Use this text box"
										name="type"
										value={type}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* DESIGN INSPIRATION */}
					<div className="padding section primarybg">
						<h2 className="head-text">DESIGN INSPIRATION</h2>
						<div className="app_workbook-grid">
							<div className="sub-grid">
								<div>
									<p className="bold-text">
										In your opinion, what defines a successful logo?
									</p>
									<div>
										<textarea
											className="whitebg"
											placeholder="Use this text box"
											name="definitionOfLogo"
											value={definitionOfLogo}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="row-1">
									<p className="bold-text">
										When looking at other brand’s logos, which do you like and
										why?
									</p>
									<div>
										<textarea
											className="whitebg"
											placeholder="Use this text box"
											name="logoLikes"
											value={logoLikes}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<div className="row-2">
								<p className="bold-text">
									Finally, is there anything else you would like to add?
								</p>
								<div>
									<textarea
										className="whitebg"
										placeholder="Use this text box"
										name="inAddition"
										value={inAddition}
										onChange={handleChangeInput}
									/>
								</div>
							</div>
						</div>
						<button type="submit" className="app__btn">
							{loading ? (
								<span>Loading...</span>
							) : (
								<>
									<FaPaperPlane /> Send
								</>
							)}
						</button>
					</div>
				</form>
			) : (
				<div className="successful-container padding">
					<p className="whitebg padding">
						Thank you for taking your time to fill this, I&apos;d get back to
						you shortly
					</p>
				</div>
			)}
			{showFireworks && (
				<div className="fixed top-0 left-0 h-screen w-full z-[1000000000000] pointer-events-none">
					<Fireworks autorun={{ speed: 2 }} />
				</div>
			)}
		</div>
	);
};

export default Workbook;
