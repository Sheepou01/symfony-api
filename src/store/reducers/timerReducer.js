/**
 * Initial State
 */
const initialState = {
  seconds: 300,
  timerOff: true,
  gameOver: false,
  editInputTimer: '',
};

/**
 * Types
 */
export const START_TIMER = 'START_TIMER';
export const TICK = 'TICK';
export const END_TIMER = 'END_TIMER';
const CLICK_END_VIEW = 'CLICK_END_VIEW';
const EDIT_TIMER = 'EDIT_TIMER';
const CHANGE_INPUT_TIMER = 'CHANGE_INPUT_TIMER';

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
      };
    case END_TIMER:
      if (state.seconds === 0) {
        return {
          ...state,
        };
      }
      break;
    case CLICK_END_VIEW:
      return {
        ...state,
        gameOver: false,
        timerOff: true,
        seconds: initialState.seconds,
      };
    case EDIT_TIMER:
      return {
        ...state,
        seconds: action.time,
        editInputTimer: '',
      };
    case CHANGE_INPUT_TIMER:
      return {
        ...state,
        [action.name]: action.value,
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
export const endTimer = () => ({
  type: END_TIMER,
});
export const tick = () => ({
  type: TICK,
});
export const clickEndView = () => ({
  type: CLICK_END_VIEW,
});
export const editTimer = time => ({
  type: EDIT_TIMER,
  time,
});
export const handleInputTimer = (name, value) => ({
  type: CHANGE_INPUT_TIMER,
  name,
  value,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
