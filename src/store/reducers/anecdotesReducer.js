/**
 * Initial State
 */
const initialState = {
topitosList: [],
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
        // je récupere les nouveaus topitos, et je l'ajoute à l'existant
        topitosList: [...action.items]
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
  type: TOPITO,
});

export const receivedTopito = items => ({
  type: RECEIVED_TOPITO,
  items,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
