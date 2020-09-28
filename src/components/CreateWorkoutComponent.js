import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserWorkout } from "../redux/actions/userActions";

class CreateWorkout extends Component {
  state = {
    selectWorkout: "",
  };
  handleCreateWorkoutSubmit = (e) => {
    e.preventDefault();
    if (this.state.selectWorkout === "") {
      const workout = JSON.stringify(this.props.workouts.workouts[0]);
      this.props.addUserWorkout(workout);
    } else {
      this.props.addUserWorkout(this.state.selectWorkout);
    }
  };
  handleOptionChange = (e) => {
    console.log(e.target.value);
    this.setState({ selectWorkout: e.target.value });
  };
  render() {
    const workouts = this.props.workouts.workouts.map((workout) => (
      <option key={workout.id} value={JSON.stringify(workout)}>
        {workout.name}
      </option>
    ));
    return (
      <>
        <h1>-{this.props.user.username}</h1>
        <h1>CreateWorkout Component</h1>
        <form onSubmit={(e) => this.handleCreateWorkoutSubmit(e)}>
          <select
            name="workoutList"
            id="workoutList"
            value={this.state.selectWorkout}
            onChange={(e) => this.handleOptionChange(e)}
          >
            {workouts}
          </select>
          <button>Get Started!</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
    exerciseCards: state.exerciseCards,
    workouts: state.workouts,
    user: state.user,
  };
};
const mapDispatchToProps = {
  addUserWorkout,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);
