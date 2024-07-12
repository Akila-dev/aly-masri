/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.scss';

const InputField = ({
	type,
	placeholder,
	value,
	name,
	handleChangeInput,
	isRequired,
}) => (
	<>
		<div className="app__flex">
			<input
				className="p-text"
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChangeInput}
			/>
		</div>
	</>
);

export default InputField;
