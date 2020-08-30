import { ADD_WORKOUTS, ADD_WORKOUT } from '../ActionTypes';

const initialState = {
    workouts: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORKOUTS:
            return{ ...state, workouts: action.payload}
        case ADD_WORKOUT:
            return{ ...state, workouts: state.workouts.concat(action.payload)}
        default:
            return state;
    }
}