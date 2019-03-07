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

// Button Next to pass
const LoaderRoom = () => (
  <div id="LoaderRoom">
    <NavLink to="/quiz">
      <Button>
        Next
        <Icon name="chevron right" size="huge" />
      </Button>
    </NavLink>
  </div>
);


/**
 * Export
 */
export default LoaderRoom;
