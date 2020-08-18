import { ADD_EXTERCISES, ADD_EXTERCISE } from './ActionTypes';

//fith

const initialState = {
    exercises: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXTERCISES:
            return {...state, exercises: payload}
            break;
        case ADD_EXTERCISE:
            return {...state, exercises: state.exercises.concat(payload)}
            break;
        default:
            break;
    }
}