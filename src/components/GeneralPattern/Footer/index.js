/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';

/**
 * Code
 */
const Footer = () => (
  <div id="footer">
    <NavLink to="/mentions-légales" id="footer-legal-mentions">Mentions-légales</NavLink>
    <div id="footer-follow">Suivez-nous:</div>
    <div id="footer-social-networks">
      <NavLink to="/aide" id="footer-facebook">
        <Icon name="facebook" size="big" />
      </NavLink>
      <NavLink to="/aide" id="footer-twitter">
        <Icon name="twitter" size="big" />
      </NavLink>
      <NavLink to="/aide" id="footer-instagram">
        <Icon name="instagram" size="big" />
      </NavLink>
    </div>
    <div id="footer-joke">On a rien de tout ça, mais ça fait classe</div>
    <NavLink to="/aide" id="footer-help">
      <Icon name="help circle" size="big" />
    </NavLink>
  </div>
);

/**
 * Export
 */
export default Footer;
