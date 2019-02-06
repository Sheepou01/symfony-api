/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import './style.scss';
// import Bomber from './Bomber';
import Snake from './Snake';

/**
 * Code
 */
const Game = () => (
  <div id="snake">
    <h1 className="h1-game">Demarre le jeu en appuyant sur F5 !</h1>
    <Snake />
  </div>
);

/**
 * Export
 */
export default Game;
