/**
 * Import
 */
import axios from 'axios';
import { TOPITO, receivedTopito } from 'src/store/reducers/anecdotesReducer';

/**
* Code
*/
const urlWiki = 'https://guillaume-marques.fr/api/wiki';

const anecdotesMiddleware = store => next => (action) => {
  switch (action.type) {
    case TOPITO:
      axios.get(urlWiki)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(receivedTopito(response.data));
          // console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};


export default anecdotesMiddleware;
