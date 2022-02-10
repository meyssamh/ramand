import React from 'react';

import './Input.css';

/**
 * Functional react component for label and input.
 * 
 * @param {*} props - React props for label and input.
 * @returns {JSX.Element} - Rendered component: A label with input.
 */
const Input = props => {
	const {id, type, labelText, onChange, value} = props;
	return (
		<>
			<label htmlFor={id}>
				{labelText}
			</label>
			<input
				type={type}
				id={id}
				onChange={onChange}
				value={value}
				className={'input'}
			/>
		</>
	);
};

export default Input;