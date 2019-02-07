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
// import CasseBrique from './CasseBrique';
// import Test from './Test';
// import Reacteroids from './Reacteroid/Reacteroids';

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
