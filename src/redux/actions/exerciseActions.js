import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

//fourth

//TODO get all extercies from db
//via dispatch call the addExtercises() 
export const getExercises = () => (dispatch) => {
    return fetch(baseUrl + 'exercise')
    .then(response => {
            if(response.ok){
                return response;
            } else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }   
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(exercises => {
        console.log(`Exercises: ${exercises}`);
        dispatch(addExercises(exercises));
    })
    .catch(error => console.log(error.message));
}

//add the extercises to the state using the reducer
export const addExercises = (exercises) => ({
    type: ActionTypes.ADD_EXTERCISES,
    payload: exercises
});

//TODO add an extercise to the db
//via dispatch call the addExtercise() 
export const createExercise = (exercise) => (dispatch) => {
    
}

//add an exercise to the state using reducer
export const addExtercise = (exercise) => ({
    type: ActionTypes.ADD_EXTERCISE,
    payload: exercise
});

