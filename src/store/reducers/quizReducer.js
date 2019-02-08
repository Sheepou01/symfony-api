/**
 * Initial State
 */
const initialState = {
  quiz: {},
  loading: true,
  formSubmitted: false,
  answerClicked: false,
  score: 0,
};

/**
   * Types
   */
export const QUIZ = 'QUIZ';
export const RECEIVED_QUIZ = 'RECEIVED_QUIZ';
const SCORE = 'SCORE';
const QUIZ_SUBMITTED = 'QUIZ_SUBMITTED';
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
        score: state.score + 1,
      };
    case QUIZ_SUBMITTED:
      return {
        ...state,
        formSubmitted: true,
      };
    case SEND_SCORE:
      return {
        ...state,
        formSubmitted: true,
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


export const score = () => ({
  type: SCORE,
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
  /**
   * Selectors
   */

/**
   * Export
   */
export default reducer;
