/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.scss';

const Textarea = ({
	placeholder,
	value,
	name,
	handleChangeInput,
	isRequired,
}) => (
	<>
		<div className="app__flex">
			<textarea
				className="p-text"
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChangeInput}
			/>
		</div>
	</>
);

export default Textarea;
