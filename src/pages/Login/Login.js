import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import { login, cancel } from '../../store/actions/login';
import { onLoad } from '../../store/actions/main';
import './Login.css';

/**
 * Login page.
 * 
 * @param {*} props - React props.
 * @returns {JSX.Element} - RenderedPage: Login page.
 */
const Login = props => {
	let navigate = useNavigate();

	const [inputUsername, setInputUsername] = useState('');
	const [inputPassword, setInputPassword] = useState('');

	// saves username, password and data in store and pushes the url to main
	const loginClickHandler = () => {
		const username = inputUsername;
		const password = inputPassword;

		// fetching data here, so the user do not see empty table
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(data => props.onLoad(data))
			.catch(error => console.log(error));

		localStorage.setItem('isLoggedin', true);
		props.onLogin(username, password);

		navigate('main');
	};

	// resets username and password inputs
	const cancelClickHandler = () => {
		props.onCancel();
		setInputUsername('');
		setInputPassword('');
	};

	// changes the value of username and password
	const inputOnChangeHandler = (event) => {
		const inputId = event.target.id;
		if (inputId === 'username') {
			setInputUsername(event.target.value);
		} else if (inputId === 'password') {
			setInputPassword(event.target.value);
		}
	};

	const disabledButton = inputUsername !== '' && inputPassword !== '' ? false : true;

	return (
		<div className={'login-container'}>
			<div className={'input-container'}>
				{/* title */}
				<h4 className={'title'}>
					Login
				</h4>
				<form className={'form'}>
					{/* email */}
					<Input
						id={'username'}
						type={'text'}
						labelText={'Username:'}
						onChange={inputOnChangeHandler}
						value={inputUsername}
					/>
					<br />
					{/* password */}
					<Input
						id={'password'}
						type={'password'}
						labelText={'Password:'}
						onChange={inputOnChangeHandler}
						value={inputPassword}
					/>
				</form>
				<div className={'action'}>
					{/* cancel button */}
					<button className={'button cancel-button'} onClick={cancelClickHandler}>
						Cancel
					</button>
					{/* login button */}
					<button
						className={'button login-button'}
						onClick={loginClickHandler}
						disabled={disabledButton}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		username: state.login.username,
		password: state.login.password,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (username, password) => dispatch(login(username, password)),
		onCancel: () => dispatch(cancel()),
		onLoad: data => dispatch(onLoad(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);