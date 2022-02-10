import React from 'react';
import { TextField, Button } from '@mui/material';

import './Filter.css';

/**
 * Functional react component for search.
 * 
 * @param {*} props - React props.
 * @returns {JSX.Element} - Rendered component: A search bar.
 */
const Filter = props => {
	return (
		<div className={'filter'}>
			<TextField
				label={'Filter Title'}
				variant={'outlined'}
				onChange={props.onChange}
				value={props.value}
			/>
			<Button
				variant={'contained'}
				onClick={props.onClick}
			>
				Search
			</Button>
		</div>
	);
};

export default Filter;