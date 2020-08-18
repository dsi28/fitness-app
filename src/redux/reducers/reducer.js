import { combineReducers } from 'redux';
import ExerciseReducer from './ExerciseReducer';
import ExerciseCardReducer from './ExerciseCardReducer';
import WorkoutReducer from './WorkoutReducer';
//second
export default combineReducers({
    exercises: ExerciseReducer,
    exerciseCards: ExerciseCardReducer,
    workouts: WorkoutReducer
});