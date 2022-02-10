import * as actionTypes from './actionTypes';

// action creator for login
export const login = (username, password) => {
	return {
		type: actionTypes.LOGIN,
		username: username,
		password: password
	}
};

// action creator for cancel
export const cancel = () => {
	return {
		type: actionTypes.CANCEL
	}
};