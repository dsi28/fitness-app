import { ADD_USER } from '../ActionTypes';

const initialState = {
    username:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return{...state, username: action.payload}
        default:
            return state;
    }
}