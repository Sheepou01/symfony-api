/**
 * Initial State
 */
const initialState = {
  menuOppenned: false,
};

/**
 * Types
 */
const MENU_OPPENNED = 'MENU_OPPENNED';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MENU_OPPENNED:
      // Action qui gère l'ouverture et fermeture du menu
      return {
        ...state,
        menuOppenned: !state.menuOppenned,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const menuDisplay = () => ({
  type: MENU_OPPENNED,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
