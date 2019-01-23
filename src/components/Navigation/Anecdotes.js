/**
 * Npm import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */

/**
 * Code
 */
const Anecdotes = () => (
  <NavLink className="bigButton" to="/quiz">
  Fun Fact <Icon name='idea'/>
  </NavLink>
);

/**
 * Export
 */
export default Anecdotes;
