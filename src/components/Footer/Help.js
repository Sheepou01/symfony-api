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
const Help = () => (
  <div id="help">
        <Button icon>
            <Icon name='help' size='large' />
        </Button>
        <a href="" > Mentions légales </a>
  </div>
);

/**
 * Export
 */
export default Help;
