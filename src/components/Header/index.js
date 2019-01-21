/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Logo from './Logo';
import Settings from './Settings';
import './style.scss';
/**
 * Code
 */
const Header = () => (
  <div id="header">
    <Logo />
    <Settings />
  </div>
);

/**
 * Export
 */
export default Header;
