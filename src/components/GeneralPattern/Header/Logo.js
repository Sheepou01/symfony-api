/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * Local import
 */
import logo from 'src/styles/assets/logo.png';

/**
 * Code
 */
const Logo = () => (
  <NavLink id="logo" to="/">
    <img src={logo} alt="" />
  </NavLink>
);

/**
 * Export
 */
export default Logo;
