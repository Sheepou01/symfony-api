/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quiz from 'src/containers/Quiz';
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
    <Switch>
      <Button>
        Next
        <Icon name="chevron right" size="huge" />
      </Button>
    </Switch>
  </div>
);


/**
 * Export
 */
export default LoaderRoom;
