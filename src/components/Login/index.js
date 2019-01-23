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

// Je passe mes props depuis le container Login
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
  // Fonction qui va me permettre d'écouter l'évenement sur le onChange de chaque input et transmettre
  // à mon conteneur le nom de l'input qui est modifié et sa valeur
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(name, value);
  };

  // Fonction qui me permet de récupérer le pseudo, l'email et le MDP
  // lors de la soumission du formulaire inscription
  const handleSubmitInscription = (event) => {
    event.preventDefault();
    addUser(inputPseudo, inputEmail, inputPassword);
  };

  // Fonction qui me permet de récupérer l'email et le MDP
  // lors de la soumission du formulaire de connexion
  const handleSubmitConnexion = (event) => {
    event.preventDefault();
    connectUser(inputUserEmail, inputUserPassword);
  };

  return (
    <div id="login-view">
      <div>
        <h2>Inscription</h2>
        {/* Premier Formulaire: Inscription */}
        {/* Je transmets les props nécessaires à mon composant Field (input) */}
        <form onSubmit={handleSubmitInscription}>
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
      <div Id="secondForm">
        <h2>Déjà Inscrit?</h2>
        {/* Premier Formulaire: Connexion */}
        {/* Je transmets les props nécessaires à mon composant Field (input) */}
        <form method="POST" action="" onSubmit={handleSubmitConnexion}>
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

// PropTypes des props de Login
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
