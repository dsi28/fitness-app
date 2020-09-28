import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers/reducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

//first
//const initialState = {};
const middleware = [thunk, logger];
const configureStore = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

configureStore.subscribe(() => {
  saveState({
    user: configureStore.getState().user,
  });
});

export default configureStore;
