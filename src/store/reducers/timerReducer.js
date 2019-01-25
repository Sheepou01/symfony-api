/**
 * Initial State
 */
const initialState = {
  seconds: '100',
  minutes: '05',
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
const DECREMENT_TIMER = 'DECREMENT_TIMER';

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
    case DECREMENT_TIMER:
      return {
        seconds: state.seconds + 1,
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

export const decrementTimer = () => ({
  type: DECREMENT_TIMER,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
