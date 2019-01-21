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
import './app.scss';


/**
 * Code
 */
const App = () => (
<div id='app'>
  <Header />
  <Footer />
</div>
);

/**
 * Export
 */
export default App;
