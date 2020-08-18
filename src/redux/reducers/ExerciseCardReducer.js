import { ADD_EXTERCISECARDS, ADD_EXTERCISECARD } from '../ActionTypes';

const initialState = {
    exerciseCards = []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXTERCISECARDS:
            return {...state, exerciseCards: payload}
            break;
        case ADD_EXTERCISECARD:
            return {...state, exerciseCards: state.exerciseCards.concate(payload)}
            break;
        default:
            break;
    }
}