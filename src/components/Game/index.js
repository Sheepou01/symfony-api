/**
 * Npm import
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/**
 * Local import
 */

import './style.scss';
import Bomber from './Bomber';
import Snake from './Snake';
// import Main from './gameLife';

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
