import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  loginReducer,
  timerReducer,
  settingsReducer,
});
