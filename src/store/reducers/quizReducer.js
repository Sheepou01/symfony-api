/**
 * Initial State
 */
const initialState = {
  
  //activeTopito: 11,
  };
  
  /**
   * Types
   */
  export const QUIZ = 'QUIZ';
  
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

      default:
        return state;
    }
  };
  
  /**
   * Action Creators
   */
  // j'envoi mes props à mon container
  export const topito = () => ({
    type: QUIZ,
  });
  /**
   * Selectors
   */
  
  /**
   * Export
   */
  export default reducer;
  