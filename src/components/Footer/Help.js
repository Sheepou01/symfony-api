/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */
const Help = () => (
  <div id="help">
  
    <NavLink to="/aide">
    <Button>
      <Icon name="help" size="large" />
    </Button>
    </NavLink>
  
    <NavLink to="/mentions-légales">Mentions</NavLink>
  </div>
);

/**
 * Export
 */
export default Help;
