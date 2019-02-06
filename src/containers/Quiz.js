/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/**
 * Local import
 */
import Quiz from 'src/components/Quiz';
// Action Creators
import { score, quizSubmitted } from 'src/store/reducers/quizReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  quiz: state.quizReducer.quiz,
  loading: state.quizReducer.loading,

  formSubmitted: state.quizReducer.formSubmitted,
  score: state.quizReducer.score,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  scoreIncrement: () => {
    dispatch(score());
  },
  quizSubmitted: () => {
    dispatch(quizSubmitted());
  },
  clickAnswer: () => {
    dispatch(clickAnswer());
  },

});
// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

/**
 * Export
 */
export default withRouter(QuizContainer);
