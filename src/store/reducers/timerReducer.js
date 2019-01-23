/**
 * Initial State
 */
const initialState = {
  seconds: '00',
  minutes: '01',
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action qui permet de mettre dans le state les données qui arrivent de chaque input
    case CHANGE_INPUT:
      return {
        ...state,
        seconds: action.value,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
