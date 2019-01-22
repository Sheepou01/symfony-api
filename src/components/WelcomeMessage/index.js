/**
 * Npm import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */
const WelcomeMessage = () => (
  <div id="welcomeMessage">
    <p>Bonjour Jérémie ! Tu viens perdre 5 min ? <Icon name='time'/></p>
  </div>
);

/**
 * Export
 */
export default WelcomeMessage;
