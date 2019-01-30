/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import loginMiddleware from './middlewares/loginMiddleware';
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
  loginMiddleware,
  timerMiddleware,
  anecdotesMiddleware,
  quizMiddleware,
);

// onglet redux dans le navigateur
const devTools = [
  window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f,
];

// compose des middlewares et devtools
const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
