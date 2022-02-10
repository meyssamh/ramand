import React from 'react';
import { Box } from '@mui/material';

import Header from '../../components/header/Header';
import Grid from '../../components/grid/Grid';
import Editorial from '../../components/editorial/Editorial';

/**
 * Main page.
 * 
 * @returns {JSX.Element} - Rendered page: Main page.
 */
const Main = () => {
	return (
		<Box>
			<Header />
			<Grid />
			<Editorial />
		</Box>
	);
}

export default Main;