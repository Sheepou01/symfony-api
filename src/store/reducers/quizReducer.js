/**
 * Initial State
 */
const initialState = {
  quiz: {},
  loading: true,
<<<<<<< HEAD
  // valeur du bouton radio
  selectedOption: false,
=======

  formSubmitted: false,
  score: 0,

>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
};

/**
   * Types
   */
export const QUIZ = 'QUIZ';
export const RECEIVED_QUIZ = 'RECEIVED_QUIZ';

const SCORE = 'SCORE';
const QUIZ_SUBMITTED = 'QUIZ_SUBMITTED';

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
    // console.log(action.data)
      return {
        ...state,
        quiz: action.data,
        loading: false,
        selectedOption: false,
      };

    case SCORE:
    // console.log(action.data)
      return {
        ...state,
        score: state.score + 1,
      };
    case QUIZ_SUBMITTED:
    // console.log(action.data)
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

<<<<<<< HEAD
=======

export const score = () => ({
  type: SCORE,
});

export const quizSubmitted = () => ({
  type: QUIZ_SUBMITTED,
});


>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
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
