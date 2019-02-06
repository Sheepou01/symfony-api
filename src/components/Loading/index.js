import React from 'react';
// import PropTypes from 'prop-types';

import { Loader } from 'semantic-ui-react';
import './style.scss';

const Loading = () => (
  <div id="loading">
    <Loader active inline="centered" />
  </div>
);


export default Loading;
