/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ending from 'src/components/Ending';

// Action Creators
import { clickEndView } from 'src/store/reducers/timerReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon timerReducer
  gameOver: state.timerReducer.gameOver,
  seconds: state.timerReducer.seconds,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  clickEndView: () => {
    dispatch(clickEndView());
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const EndingContainer = connect(mapStateToProps, mapDispatchToProps)(Ending);


/**
 * Export
 */
export default EndingContainer;
