/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */

import Game from 'src/components/Game';
import Anecdotes from 'src/containers/Anecdotes';
import Home from 'src/components/Home';
import Login from 'src/containers/Login';
import Quiz from 'src/components/Quiz';
import Mentions from 'src/components/GeneralPattern/Mentions';
import Help from 'src/components/GeneralPattern/Help';
import NotFound from 'src/components/GeneralPattern/NotFound';
import UserProfile from 'src/containers/UserProfile';
import './style.scss';


/**
 * Code
 */
const DisplayApp = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/connexion" component={Login} />
      <Route exact path="/anecdote" component={Anecdotes} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/jeu" component={Game} />
      <Route exact path="/mon-profil" component={UserProfile} />
      <Route exact path="/mentions-légales" component={Mentions} />
      <Route exact path="/aide" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default DisplayApp;
