/**
 * Import
 */
import { DECREMENT_TIMER, decrementTimer } from 'src/store/reducers/timerReducer';

/**
* Code
*/

const timerMiddleware = store => next => (action) => {

  const { timerOff } = store.getState().timerReducer;

  switch (action.type) {
    case DECREMENT_TIMER:
      // setInterval(decrementTimer, 1000);
      next(action);
      break;
    default:
      next(action);
  }
};

export default timerMiddleware;
