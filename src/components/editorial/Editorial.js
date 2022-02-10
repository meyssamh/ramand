import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, Typography, Button } from '@mui/material';
import { connect } from 'react-redux';

import { closeModal, editRow } from '../../store/actions/main';
import './Editorial.css';

/**
 * Functional react component for modal.
 * 
 * @param {*} props - React props.
 * @returns {JSX.Element} - Rendered component: A modal.
 */
const Editorial = props => {
	const [title, setTitle] = useState('');
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		setTitle(props.rowData.title);
		setCompleted(props.rowData.completed);
	}, [
		props.rowData.completed,
		props.rowData.title,
	]);

	const closeModalHandler = () => {
		props.onCloseModal();
		setTitle(props.rowData.title);
		setCompleted(props.rowData.completed);
	};

	const inputOnChangeHandler = event => {
		const field = event.target.labels[0].innerHTML;

		switch (field) {
			case 'TITLE':
				setTitle(event.target.value);
				break;
			case 'COMPLETED':
				setCompleted(event.target.value);
				break;
			default:
				return null;
		}
	};

	// edits row in central state
	const editModalHandler = () => {
		const newRow = {
			id: props.rowData.id,
			title,
			completed,
		};
		props.onEditRow(newRow);
		props.onCloseModal();
	};

	return (
		<div>
			<Modal
				open={props.showModal}
				onClose={closeModalHandler}
			>
				<Box className={'modal-container'}>
					{/* title */}
					<Typography variant={'h4'} className={'modal-title'}>
						More Information
					</Typography>
					<div className={'modal-inputs'}>
						{/* inputfield for row title */}
						<TextField
							label={'TITLE'}
							size={'small'}
							defaultValue={title}
							onChange={inputOnChangeHandler}
						/>
						{/* input field for row completed */}
						<TextField
							label={'COMPLETED'}
							size={'small'}
							defaultValue={completed}
							onChange={inputOnChangeHandler}
						/>
					</div>
					{/* action area */}
					<div className={'modal-actions'}>
						{/* submit button */}
						<Button variant={'contained'} onClick={editModalHandler}>
							Submit
						</Button>
						{/* cancel button */}
						<Button variant={'outlined'} onClick={closeModalHandler}>
							Cancel
						</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		showModal: state.main.showModal,
		rowData: state.main.row
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onCloseModal: () => dispatch(closeModal()),
		onEditRow: data => dispatch(editRow(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Editorial);