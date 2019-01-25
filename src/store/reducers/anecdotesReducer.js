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
    const topitoList = action.topito
    console.log(topitoList[1].name);
      return {
        ...state,
        // je récupere les nouveaus topitos, et je l'ajoute à l'existant
        topitosName: topitoList[1].name,
        topitosBody: topitoList[1].body,
        topitosDate: topitoList[1].created_at,
       
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
