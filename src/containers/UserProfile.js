/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import UserProfile from 'src/components/UserProfile';
import { userFavTheme } from 'src/store/reducers/userReducer';

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
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  userFavTheme: (theme) => {
    dispatch(userFavTheme(theme));
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);


/**
 * Export
 */
export default UserProfileContainer;
