import { ADD_USER, ADD_USER_WORKOUT } from "../ActionTypes";

const initialState = {
  username: "",
  workout: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, username: action.payload };
    case ADD_USER_WORKOUT:
      return { ...state, workout: JSON.parse(action.payload) };
    default:
      return state;
  }
};
