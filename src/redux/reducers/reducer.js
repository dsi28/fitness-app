import { combineReducers } from 'redux';
import ExerciseReducer from './ExerciseReducer';
import ExerciseCardReducer from './ExerciseCardReducer';
import WorkoutReducer from './WorkoutReducer';
import UserReducer from './UserReducer';
//second
export default combineReducers({
    exercises: ExerciseReducer,
    exerciseCards: ExerciseCardReducer,
    workouts: WorkoutReducer,
    user: UserReducer
});