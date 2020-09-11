import * as ActionTypes from '../ActionTypes';

//TODO gets workouts from db 
//using dispatch calls addWorkouts()
export const getWorkouts = () => (dispatch) => {
    
}

//sends workouts to reducer so state can be updated
export const addWorkouts = (workouts) => ({
    type: ActionTypes.ADD_WORKOUTS,
    payload: workouts
});

//TODO adds workout to db 
//using dispatch calls addWorkout()
export const createWorkout = (workout) => (dispatch) => {

}

//
export const addWorkout = (workout) => ({
    type: ActionTypes.ADD_WORKOUT,
    payload: workout
});