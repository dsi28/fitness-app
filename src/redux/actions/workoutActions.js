import * as ActionTypes from "../ActionTypes";

//using dispatch calls addWorkouts()
export const getWorkouts = () => (dispatch) => {
  return fetch(baseUrl + "workout")
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
    .then((workouts) => {
      console.log(`workouts: ${workouts}`);
      dispatch(addWorkouts(workouts));
    })
    .catch((error) => console.log(error.message));
};

//sends workouts to reducer so state can be updated
export const addWorkouts = (workouts) => ({
  type: ActionTypes.ADD_WORKOUTS,
  payload: workouts,
});

//using dispatch calls addWorkout()
export const createWorkout = (workout) => (dispatch) => {
  return fetch(baseUrl + "workout", {
    method: "POST",
    body: JSON.stringify(workout),
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
    .then((response) => dispatch(addWorkout(response)))
    .catch((error) => {
      console.log("post workout", error.message);
      alert("Your workout could not be posted\nError: " + error.message);
    });
};

//send workout to be added to state to the reducer
export const addWorkout = (workout) => ({
  type: ActionTypes.ADD_WORKOUT,
  payload: workout,
});
