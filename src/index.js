/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
/**
 * import : local
 */
import store from 'src/store';
import App from 'src/components/App';
import { topito } from 'src/store/reducers/anecdotesReducer';
import { quiz } from 'src/store/reducers/quizReducer';
/**
 * Render - Rendu d'un composant React dans le DOM
 */

const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);

store.dispatch(topito());
store.dispatch(quiz());
