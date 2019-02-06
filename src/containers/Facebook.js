/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Facebook from 'src/components/Login/Facebook';

// Action Creators

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
  inputUserEmail: state.userReducer.inputUserEmail,
  inputUserPassword: state.userReducer.inputUserPassword,
  isAuthenticated: state.userReducer.isAuthenticated,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Facebook);


/**
 * Export
 */
export default LoginContainer;
