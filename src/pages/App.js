import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from './Main/Main';
import Login from './Login/Login';

/**
 * App page, that combines routes together.
 * 
 * @returns {JSX.Element} - Rendered page: Routes.
 */
function App() {
	let navigate = useNavigate();
	const loginSituation = localStorage.getItem('isLoggedin');

	// checks if the user is not logged in and 
	// pushes unlogged users to login page
	useEffect(() => {
		if (loginSituation !== 'true') {
			navigate('')
		}
	}, [loginSituation, navigate]);


	return (
		// routes of the app
		<Routes>
			{/* route to /main page */}
			<Route path={'/main'} element={<Main />} />;
			{/* route to index or login page */}
			<Route path={'/'} exact element={<Login />} />
		</Routes>
	);
}

export default App;
