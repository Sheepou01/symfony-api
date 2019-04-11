/**
 * Initial State
 */
const initialState = {
  launchGame: false,

};

/**
   * Types
   */
export const GAME = 'GAME';
export const GAMELAUNCH = 'GAMELAUNCH';

/**
* Traitements
*/

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME:
      return {
        ...state,
      };
    case GAMELAUNCH:
      return {
        ...state,
        launchGame: true,
      };

    default:
      return state;
  }
};

/**
   * Action Creators
   */
// j'envoi mes props à mon container
export const game = () => ({
  type: GAME,
});

export const gameLaunch = () => ({
  type: GAMELAUNCH,
});

/**
 * Selectors
 */

/**
   * Export
   */
export default reducer;
