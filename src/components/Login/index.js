/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */
import Field from './Field';
import './style.scss';

/**
 * Code
 */
const Login = ({ handleInput, inputEmail, inputPassword, inputUserEmail, inputUserPassword }) => { 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(name, value);
  };

  return (
    <div id="login-view">
      <div>
        <h2>Inscription</h2>
        <form method="POST" action="">
          <Field
            handleInputChange={handleInputChange}
            value={inputEmail}
            name="inputEmail"
            type="text"
            placeholder="Votre Email"
          />
          <Field
            handleInputChange={handleInputChange}
            value={inputPassword}
            name="inputPassword"
            type="password"
            placeholder="Mot de Passe"
          />
        </form>
      </div>
      <div>
        <h2>Déjà Inscrit?</h2>
        <form method="POST" action="">
          <Field
            handleInputChange={handleInputChange}
            value={inputUserEmail}
            name="inputUserEmail"
            type="text"
            placeholder="Votre Email"
          />
          <Field
            handleInputChange={handleInputChange}
            value={inputUserPassword}
            name="inputUserPassword"
            type="password"
            placeholder="Mot de Passe"
          />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  inputEmail: PropTypes.string.isRequired,
  inputPassword: PropTypes.string.isRequired,
  inputUserEmail: PropTypes.string.isRequired,
  inputUserPassword: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Login;
