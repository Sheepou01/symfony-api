/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changeInput, signUpUser, signInUser, actionIncorrectPassword, actionShortPassword } from 'src/store/reducers/userReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon userReducer
  user: state.userReducer.user,
  inputPseudo: state.userReducer.inputPseudo,
  inputEmail: state.userReducer.inputEmail,
  inputPassword: state.userReducer.inputPassword,
  inputPasswordConfirmation: state.userReducer.inputPasswordConfirmation,
  inputUserEmail: state.userReducer.inputUserEmail,
  inputUserPassword: state.userReducer.inputUserPassword,
  isAuthenticated: state.userReducer.isAuthenticated,
  isSignedUp: state.userReducer.isSignedUp,
  alertMessagePasswordIncorrect: state.userReducer.passwordIncorrect,
  alertMessageShortPassword: state.userReducer.shortPassword,
  alertMessagewrongSignin: state.userReducer.wrongSigninMessage,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  handleInput: (name, value) => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(changeInput(name, value));
  },
  signUpUser: (pseudo, email, password) => {
    // dispatch de mon action creator qui gère la soumission du form d'inscription
    dispatch(signUpUser(pseudo, email, password));
  },
  signInUser: (email, password) => {
    // dispatch de mon action creator qui gère la soumission du form de connexion
    dispatch(signInUser(email, password));
  },
  actionIncorrectPassword: () => {
    // dispatch de mon action creator qui gère la soumission du form de connexion
    dispatch(actionIncorrectPassword());
  },
  actionShortPassword: () => {
    // dispatch de mon action creator qui gère la soumission du form de connexion
    dispatch(actionShortPassword());
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


/**
 * Export
 */
export default LoginContainer;
