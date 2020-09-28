import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  handleCreateWorkoutClick = () => {
    console.log("test");
  };
  render() {
    if (this.props.user.workout) {
      return <>{this.props.user.workout}</>;
    } else {
      return (
        <>
          <Link to={`/createworkout`}>
            <button onClick={() => this.handleCreateWorkoutClick()}>
              Create Workout
            </button>
          </Link>
        </>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Home);
