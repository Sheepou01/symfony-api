/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';



/**
 * Local import
 */

/**
 * Code
 */
const Settings = () => (
  <div id="settings">
    <NavLink
      to="/mon-profil"
      exact
    >
      <Icon name="bars" size="large" id="settings-menu" />
    </NavLink>
  </div>
);

/**
 * Export
 */
export default Settings;
