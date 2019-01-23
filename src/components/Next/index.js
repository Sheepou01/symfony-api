/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */
const Next = () => (
  <div id="next">
    <Button>
      Next
      <Icon name="chevron right" size="huge" />
    </Button>
  </div>
);

/**
 * Export
 */
export default Next;
