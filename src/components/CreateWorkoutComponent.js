import React, { Component } from "react";
import { connect } from "react-redux";

class CreateWorkout extends Component {
  render() {
    const exercises = this.props.exercises.exercises.map((exercise) => (
      <div key={exercise.id}>
        <h3>{exercise.name}</h3>
      </div>
    ));
    return (
      <>
        {exercises}
        <h1>CreateWorkout Component</h1>
        <form>
          <button>
            <select name="workoutList" id="workoutList"></select>
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  exercises: state.exercises,
});

export default connect(mapStateToProps, null)(CreateWorkout);
