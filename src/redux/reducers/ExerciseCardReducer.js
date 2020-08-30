import { ADD_EXTERCISECARDS, ADD_EXTERCISECARD } from '../ActionTypes';

const initialState = {
    exerciseCards : []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXTERCISECARDS:
            return {...state, exerciseCards: action.payload}
        case ADD_EXTERCISECARD:
            return {...state, exerciseCards: state.exerciseCards.concate(action.payload)}
        default:
            return state;
    }
}