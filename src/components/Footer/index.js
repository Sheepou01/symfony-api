/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import FlipClock from './Timer';
import Help from './Help';
import './style.scss';
import './Timer.sass';
/**
 * Code
 */
const Footer = () => (
  <div id="footer">
    <FlipClock />
    <Help />
  </div>
);

/**
 * Export
 */
export default Footer;
