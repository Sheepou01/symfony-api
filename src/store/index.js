/* eslint-disable no-underscore-dangle */
/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import userMiddleware from './middlewares/userMiddleware';
import timerMiddleware from './middlewares/timerMiddleware';
import anecdotesMiddleware from './middlewares/anecdotesMiddleware';
import quizMiddleware from './middlewares/quizMiddleware';


/*
 * Local import
 */
// Reducer
import reducer from './reducers/index';

/*
 * Code
 */


// ajout du/des middlewares
const appliedMiddlewares = applyMiddleware(
  userMiddleware,
  timerMiddleware,
  anecdotesMiddleware,
  quizMiddleware,
);

// onglet redux dans le navigateur
// const devTools = [
//   window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f,
// ];

let devTools = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = [window.__REDUX_DEVTOOLS_EXTENSION__()];
}

// compose des middlewares et devtools
const enhancers = compose(appliedMiddlewares, ...devTools);


// createStore
const store = createStore(reducer, enhancers);
/*
* Export
*/

export default store;
