/**
 * Npm import
 */
import React from 'react';
import { Input } from 'semantic-ui-react';


/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */

const Field = () => (
  <div className="field">
    <Input
      className="field-input"
      placeholder="Email"
    />
    <Input
      className="field-input"
      placeholder="Password"
    />
  </div>
);

/**
 * Export
 */
export default Field;
