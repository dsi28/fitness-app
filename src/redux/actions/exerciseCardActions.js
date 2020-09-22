import * as ActionTypes from "../ActionTypes";
//4th Steps

//TODO get exercise cards from db
//via dispatch call the addexercisecards()
export const getExerciseCards = () => (dispatch) => {
  return fetch(baseUrl + "exerciseCard")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((exerciseCards) => {
      console.log(`exerciseCards: ${exerciseCards}`);
      dispatch(addExerciseCards(exerciseCards));
    })
    .catch((error) => console.log(error.message));
};

//sends exercise cards to the reducer to update state
export const addExerciseCards = (exerciseCards) => ({
  type: ActionTypes.ADD_EXTERCISECARDS,
  payload: exerciseCards,
});

// TODO add exerciseCardID card to db
// call addExterciseCard() via dispatch
export const createExerciseCard = (exerciseCard) => (dispatch) => {
  return fetch(baseUrl + "exerciseCard", {
    method: "POST",
    body: JSON.stringify(exerciseCard),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addExerciseCard(response)))
    .catch((error) => {
      console.log("post ExerciseCard", error.message);
      alert("Your ExerciseCard could not be posted\nError: " + error.message);
    });
};

//sends new exercisecard to reducer so state can be updated
export const addExerciseCard = (exerciseCard) => ({
  type: ActionTypes.ADD_EXTERCISECARD,
  payload: exerciseCard,
});
