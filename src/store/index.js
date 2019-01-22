/*
 * Npm import
 */
import { createStore } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from './reducers/index';

/*
 * Code
 */
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];


// createStore
const store = createStore(reducer, ...devTools);

/*
 * Export
 */
export default store;
