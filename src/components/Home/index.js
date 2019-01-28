/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';


/**
 * Local import
 */

import WelcomeMessage from 'src/components/WelcomeMessage';
import Navigation from 'src/containers/Navigation';
import './style.scss';


/**
 * Code
 */
const Home = () => (
  <div id="app">
    <WelcomeMessage />
    <Navigation />
  </div>
);

/**
 * Export
 */
export default Home;
