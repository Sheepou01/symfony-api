/**
 * Initial State
 */
const initialState = {
  inputEmail: '',
  inputPassword: '',
  inputUserEmail: '',
  inputUserPassword: '',
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
    case CHANGE_INPUT:
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
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
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
