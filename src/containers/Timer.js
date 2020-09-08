/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Timer from 'src/components/Timer';

// Action Creators
import { startTimer } from 'src/store/reducers/timerReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon timerReducer
  seconds: state.timerReducer.seconds,
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
const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);


/**
 * Export
 */
export default TimerContainer;
