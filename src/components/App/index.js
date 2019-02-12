/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Header from 'src/components/GeneralPattern/Header';
import DisplayApp from 'src/containers/DisplayApp';
import Ending from 'src/containers/Ending';
import Timer from 'src/containers/Timer';
import Footer from 'src/components/GeneralPattern/Footer';
import './app.scss';

/**
 * Code
 */
const App = ({ gameOver }) => (
  <div id="app">
    <Header />
    <Timer />
    {gameOver ? <Ending /> : <DisplayApp /> }
    <Footer />
  </div>
);

App.propTypes = {
  gameOver: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default App;
