/**
 * Initial State
 */
const initialState = {
topitosList: [],
//activeTopito: 11,
};

/**
 * Types
 */
export const TOPITO = 'TOPITO';
export const RECEIVED_TOPITO = 'RECEIVED_TOPITO';

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
    
    //console.log(arrayTopito);
    const arrayTopito= topitoList.map(item => item.id);
    // Fonction random//
    
    // je recupere le tableau d'id
    const index = arrayTopito;
    //console.log (index);
    // Je recupere le min et le max
    const min=Math.min(...index); 
    const max=Math.max(...index)-1;  
    // Je  creer ma fonction random qui me rendra un entier
    const random = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(random);  

      return {
        ...state,
        // je récupere les nouveaus topitos, et je l'ajoute à l'existant
        topitosList: topitoList,
        activeTopito: random,
        //topitosName: topitoList[1].name,  
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
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
