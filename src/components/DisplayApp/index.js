/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */

// import Header from 'src/components/Header';


import Timer from 'src/containers/Timer';
import Game from 'src/components/Game';
import Anecdotes from 'src/containers/Anecdotes';
// import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Login from 'src/containers/Login';
import Quiz from 'src/components/Quiz';
import Mentions from 'src/components/Mentions';
import Help from 'src/components/Help';
import NotFound from 'src/components/NotFound';
import UserProfile from 'src/containers/UserProfile';
import './style.scss';


/**
 * Code
 */
const DisplayApp = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/connexion" component={Login} />
      <Route path="/anecdote" component={Anecdotes} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/jeu" component={Game} />
      <Route path="/mon-profil" component={UserProfile} />
      <Route path="/mentions-légales" component={Mentions} />
      <Route path="/aide" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default DisplayApp;
