import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { connect } from 'react-redux';

import './Header.css';

/**
 * Functional react component for header.
 * 
 * @param {*} props - React props for header.
 * @returns {JSX.Element} - Rendered component: A header.
 */
const Header = props => {
	return (
		<AppBar position={'static'}>
			<Toolbar>
				<div className={'header-data'}>
					<Typography variant={'h6'}>
						{props.username}
					</Typography>
					<Typography variant={'h6'}>
						{props.counter}
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = state => {
	return {
		username: state.login.username,
		counter: state.main.counter,
	}
};

export default connect(mapStateToProps)(Header);