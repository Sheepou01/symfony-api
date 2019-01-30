/**
 * Npm import
 */
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Local import
 */

import './style.scss';


/**
 * Code
 */

class Test extends React.Component {
  render() {
    return React.createElement('canvas', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Test, {toWhat: 'World'}, null),
  document.getElementById('root')
);

/**
 * Export
 */
export default Test;
