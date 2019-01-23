import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import timerReducer from './timerReducer';

export default combineReducers({
  loginReducer,
  timerReducer,
});
