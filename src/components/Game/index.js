/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import './style.scss';
import Snake from './Snake';
import Footer from 'src/components/Footer';
/**
 * Code
 */
const Game = () => (
  <div id="canvas">
    <Snake />
  </div>
);


/**
 * Export
 */
export default Game;
