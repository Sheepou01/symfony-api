/**
 * Import
 */
import axios from 'axios';
import { TOPITO, receivedTopito } from 'src/store/reducers/anecdotesReducer';

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
        //console.log(response);
        store.dispatch(receivedTopito(response.data));
         //store.dispatch(randomTopito(response.data));
        })
        .catch(function (error) {
        // handle error
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};


export default anecdotesMiddleware;
