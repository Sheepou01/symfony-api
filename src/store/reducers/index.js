import { combineReducers } from 'redux';
import userReducer from './userReducer';
import timerReducer from './timerReducer';
import settingsReducer from './settingsReducer';
import anecdotesReducer from './anecdotesReducer';
import quizReducer from './quizReducer';


export default combineReducers({
  userReducer,
  timerReducer,
  settingsReducer,
  anecdotesReducer,
  quizReducer,
});
