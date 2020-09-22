import React, { Component } from "react";
import { connect } from "react-redux";

class CreateWorkout extends Component {
  handleCreateWorkoutSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.workoutList.value);
  };
  render() {
    const workouts = this.props.workouts.workouts.map((workout) => (
      <option key={workout.id} value={workout}>
        {workout.name}
      </option>
    ));
    return (
      <>
        <h1>-{this.props.user.username}</h1>
        <h1>CreateWorkout Component</h1>
        <form onSubmit={(e) => this.handleCreateWorkoutSubmit(e)}>
          <select name="workoutList" id="workoutList">
            {workouts}
          </select>
          <button>Get Started!</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  exercises: state.exercises,
  exerciseCards: state.exerciseCards,
  workouts: state.workouts,
  user: state.user,
});

export default connect(mapStateToProps, null)(CreateWorkout);
