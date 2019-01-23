/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Login from 'src/containers/Login';
import './style.scss';


/**
 * Code
 */
const DisplayApp = () => (
  <div id="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/mon-profil" component={Login} />
    </Switch>
    <Footer />
  </div>
);

/**
 * Export
 */
export default DisplayApp;
