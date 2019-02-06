/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/**
 * Local import
 */
import Game from 'src/components/Game';
import { startTimer } from 'src/store/reducers/timerReducer';
// Action Creators


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = null;

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  startTimer: () => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(startTimer());
  },

});
// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

/**
 * Export
 */
export default GameContainer;
