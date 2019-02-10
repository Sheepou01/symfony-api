import isEmpty from 'lodash.isempty';

/**
 * Initial State
 */
const initialState = {
  inputPseudo: '',
  inputEmail: '',
  inputPassword: '',
  inputPasswordConfirmation: '',
  inputUserEmail: '',
  inputUserPassword: '',
  editInputPseudo: '',
  editInputPassword: '',
  editInputEmail: '',
  isAuthenticated: false,
  isSignedUp: false,
  user: {},
  themes: [
    { key: 0, text: 'Tous', value: 0 },
    { key: 1, text: 'Histoire', value: 1 },
    { key: 2, text: 'Cuisine', value: 2 },
    { key: 3, text: 'Animaux', value: 3 },
    { key: 4, text: 'Amour/Sexe', value: 4 },
    { key: 5, text: 'Cinéma', value: 5 },
    { key: 6, text: 'Jeux Videos', value: 6 },
    { key: 7, text: 'Life', value: 7 },
    { key: 8, text: 'Musique', value: 8 },
    { key: 9, text: 'Sport', value: 9 },
    { key: 10, text: 'Voyage', value: 10 },
    { key: 11, text: 'Santé', value: 11 },
  ],
  idFavoriteTheme: undefined,
  passwordIncorrect: false,
  shortPassword: false,
  wrongSigninMessage: false,
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
const FACEBOOK = 'FACEBOOK';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const EDIT_USER = 'EDIT_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const USER_FAV_THEME = 'USER_FAV_THEME';
export const THEME_LIST = 'THEME_LIST';
export const LOAD_THEME = 'LOAD_THEME';
const INCORRECT_PASSWORD = 'INCORRECT_PASSWORD';
const SHORT_PASSWORD = 'SHORT_PASSWORD';
const WRONG_SIGNIN = 'WRONG_SIGNIN';

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
    case SIGNUP_USER:
      return {
        ...state,
        // Je créé un nouveau state newUser qui est un tableau avec un objet
        // avec le pseudo, nom et mot de passe
        user: [
          {
            pseudo: action.pseudo,
            email: action.email,
            password: action.password,
          },
        ],
        isSignedUp: true,
        // Je remets les inputs à zéro
        inputPseudo: '',
        inputEmail: '',
        inputPassword: '',
        inputPasswordConfirmation: '',
        passwordIncorrect: false,
        shortPassword: false,
      };
    // Action qui permet de mettre dans le state les données qui arrivent du formulaire de connexion
    case SIGNIN_USER:
      return {
        ...state,
        // Je remets les inputs à zéro
        inputUserEmail: '',
        inputUserPassword: '',
      };
    case EDIT_USER:
      return {
        ...state,
        // Je remets les inputs à zéro
        editInputPseudo: '',
        editInputPassword: '',
        editInputEmail: '',
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        // utilisation de la dépendance lodash.isempty
        // check si mon objet action.user n'est pas vide. si il ne l'est pas, ça passe à true
        // https://lodash.com/docs/4.17.11#isEmpty
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        isSignedUp: false,
      };
    case USER_FAV_THEME:
      return {
        ...state,
        idFavoriteTheme: action.themeId,
      };
    case THEME_LIST:
      return {
        ...state,
      };
    case LOAD_THEME:
      return {
        ...state,
      };
    case INCORRECT_PASSWORD:
      return {
        ...state,
        passwordIncorrect: true,
        shortPassword: false,
      };
    case SHORT_PASSWORD:
      return {
        ...state,
        shortPassword: true,
        passwordIncorrect: false,
      };
    case WRONG_SIGNIN:
      return {
        ...state,
        wrongSigninMessage: true,
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
export const signUpUser = (pseudo, email, password) => ({
  type: SIGNUP_USER,
  pseudo,
  email,
  password,
});

export const editUser = (pseudo, email, password) => ({
  type: EDIT_USER,
  pseudo,
  email,
  password,
});

// Je récupère le pseudo, email et mdp depuis le formulaire de connexion
export const signInUser = (email, password) => ({
  type: SIGNIN_USER,
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

export const userFavTheme = themeId => ({
  type: USER_FAV_THEME,
  themeId,
});

export const themeList = () => ({
  type: THEME_LIST,
});

export const loadTheme = listTheme => ({
  type: LOAD_THEME,
  listTheme,
});
export const facebook = username => ({
  type: FACEBOOK,
  username,
});

export const actionIncorrectPassword = () => ({
  type: INCORRECT_PASSWORD,
});

export const actionShortPassword = () => ({
  type: SHORT_PASSWORD,
});
export const actionWrongSignin = () => ({
  type: WRONG_SIGNIN,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
