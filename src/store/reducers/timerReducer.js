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
export const START_TIMER = 'START_TIMER';
export const TICK = 'TICK';
export const END_TIMER = 'END_TIMER';
const CLICK_END_VIEW = 'CLICK_END_VIEW';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        // seconds: state.seconds - 1,
        timerOff: false,
      };
    case TICK:
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
        // timerOff: false,
      };
    case END_TIMER:
      return {
        ...state,
      };
    case CLICK_END_VIEW:
      return {
        ...state,
        gameOver: false,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const startTimer = () => ({
  type: START_TIMER,
});
export const tick = () => ({
  type: TICK,
});
export const clickEndView = () => ({
  type: CLICK_END_VIEW,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
