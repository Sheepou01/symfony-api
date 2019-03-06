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
  // Fonction qui sert à m'afficher les secondes et de couper le chiffre 0 après la dixaine
  const getSeconds = () => (`0${seconds % 60}`).slice(-2);

  // Fonction qui sert à m'afficher les minutes en fonction du nombre de secondes
  const getMinutes = () => Math.floor(seconds / 60);

  return (
    <div id="timer">
      <div id="timer-digits">{getMinutes()}:{getSeconds()}</div>
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
