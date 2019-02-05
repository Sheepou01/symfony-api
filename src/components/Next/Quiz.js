/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */
// Bouton Next pour passer sur un autre quiz

const NextQuiz = () => (
  <div id="next">
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
export default NextQuiz;
