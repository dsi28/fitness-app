import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import router from "../shared/router";
import "../shared/styles/main.css";
import { connect } from "react-redux";
import { getExercises } from "../redux/actions/exerciseActions";
import { getExerciseCards } from "../redux/actions/exerciseCardActions";
import { getWorkouts } from "../redux/actions/workoutActions";

class Main extends Component {
  componentDidMount() {
    this.props.getExercises();
    this.props.getExerciseCards();
    this.props.getWorkouts();
  }
  render() {
    return (
      <>
        <Header />
        <div id="page-container">
          <div id="content-wrap">{router}</div>
          <Footer />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  exercises: state.exercises,
  exerciseCards: state.exerciseCards,
  workouts: state.workouts,
});

const mapDispatchToProps = {
  getExercises,
  getExerciseCards,
  getWorkouts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
