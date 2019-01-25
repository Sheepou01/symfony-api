/**
 * Import
 */
import axios from 'axios';
import { TOPITO,RECEIVED_TOPITO, receivedTopito } from 'src/store/reducers/anecdotesReducer.js';

/**
* Code
*/
const urlWiki = 'http://92.243.9.56/api/wiki';

const anecdotesMiddleware = store => next => (action) => {
  switch (action.type) {
    case TOPITO:
      axios.get(urlWiki)
         .then(function (response) {
           // handle success
          console.log(response.data);
          store.dispatch(receivedTopito(response.data));
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
      break;
    default:
      next(action);
  }
};


export default anecdotesMiddleware;
