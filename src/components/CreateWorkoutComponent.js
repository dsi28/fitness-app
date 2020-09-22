import React, { Component } from "react";
import { connect } from "react-redux";

class CreateWorkout extends Component {
  render() {
    const exerciseCards = this.props.exerciseCards.exerciseCards.map(
      (exerciseCard) => (
        <div key={exerciseCard.id}>
          <h3>{exerciseCard.type}</h3>
        </div>
      )
    );
    const workouts = this.props.workouts.workouts.map((workout) => (
      <div key={workout.id}>
        <h3>{workout.name}</h3>
      </div>
    ));
    const exercises = this.props.exercises.exercises.map((exercise) => (
      <div key={exercise.id}>
        <h3>{exercise.name}</h3>
      </div>
    ));
    return (
      <>
        <h1>workouts:</h1>
        {workouts}
        <h1>exerciseCards:</h1>
        {exerciseCards}
        <h1>exercises:</h1>
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
  exerciseCards: state.exerciseCards,
  workouts: state.workouts,
});

export default connect(mapStateToProps, null)(CreateWorkout);
