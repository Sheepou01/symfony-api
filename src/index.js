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
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './store/setAuthorizationToken';
import { setCurrentUser } from './store/reducers/loginReducer';
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
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);

store.dispatch(topito());
