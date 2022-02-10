import * as actionTypes from '../actions/actionTypes';

// initial state of main page
const initialState = {
	data: [],
	showModal: false,
	row: {},
	counter: 0,
};

// reducer of main page
const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		// action in case of loading main page
		case actionTypes.ON_LOAD:
			return {
				...state,
				data: action.data
			}
		// action in case of opening modal
		case actionTypes.OPEN_MODAL:
			return {
				...state,
				showModal: true,
			}
		// action in case of closing modal
		case actionTypes.CLOSE_MODAL:
			return {
				...state,
				showModal: false,
			}
		// action in case of selecting the row
		case actionTypes.DEFINE_ROW:
			const rowData = state.data.find(item => {
				return item.id === action.rowId;
			});
			return {
				...state,
				row: rowData,
			}
		// action in case of editing the row
		case actionTypes.EDIT_ROW:
			const editedRowData = action.data;
			const oldData = [...state.data];
			const newData = oldData.map(item => {
				if (item.id === editedRowData.id) {
					item = { ...editedRowData }
				}
				return item;
			});
			return {
				...state,
				data: newData,
				row: {},
			}
		// action in case of searching anc changing the counter
		case actionTypes.COUNTER:
			return {
				...state,
				counter: state.counter + 1
			}
		// default action
		default:
			return state;
	}
};

export default mainReducer;