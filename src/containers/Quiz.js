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
import { score, quizSubmitted, sendingScore, quiz, setStateAnswer, newQuizDisplay } from 'src/store/reducers/quizReducer';
import { startTimer } from 'src/store/reducers/timerReducer';


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
  scoreState: state.quizReducer.score,
  isAuthenticated: state.userReducer.isAuthenticated,
  questionNb: state.quizReducer.questionNb,
  user_answers: state.quizReducer.user_answers,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  scoreIncrement: (newScore) => {
    dispatch(score(newScore));
  },
  quizSubmitted: () => {
    dispatch(quizSubmitted());
  },
  startTimer: () => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(startTimer());
  },
  sendingScore: () => {
    // dispatch de mon action creator qui gère les modifs des inputs
    dispatch(sendingScore());
  },
  nextQuiz: () => {
    dispatch(quiz());
  },
  newQuizDisplay: () => {
    dispatch(newQuizDisplay());
  },
  setStateAnswer: (response) => {
    dispatch(setStateAnswer(response));
  },

});
// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

/**
 * Export
 */
export default withRouter(QuizContainer);
