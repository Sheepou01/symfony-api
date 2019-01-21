/**
 * Npm import
 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

/**
 * Local import
 */

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import './app.scss';


/**
 * Code
 */
const App = () => (
<div id='app'>
  <Header />
  <Login />
  <Footer />
</div>
);

/**
 * Export
 */
export default App;
