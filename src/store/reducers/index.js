import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import anecdotesReducer from './anecdotesReducer';

export default combineReducers({
  loginReducer,
  timerReducer,
  anecdotesReducer,
});
