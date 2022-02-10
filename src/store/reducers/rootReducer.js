import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import mainReducer from './mainReducer';

// combining reducers so we have one root reducer
const rootReducer = combineReducers({
	login: loginReducer,
	main: mainReducer
});

export default rootReducer;