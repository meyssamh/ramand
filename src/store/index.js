import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

// our complete store
const store = createStore(rootReducer);

export default store;