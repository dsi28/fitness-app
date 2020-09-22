import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import router from "../shared/router";
import "../shared/styles/main.css";
import { connect } from "react-redux";
import { getExercises } from "../redux/actions/exerciseActions";

class Main extends Component {
  componentDidMount() {
    this.props.getExercises();
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
});

const mapDispatchToProps = {
  getExercises,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
