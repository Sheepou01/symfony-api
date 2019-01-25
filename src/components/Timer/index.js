/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */


class TimerApp extends React.Component {

  // Le timer se met en route dès le render effectué
  componentDidMount() {
    const { decrementTimer } = this.props;
    this.incrementer = setInterval(decrementTimer, 1000);
  }

  // Test

  // shouldComponentUpdate() {
  //   const { seconds } = this.props;
  //   if (seconds === 0) {
  //     clearInterval(this.incrementer);
  //   }
  // }

  // SI on actionner le timer à un moment donné précis (par ex: un clic)

  // handleStartClick = () => {
  //   const { decrementTimer } = this.props;
  //   this.incrementer = setInterval(decrementTimer, 1000);
  // }

  // EN cliquant sur le timer, on stop le décompte
  handleStopClick = () => {
    clearInterval(this.incrementer);
  }

  getSeconds = () => {
    const { seconds } = this.props;
    return (`0${seconds % 60}`).slice(-2);
  }

  getMinutes = () => {
    const { seconds } = this.props;
    return Math.floor(seconds / 60);
  }

  render() {
    return (
      <div className="timer">
        <h1 onClick={this.handleStopClick}>{this.getMinutes()}:{this.getSeconds()}</h1>
        <div>
          {/* <button type="button" onClick={this.handleStartClick}>Start</button> */}
          {/* <button type="button" onClick={this.handleStopClick}>Stop</button> */}
        </div>
      </div>
    );
  }
}

TimerApp.propTypes = {
  decrementTimer: PropTypes.func.isRequired,
  seconds: PropTypes.number.isRequired,
};


/**
 * Export
 */
export default TimerApp;
