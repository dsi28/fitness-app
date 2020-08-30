import { ADD_EXTERCISES, ADD_EXTERCISE } from '../ActionTypes';

//fifth

const initialState = {
    exercises: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXTERCISES:
            return {...state, exercises: action.payload}
        case ADD_EXTERCISE:
            return {...state, exercises: state.exercises.concat(action.payload)}
        default:
            return state;
    }
}