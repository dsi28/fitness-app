import * as ActionTypes from "../ActionTypes";

export const addUser = (username) => ({
  type: ActionTypes.ADD_USER,
  payload: username,
});

export const addUserWorkout = (workout) => ({
  type: ActionTypes.ADD_USER_WORKOUT,
  payload: workout,
});
