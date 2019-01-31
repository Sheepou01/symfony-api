/**
 * Initial State
 */
const initialState = {
  quiz: {},
  loading: true,
};

/**
   * Types
   */
export const QUIZ = 'QUIZ';
export const RECEIVED_QUIZ = 'RECEIVED_QUIZ';
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
