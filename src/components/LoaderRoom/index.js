/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quiz from 'src/containers/Quiz';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */
// Bouton Next pour passer sur un autre quiz

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
