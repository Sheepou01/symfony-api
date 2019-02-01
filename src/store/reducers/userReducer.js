/**
 * Initial State
 */
const initialState = {
  themes: [
    { key: 1, text: 'Animaux', value: 1 },
    { key: 2, text: 'Cinema', value: 2 },
    { key: 3, text: 'Sport', value: 3 },
  ],
  idFavoriteTheme: undefined,
};

/**
 * Types
 */
const USER_FAV_THEME = 'USER';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // action qui ne fait rien pour le moment
    case USER_FAV_THEME:
      return {
        ...state,
        idFavoriteTheme: action.theme,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const userFavTheme = theme => ({
  type: USER_FAV_THEME,
  theme,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
