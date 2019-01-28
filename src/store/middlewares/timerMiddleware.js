/**
 * Import
 */
import { START_TIMER, END_TIMER, tick } from 'src/store/reducers/timerReducer';

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
      if (seconds === 0) {
        console.log('coucou');
      }
      next(action);
      break;
    case END_TIMER:
      clearInterval(timer);      
      next(action);
      break;
    default:
      next(action);
  }
};

export default timerMiddleware;
