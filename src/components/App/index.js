/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

/**
 * Local import
 */

import Header from 'src/components/Header';
import WelcomeMessage from 'src/components/WelcomeMessage';
import Navigation from 'src/components/Navigation';
import Game from 'src/components/Game';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import Anecdote from 'src/components/Anecdotes';

import './app.scss';


/**
 * Code
 */
const App = () => (
<div id='app'>
  <Header />
  <Anecdote />
  <Footer />
  <Login />
</div>
);

/**
 * Export
 */
export default App;
