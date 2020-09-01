import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<>
				<h3> HeaderComponent</h3>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/login'>Login</Link>
					<Link to='/createworkout'> CreateWorkout</Link>
				</nav>
				<h3>End header</h3>
			</>
		);
	}
}
export default Header