import * as actionTypes from './actionTypes';

// action creator that saves data to initial state
export const onLoad = data => {
	return {
		type: actionTypes.ON_LOAD,
		data: data
	}
};

// action creator that opens modal
export const openModal = () => {
	return {
		type: actionTypes.OPEN_MODAL,
	}
};

// action creator that closes modal
export const closeModal = () => {
	return {
		type: actionTypes.CLOSE_MODAL,
	}
};

// action creator that returns the clicked row id
export const defineRow = rowId => {
	return {
		type: actionTypes.DEFINE_ROW,
		rowId: rowId
	}
};

// action creator that holds edited row data
export const editRow = data => {
	return {
		type: actionTypes.EDIT_ROW,
		data: data
	}
};

// action creator that edits filter counter number
export const counter = () => {
	return  {
		type: actionTypes.COUNTER
	}
};

// action creator that shows filtered rows
export const filterRows = data => {
	return {
		type: actionTypes.FILTER_ROWS,
		data: data
	}
};