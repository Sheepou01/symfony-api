/**
 * Initial State
 */
const initialState = {
  seconds: 10,
  timerOff: true,
  gameOver: false,
};

/**
 * Types
 */
export const DECREMENT_TIMER = 'DECREMENT_TIMER';
export const END_TIMER = 'END_TIMER';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DECREMENT_TIMER:
      if (state.seconds === 0) {
        return {
          ...state,
          gameOver: true,
          timerOff: true,
        };
      }
      return {
        ...state,
        seconds: state.seconds - 1,
        timerOff: false,
      };
    case END_TIMER:
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
