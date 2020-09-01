import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

	handleCreateWorkoutClick = () => {
		console.log('test');
	}
	render() {
		return (
			<>
				<Link to={`/login`}>
					<button onClick={() => this.handleCreateWorkoutClick()} >Create Workout</button>
				</Link>
			</>
		);
	}
}
export default Home;