/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';


/**
 * Local import
 */
import Field from './Field';
import './style.scss';

/**
 * Code
 */
const Login = ({
  handleInput,
  inputPseudo,
  inputEmail,
  inputPassword,
  inputUserEmail,
  inputUserPassword,
  addUser,
  connectUser,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(name, value);
  };

  const handleSubmitInscription = (event) => {
    event.preventDefault();
    addUser(inputPseudo, inputEmail, inputPassword);
  };

  const handleSubmitRegistration = (event) => {
    event.preventDefault();
    connectUser(inputUserEmail, inputUserPassword);
  };

  return (
    <div id="login-view">
      <div>
        <h2>Inscription</h2>
        <form method="POST" action="" onSubmit={handleSubmitInscription}>
          <Field
            handleInputChange={handleInputChange}
            value={inputPseudo}
            name="inputPseudo"
            type="text"
            placeholder="Votre Pseudo"
          />
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
          <Button>Envoyer</Button>
        </form>
      </div>
      <div>
        <h2>Déjà Inscrit?</h2>
        <form method="POST" action="" onSubmit={handleSubmitRegistration}>
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
          <Button>Envoyer</Button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  inputPseudo: PropTypes.string.isRequired,
  inputEmail: PropTypes.string.isRequired,
  inputPassword: PropTypes.string.isRequired,
  inputUserEmail: PropTypes.string.isRequired,
  inputUserPassword: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Login;
