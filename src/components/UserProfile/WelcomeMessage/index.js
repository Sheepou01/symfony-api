/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import { Icon } from 'semantic-ui-react';
import './style.scss';
/**
 * Code
 */
const WelcomeMessage = ({ username }) => (
  <div id="welcomeMessage">
    <h3>Salut {username} ! <Icon name="hand peace outline" /></h3>
    <p>J'espère que tout va bien pour toi. Si tu veux jeter un oeil à ton profil tu es au bon endroit</p>
  </div>
);

WelcomeMessage.propTypes = {
  username: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default WelcomeMessage;
