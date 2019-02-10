/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/**
 * Local import
 */
import UserProfile from 'src/components/UserProfile';
import { userFavTheme, changeInput, editUser } from 'src/store/reducers/userReducer';
import { editTimer, handleInputTimer } from 'src/store/reducers/timerReducer';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  themes: state.userReducer.themes,
  idFavoriteTheme: state.userReducer.idFavoriteTheme,
  isAuthenticated: state.userReducer.isAuthenticated,
  username: state.userReducer.user.username,
  userRole: state.userReducer.user.roles,
  quizzScore: state.userReducer.user.quizzScore,
  editInputPseudo: state.userReducer.editInputPseudo,
  editInputEmail: state.userReducer.editInputEmail,
  editInputPassword: state.userReducer.editInputPassword,
  editInputTimer: state.timerReducer.editInputTimer,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  userFavTheme: (themeId) => {
    dispatch(userFavTheme(themeId));
  },
  handleInput: (name, value) => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(changeInput(name, value));
  },
  handleInputTimer: (name, value) => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(handleInputTimer(name, value));
  },
  editUser: (pseudo, email, password) => {
    // dispatch de mon action creator qui gère la soumission du form d'inscription
    dispatch(editUser(pseudo, email, password));
  },
  editTimer: (time) => {
    // dispatch de mon action creator qui gère la soumission du form d'inscription
    dispatch(editTimer(time));
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);


/**
 * Export
 */
export default withRouter(UserProfileContainer);
