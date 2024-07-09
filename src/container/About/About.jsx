import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const academicBackground = [
	{
		degree: 'Doctorate in business administration (DBA)',
		institution: 'The Ascencia Business School (France)',
		year: 'Present',
	},
	{
		degree: 'Master’s in digital marketing - 2022',
		institution:
			'The American University of Science and Technology– IACBE Accreditation',
		year: '2022',
	},
	{
		degree: 'Digital Marketing- 2021',
		institution:
			'The Open University (The Open University is a public research university and the largest university in the UK) - IAB Europe Accreditation',
		year: '2021',
	},
	{
		degree: 'BA double degree in HR and Marketing- 2019',
		institution:
			'The American University of Science and Technology– IACBE Accreditation ',
		year: '2019',
	},
];

const About = () => (
	<>
		<h2 className="head-text">
			I Know that <span>Good Marketing</span> <br />
			means <span>Good Business</span>
		</h2>

		<div className="app__about-container">
			<motion.div className="app__about-info">
				<p>
					In the world of marketing, there&apos;s a name that stands out, A
					brand that&apos;s both innovative and creative, without a doubt. Aly,
					the name on every client&apos;s lips, Known for its strategic insights
					and marketing tips.
				</p>
				<p>
					From social media campaigns to branding strategies, Aly&apos;s
					expertise always leaves a lasting legacy, With its unique approach and
					tailored solutions, Aly is the go-to agency for marketing revolutions.
				</p>
				<p>
					With its distinctive brand and identity, Aly is a brand that always
					captivates humanity, A symbol of innovation and creativity, Aly always
					exceeds expectations, effortlessly.
				</p>
				<p>
					In the world of marketing, Aly reigns supreme, A brand that&apos;s
					known for its forward-thinking theme, So if you want to take your
					business to the next level, Aly is the brand that will always excel.
				</p>
			</motion.div>
			<div className="app__about-exp">
				{academicBackground.map(({ degree, institution, year }, id) => (
					<motion.div className="app__about-exp-item" key={id}>
						<div className="app__about-exp-year">
							<p className="bold-text">{year}</p>
						</div>
						<motion.div className="app__about-studies">
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__about-study"
							>
								<h4 className="bold-text">{degree}</h4>
								<p className="p-text">{institution}</p>
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	</>
);

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg'
);
