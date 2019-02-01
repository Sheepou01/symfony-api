import isEmpty from 'lodash.isempty';
import setAuthorizationToken from '../setAuthorizationToken';

/**
 * Initial State
 */
const initialState = {
  inputPseudo: '',
  inputEmail: '',
  inputPassword: '',
  inputUserEmail: '',
  inputUserPassword: '',
  isAuthenticated: false,
  user: {},
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
export const NEW_USER_SUBMIT = 'NEW_USER_SUBMIT';
export const CONNECT_USER_SUBMIT = 'CONNECT_USER_SUBMIT';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

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
        [action.name]: action.value,
      };
    // Action qui permet de mettre dans le state les données qui arrivent du formulaire d'inscription
    case NEW_USER_SUBMIT:
      return {
        ...state,
        // Je créé un nouveau state newUser qui est un tableau avec un objet
        // avec le pseudo, nom et mot de passe
        newUser: [
          {
            pseudo: action.pseudo,
            email: action.email,
            password: action.password,
          },
        ],
        // Je remets les inputs à zéro
        inputPseudo: '',
        inputEmail: '',
        inputPassword: '',
      };
    // Action qui permet de mettre dans le state les données qui arrivent du formulaire de connexion
    case CONNECT_USER_SUBMIT:
      return {
        ...state,
        // Je créé un nouveau state connectUser qui est un tableau avec un objet
        // avec le nom et mot de passe
        connectUser: [
          {
            email: action.email,
            password: action.password,
          },
        ],
        // Je remets les inputs à zéro
        inputUserEmail: '',
        inputUserPassword: '',
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case LOGOUT:
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
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

// Je récupère le pseudo, email et mdp depuis le formulaire d'inscription
export const submitNewUser = (pseudo, email, password) => ({
  type: NEW_USER_SUBMIT,
  pseudo,
  email,
  password,
});

// Je récupère le pseudo, email et mdp depuis le formulaire de connexion
export const connectUser = (email, password) => ({
  type: CONNECT_USER_SUBMIT,
  email,
  password,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});


/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
