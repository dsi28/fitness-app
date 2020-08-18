import * as ActionTypes from '../ActionTypes';


//TODO get exercise cards from db
//via dispatch call the addexercisecards()
export const getExerciseCards = () => (dispatch) => {

}

//sends exercise cards to the reducer to update state
export const addExerciseCards = (exerciseCards) => ({
    type: ActionTypes.ADD_EXTERCISECARDS,
    payload: exerciseCards
});

// TODO add exerciseCardID card to db 
// call addExterciseCard() via dispatch
export const createExerciseCard = (exerciseCard) => (dispatch) => {

}

//sends new exercisecard to reducer so state can be updated
export const addExerciseCard = (exerciseCard) => ({
    type: ActionTypes.ADD_EXTERCISECARD,
    payload: exerciseCard
});
