import React, { Component } from 'react';
import {getExercises} from '../redux/actions/exerciseActions';
import { connect } from 'react-redux';

class CreateWorkout extends Component{

    componentDidMount(){
        this.props.getExercises();
    }

    render(){
        const exercises = this.props.exercises.exercises.map(exercise => (
            <div key={exercise.id}>
                <h3>{exercise.name}</h3>
            </div>
        ));
        return(
            <>
            {exercises}
                <h1>CreateWorkout Component</h1>
                <form>
                <button>
                    <select name="workoutList" id="workoutList" > 
                    </select>
                </button>
                </form>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    exercises: state.exercises
});

const mapDispatchToProps = {
    getExercises
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);