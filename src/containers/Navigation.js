/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Navigation from 'src/components/Navigation';

// Action Creators

import { startTimer } from 'src/store/reducers/timerReducer';
import { quiz } from 'src/store/reducers/quizReducer';



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
  timerOff: state.timerReducer.timerOff,
  gameOver: state.timerReducer.gameOver,
});

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
  quiz: () => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(quiz());
  },
  

});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);


/**
 * Export
 */
export default withRouter(NavigationContainer);
