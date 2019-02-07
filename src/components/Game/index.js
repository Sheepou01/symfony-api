/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

import './style.scss';
// import Bomber from './Bomber';
import Snake from './Snake';

/**
 * Code
 */

class Game extends React.Component {
  componentDidMount() {
    const { startTimer } = this.props;
    startTimer();
  }

  render() {
    return (
      <div id="snake">
      <h1 className="h1-game">Demarre le jeu en appuyant sur F5 !</h1>
        <Snake />
      </div>
    );
  }
}

Game.propTypes = {
  startTimer: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Game;
