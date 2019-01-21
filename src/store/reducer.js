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
const NEW_USER_SUBMIT = 'NEW_USER_SUBMIT';
const CONNECT_USER_SUBMIT = 'CONNECT_USER_SUBMIT';

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
    case NEW_USER_SUBMIT:
      return {
        ...state,
        newUser: [
          {
            name: action.name,
            password: action.password,
          },
        ],
        inputEmail: '',
        inputPassword: '',
      };
    case CONNECT_USER_SUBMIT:
      return {
        ...state,
        connectUser: [
          {
            name: action.name,
            password: action.password,
          },
        ],
        inputUserEmail: '',
        inputUserPassword: '',
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

export const submitNewUser = (name, password) => ({
  type: NEW_USER_SUBMIT,
  name,
  password,
});

export const connectUser = (name, password) => ({
  type: CONNECT_USER_SUBMIT,
  name,
  password,
});


/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
