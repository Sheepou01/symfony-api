/* eslint-disable no-underscore-dangle */
/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['timerReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

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
/*
* Export
*/

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
