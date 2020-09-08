/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/**
 * Local import
 */
import NextQuiz from 'src/components/Next/NextQuiz';

// Action Creators
import { quiz, sendingScore } from 'src/store/reducers/quizReducer';
import { startTimer } from 'src/store/reducers/timerReducer';


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
  quiz: () => {
    dispatch(quiz());
  },
});
// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const NextQuizContainer = connect(mapStateToProps, mapDispatchToProps)(NextQuiz);

/**
 * Export
 */
export default withRouter(NextQuizContainer);
