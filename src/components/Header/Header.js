import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SudokuContext from '../../contexts/SudokuContext';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
	static contextType = SudokuContext;

	handleLogoutClick = () => {
		TokenService.clearAuthToken();
		this.context.setAuthState(false);
		this.context.setUserName(null);
	}

	renderLoginLink() {
		return <></>;
		/*
		return (
			<Link className='Header__link' to='/signin'>
				Sign in
			</Link>
		);
		*/
	}

	renderLogoutLink() {
		return (
			<Link 
				className='Header__link'
				onClick={this.handleLogoutClick}
				to='/'
			>
				Sign out
			</Link>
		);
	}

	render() {
		return (
			<>
				<nav className='Header'>
					<Link to='/' className='Header__logo'>Sudoku</Link>
					<div className='Header__div'>
						{this.context.hasAuthToken
							? this.renderLogoutLink()
							: this.renderLoginLink()}
					</div>
				</nav>
			</>
		);
	}
}