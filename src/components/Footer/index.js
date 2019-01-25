/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Help from './Help';
import Timer from 'src/containers/Timer';

import './style.scss';

/**
 * Code
 */
const Footer = () => (
  <div id="footer">
    <Timer />
    <Help />
  </div>
);

/**
 * Export
 */
export default Footer;
