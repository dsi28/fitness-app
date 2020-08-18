import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
//first
const initialState = {};
const middleware = [thunk];
const configureStore = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);