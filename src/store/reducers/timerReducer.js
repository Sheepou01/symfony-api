/**
 * Initial State
 */
const initialState = {
  seconds: 300,
  timerOff: true,
  gameOver: false,
};

/**
 * Types
 */
const DECREMENT_TIMER = 'DECREMENT_TIMER';

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
