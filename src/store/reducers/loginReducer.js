import * as actionTypes from '../actions/actionTypes';

// initial state of login page
const initialState = {
	username: '',
	password: '',
};

// reducer of login page
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		// actions in case of login
		case actionTypes.LOGIN:
			return {
				username: action.username,
				password: action.password
			}
		// actions in case of cancel
		case actionTypes.CANCEL:
			return {
				username: '',
				password: ''
			}
		// default action
		default:
			return state;
	}
};

export default loginReducer;