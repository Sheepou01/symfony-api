/**
 * Initial State
 */
const initialState = {
topito: [],
};

/**
 * Types
 */
export const TOPITO = 'TOPITO';
export const RECEIVED_TOPITO = 'RECEIVED_TOPITO';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOPITO:
      return {
        ...state,
      };
    case RECEIVED_TOPITO:
      return {
        ...state,
        topitos: [...action.topito],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
// j'envoi mes props à mon container
export const Topito = () => ({
  type: TOPITO,
});

export const receivedTopito = topito => ({
  type: RECEIVED_TOPITO,
  topito,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
