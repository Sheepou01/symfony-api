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


const Timer = ({ seconds }) => {

  // SI on actionner le timer à un moment donné précis (par ex: un clic)

  // handleStartClick = () => {
  //   const { decrementTimer } = this.props;
  //   this.incrementer = setInterval(decrementTimer, 1000);
  // }

  // // EN cliquant sur le timer, on stop le décompte
  // handleStopClick = () => {
  //   clearInterval(this.incrementer);
  // }

  // Fonction qui sert à m'afficher les secondes et de couper le chiffre 0 après la dixaine
  const getSeconds = () => (`0${seconds % 60}`).slice(-2);

  // Fonction qui sert à m'afficher les minutes en fonction du nombre de secondes
  const getMinutes = () => Math.floor(seconds / 60);

  return (
    <div id="timer">
      <div id="timer-digits">{getMinutes()}:{getSeconds()}</div>
      <div>
        {/* <button type="button" onClick={this.handleStartClick}>Start</button>
        <button type="button" onClick={this.handleStopClick}>Stop</button> */}
      </div>
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};


/**
 * Export
 */
export default Timer;
