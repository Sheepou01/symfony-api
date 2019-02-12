/**
 * Initial State
 */
const initialState = {
  quiz: {},
  questionNb: 0,
  loading: true,
  formSubmitted: false,
  answerClicked: false,
  score: 0,
  user_answers: {},
};

/**
   * Types
   */
export const QUIZ = 'QUIZ';
export const RECEIVED_QUIZ = 'RECEIVED_QUIZ';
const SCORE = 'SCORE';
const NEW_QUIZ_DISPLAY = 'NEW_QUIZ';
const QUIZ_SUBMITTED = 'QUIZ_SUBMITTED';
const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const SEND_SCORE = 'SEND_SCORE';

/**
* Traitements
*/

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case QUIZ:
      return {
        ...state,
        formSubmitted: false,
      };
    case NEW_QUIZ_DISPLAY:
      return {
        ...state,
        formSubmitted: false,
      };
    case RECEIVED_QUIZ:
      return {
        ...state,
        quiz: action.data,
        loading: false,
        selectedOption: false,
      };
    case SCORE:
      return {
        ...state,
        score: action.newScore,
      };
    case QUIZ_SUBMITTED:
      return {
        ...state,
        formSubmitted: true,
        user_answers: [],
      };
    case SEND_SCORE:
      return {
        ...state,
        formSubmitted: true,
      };
    case ADD_USER_ANSWER:
      // eslint-disable-next-line no-case-declarations
      const newAnswers = {
        ...state.user_answers,
        [action.value.questionId]: action.value.answer,
      };
      return {
        ...state,
        user_answers: { ...newAnswers },
      };
    default:
      return state;
  }
};

/**
   * Action Creators
   */
// j'envoi mes props à mon container
export const quiz = () => ({
  type: QUIZ,
});

export const newQuizDisplay = () => ({
  type: NEW_QUIZ_DISPLAY,
});


export const score = newScore => ({
  type: SCORE,
  newScore,
});

export const quizSubmitted = () => ({
  type: QUIZ_SUBMITTED,
});

export const sendingScore = () => ({
  type: SEND_SCORE,
});

export const receivedQuiz = data => ({
  type: RECEIVED_QUIZ,
  data,
});

export const setStateAnswer = (value) => ({
  type: ADD_USER_ANSWER,
  value,
});
  /**
   * Selectors
   */

/**
   * Export
   */
export default reducer;
