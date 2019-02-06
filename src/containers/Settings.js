/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Settings from 'src/components/GeneralPattern/Header/Settings';

// Action Creators
import { menuDisplay } from 'src/store/reducers/settingsReducer';
import { logout } from 'src/store/reducers/userReducer';
import { clickEndView } from 'src/store/reducers/timerReducer';


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon settingsReducer
  menuOppenned: state.settingsReducer.menuOppenned,
  isAuthenticated: state.userReducer.isAuthenticated,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  menuDisplay: () => {
    // dispatch de mon action creator qui gère l'ouverture du menu dans le header
    dispatch(menuDisplay());
  },
  logout: () => {
    dispatch(logout());
  },
  clickEndView: () => {
    dispatch(clickEndView());
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);


/**
 * Export
 */
export default withRouter(SettingsContainer);
