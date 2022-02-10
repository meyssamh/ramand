import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { connect } from 'react-redux';

import { openModal, defineRow, counter } from '../../store/actions/main';
import Filter from '../filter/Filter';
import './Grid.css';

/**
 * Functional react component for data grid.
 * 
 * @param {*} props - React props for data grid.
 * @returns {JSX.Element} - Rendered component: A data grid.
 */
const Grid = props => {
	const [page, setPage] = useState(0);

	const [rows, setRows] = useState([]);
	const [filterText, setFilterText] = useState('');

	useEffect(() => {
		setRows([...props.data])
	}, [props.data]);

	// changes search or filter text
	const filterChangeHandler = event => {
		setFilterText(event.target.value);
	};

	// selects row and open modal for that row
	const rowClickHandler = (params) => {
		props.onDefineRow(params.row.id);
		props.onOpenModal();
	};

	// columns of the table
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70, type: 'number' },
		{ field: 'title', headerName: 'TITLE', width: 500 },
		{ field: 'completed', headerName: 'COMPLETED', width: 120 },
	];

	// filters the table and sets new number for caounter
	const filterRowsHandler = () => {
		if (filterText.length === 0) {
			setRows([...props.data]);
			props.onCount();
		} else {
			const newRows = rows.filter(item => item.title.includes(filterText));
			setRows([...newRows]);
			props.onCount();
		}
	};

	return (
		<>
			<Filter
				onChange={filterChangeHandler}
				value={filterText}
				onClick={filterRowsHandler}
			/>
			<div className={'grid-container'}>
				<DataGrid
					page={page}
					onPageChange={(newPage) => setPage(newPage)}
					rowsPerPageOptions={[5, 10, 20]}
					autoPageSize
					pagination
					rows={rows}
					columns={columns}
					onRowClick={rowClickHandler}
				/>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		data: state.main.data,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onOpenModal: () => dispatch(openModal()),
		onDefineRow: rowId => dispatch(defineRow(rowId)),
		onCount: () => dispatch(counter())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);