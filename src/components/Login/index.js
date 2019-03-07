/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


/**
 * Local import
 */
import Field from './Field';
import './style.scss';
// import Facebook from './Facebook';

/**
 * Code
 */
class Login extends React.Component {
  // Function which will lsten the event on the onChange of each input and send
  // To my container the name of the input which is modified
  handleInputChange = (event) => {
    const { handleInput } = this.props;
    const { name, value } = event.target;
    handleInput(name, value);
  };

  // Function which allow the get the pseudo, email and password when the signup form is submitted
  handleSubmitInscription = (event) => {
    event.preventDefault();
    const {
      inputPseudo,
      inputEmail,
      inputPassword,
      signUpUser,
      inputPasswordConfirmation,
      actionIncorrectPassword,
      actionShortPassword,
    } = this.props;
    if (inputPassword !== inputPasswordConfirmation) {
      actionIncorrectPassword();
    }
    else if (inputPassword.length < 8) {
      actionShortPassword();
    }
    else {
      signUpUser(inputPseudo, inputEmail, inputPassword);
    }
  };

  // Function which allow the get the email and password when the signin form is submitted
  handleSubmitConnexion = (event) => {
    event.preventDefault();
    const { inputUserEmail, inputUserPassword, signInUser } = this.props;
    signInUser(inputUserEmail, inputUserPassword);
  };

  render() {
    const {
      inputUserEmail,
      inputUserPassword,
      inputPseudo,
      inputEmail,
      inputPassword,
      isAuthenticated,
      inputPasswordConfirmation,
      alertMessagePasswordIncorrect,
      alertMessageShortPassword,
      alertMessagewrongSignin,
      isSignedUp,
    } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/mon-profil" />;
    }

    return (
      <div id="login">
        <div id="login-signup">
          <h2>Inscription</h2>
          {alertMessagePasswordIncorrect ? (
            <div className="alert-message">Votre mot de passe n'est pas identique</div>
          )
            : ''
          }
          {alertMessageShortPassword ? (
            <div className="alert-message">Votre mot de passe est trop court</div>
          )
            : ''
          }
          {/* First Form: Signup */}
          {/* I send the props that I need to my component Field (input) */}
          {isSignedUp ? (
            <div className="alert-message">Tu es bien enregistré! Tu peux te connecter maintenant...</div>
          )
            : (
              <form onSubmit={this.handleSubmitInscription}>
                <Field
                  handleInputChange={this.handleInputChange}
                  value={inputPseudo}
                  name="inputPseudo"
                  type="text"
                  placeholder="Votre Pseudo"
                />
                <Field
                  handleInputChange={this.handleInputChange}
                  value={inputEmail}
                  name="inputEmail"
                  type="email"
                  placeholder="Votre Email"
                />
                <Field
                  handleInputChange={this.handleInputChange}
                  value={inputPassword}
                  name="inputPassword"
                  type="password"
                  placeholder="Mot de Passe de 8 caractères minimum"
                />
                <Field
                  handleInputChange={this.handleInputChange}
                  value={inputPasswordConfirmation}
                  name="inputPasswordConfirmation"
                  type="password"
                  placeholder="Confirmez votre Mot de Passe"
                />
                <Button className="login-button">Envoyer</Button>
              </form>
            )
          }
        </div>
        <div id="login-signin">
          <h2>Déjà Inscrit?</h2>
          {alertMessagewrongSignin ? (
            <div className="alert-message">Votre identifiant et/ou mot de passe est incorrect</div>
          )
            : ''
          }
          {/* <Facebook facebook={facebook} /> */}
          {/* second Form: Signin */}
          {/* I send the props that I need to my component Field (input)  */}
          <form method="POST" action="" onSubmit={this.handleSubmitConnexion}>
            <Field
              handleInputChange={this.handleInputChange}
              value={inputUserEmail}
              name="inputUserEmail"
              type="email"
              placeholder="Votre Email"
            />
            <Field
              handleInputChange={this.handleInputChange}
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
  }
}

// PropTypes des props de Login
Login.propTypes = {
  inputPseudo: PropTypes.string.isRequired,
  inputEmail: PropTypes.string.isRequired,
  inputPassword: PropTypes.string.isRequired,
  inputPasswordConfirmation: PropTypes.string.isRequired,
  inputUserEmail: PropTypes.string.isRequired,
  inputUserPassword: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
  alertMessagePasswordIncorrect: PropTypes.bool.isRequired,
  alertMessagewrongSignin: PropTypes.bool.isRequired,
  alertMessageShortPassword: PropTypes.bool.isRequired,
  actionIncorrectPassword: PropTypes.func.isRequired,
  actionShortPassword: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default withRouter(Login);
