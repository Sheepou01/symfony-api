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
    <div className="settings-profile">
      <NavLink
        className="ui button"
        to="/mon-profil"
        exact
      >
          Mon profil
      </NavLink>
    </div>
    <div className="settings-sign-out">
      <NavLink
        className="ui button"
        to="/"
      >
        <Icon name="sign-out" size="large" />
      </NavLink>
    </div>
  </div>
);

/**
 * Export
 */
export default Settings;
