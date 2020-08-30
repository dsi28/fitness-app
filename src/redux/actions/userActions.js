import * as ActionTypes from '../ActionTypes';

export const addUser = (username) => ({
    type: ActionTypes.ADD_USER,
    payload: username
});
