/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


/**
 * Local import
 */

/**
 * Code
 */
const Settings = () => (
  <div id="settings">
    <div className="settings-profile">
        <Button>Mon profil</Button>
    </div>
    <div className="settings-sign-out">
        <Button icon>
            <Icon name='sign-out' size='large' />
        </Button>
    </div>
  </div>
);

/**
 * Export
 */
export default Settings;
