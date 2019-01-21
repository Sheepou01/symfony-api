/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Field from './Field';
import './style.scss';

/**
 * Code
 */
const Login = () => (
  <div id="login-view">
    <div>
      <h2>Inscription</h2>
      <Field />
    </div>
    <div>
      <h2>Déjà Inscrit?</h2>
      <Field />
    </div>
  </div>
);


/**
 * Export
 */
export default Login;
