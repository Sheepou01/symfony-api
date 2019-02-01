/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changeInput, submitNewUser, connectUser, setCurrentUser } from 'src/store/reducers/loginReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon loginReducer
  inputPseudo: state.loginReducer.inputPseudo,
  inputEmail: state.loginReducer.inputEmail,
  inputPassword: state.loginReducer.inputPassword,
  inputUserEmail: state.loginReducer.inputUserEmail,
  inputUserPassword: state.loginReducer.inputUserPassword,
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
  addUser: (pseudo, email, password) => {
    // dispatch de mon action creator qui gère la soumission du form d'inscription
    dispatch(submitNewUser(pseudo, email, password));
  },
  connectUser: (email, password) => {
    // dispatch de mon action creator qui gère la soumission du form de connexion
    dispatch(connectUser(email, password));
  },
  setCurrentUser: (email, password) => {
    // dispatch de mon action creator qui gère la soumission du form de connexion
    dispatch(setCurrentUser());
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


/**
 * Export
 */
export default LoginContainer;
