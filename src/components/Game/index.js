/**
 * Npm import
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */

import './style.scss';
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
