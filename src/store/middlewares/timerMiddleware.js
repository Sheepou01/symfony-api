/**
 * Import
 */
import { START_TIMER, TICK, tick } from 'src/store/reducers/timerReducer';

/**
* Code
*/
let timer = null;

const timerMiddleware = store => next => (action) => {

  const { seconds } = store.getState().timerReducer;

  switch (action.type) {
    case START_TIMER:
      clearInterval(timer);
      timer = setInterval(() => store.dispatch(tick()), 1000);
      next(action);
      break;
    case TICK:
      if (seconds === 0) {
        clearInterval(timer);
      }
      next(action);
      break;
    default:
      next(action);
  }
};

export default timerMiddleware;
