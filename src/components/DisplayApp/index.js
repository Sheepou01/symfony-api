/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */

import Game from 'src/containers/Game';
import Anecdotes from 'src/containers/Anecdotes';
import Home from 'src/components/Home';
import Login from 'src/containers/Login';
import Quiz from 'src/containers/Quiz';
import Mentions from 'src/components/GeneralPattern/Mentions';
import Help from 'src/components/GeneralPattern/Help';
import NotFound from 'src/components/GeneralPattern/NotFound';
import UserProfile from 'src/containers/UserProfile';


import './style.scss';


/**
 * Code
 */
const DisplayApp = ({ isAuthenticated }) => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/anecdote" component={Anecdotes} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/jeu" component={Game} />
      <Route exact path="/mentions-légales" component={Mentions} />
      <Route exact path="/aide" component={Help} />
      <Route exact path="/connexion" component={Login} />
      {/* <Route exact path="/mon-profil" component={UserProfile} /> */}
      {/* If the user is nnot authenticated and wants to
      connect to the url /mon-profil, we redirect him to /connexion */}
      <Route exact path="/mon-profil" render={() => (isAuthenticated ? <UserProfile /> : <Redirect to="/connexion" />)} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

DisplayApp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default DisplayApp;
