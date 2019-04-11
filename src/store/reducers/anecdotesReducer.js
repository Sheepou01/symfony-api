/**
 * Initial State
 */
const initialState = {
  topitosList: [],

// activeTopito: 11,
};

/**
 * Types
 */
export const TOPITO = 'TOPITO';
export const RECEIVED_TOPITO = 'RECEIVED_TOPITO';
export const RANDOM_TOPITO = 'RANDOM_TOPITO';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOPITO:
      return {
        ...state,
      };

    case RECEIVED_TOPITO:
      const topitoList = [...action.topito];
      // tableau d'index
      // console.log(topitoList);
      // const index = topitoList.map(item => item.id);
      const index = Object.keys(topitoList);
      // console.log(index);
      // Fonction random //
      // je recupere le tableau d'id
      // const index = arrayTopito;
      // console.log (index);
      // Je recupere le min et le max
      const min = Math.min(...index);
      const max = (Math.max(...index));
      // Je  creer ma fonction random qui me rendra un entier
      const random = Math.floor(Math.random() * (+max - +min)) + +min;
      // console.log(random);
      return {
        ...state,
        // je récupere les nouveaus topitos, et je l'ajoute à l'existant
        topitosList: topitoList,
        activeTopito: random,
        // topitosName: topitoList[1].name,
      };
    case RANDOM_TOPITO:
      // Randomisation de l'id
      // tableau d'index
      const topitoListRandom = [...action.topitoRand];
      // console.log(topitoListRandom);
      // Fonction random //
      // je recupere le tableau d'id via les keys
      const test = Object.keys(topitoListRandom);
      // Je recupere le min et le max
      const mini = Math.min(...test);
      const maxi = (Math.max(...test));
      // Je  creer ma fonction random qui me rendra un entier
      const randomi = Math.floor(Math.random() * (+maxi - +mini)) + +mini;
      // console.log(randomi);
      return {
        ...state,
        activeTopito: randomi,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
// j'envoi mes props à mon container
export const topito = () => ({
  type: TOPITO,
});

export const receivedTopito = topito => ({
  type: RECEIVED_TOPITO,
  topito,
});

export const randomTopito = topitoArray => ({
  type: RANDOM_TOPITO,
  topitoRand: topitoArray,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
