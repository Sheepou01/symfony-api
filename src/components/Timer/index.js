/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */


class TimerApp extends React.Component {


  handleStartClick = () => {
    this.incrementer = setInterval(this.props.decrementTimer, 1000);
  }

  handleStopClick = () => {
    clearInterval(this.incrementer);
  }
  
  getSeconds = () => {
    return ('0' + this.props.seconds % 60).slice(-2);
  }

  getMinutes = () => {
    return Math.floor(this.props.seconds / 60);
  }

  render() {
    return (
      <div className="timer">
        <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
        <div>
          <button onClick={this.handleStartClick}>Start</button>
          <button onClick={this.handleStopClick}>Stop</button>
        </div>
      </div>
    )
  }
}


/**
 * Export
 */
export default TimerApp;
