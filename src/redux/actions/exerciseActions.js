import * as ActionTypes from '../ActionTypes';

//fourth

//TODO get all extercies from db
//via dispatch call the addExtercises() 
export const getExercises = () => (dispatch) => {

}

//add the extercises to the state using the reducer
export const addExercises = (exercises) => ({
    type: ActionTypes.ADD_EXTERCISES,
    payload: exercises
});

//TODO add an extercise to the db
//via dispatch call the addExtercise() 
export const createExercise = (exercise) => (dispatch) => {
    
}

//add an exercise to the state using reducer
export const addExtercise = (exercise) => ({
    type: ActionTypes.ADD_EXTERCISE,
    payload: exercise
});

