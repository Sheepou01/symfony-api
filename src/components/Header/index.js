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
    <div id="header-logo">
      <Logo />
    </div>
    <div id="header-menu">
      <Settings />
    </div>
  </div>
);

/**
 * Export
 */
export default Header;
