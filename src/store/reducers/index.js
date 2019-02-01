import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import settingsReducer from './settingsReducer';
import anecdotesReducer from './anecdotesReducer';
import quizReducer from './quizReducer';
import userReducer from './userReducer';


export default combineReducers({
  loginReducer,
  timerReducer,
  settingsReducer,
  anecdotesReducer,
  quizReducer,
  userReducer,
});
