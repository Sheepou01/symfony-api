/**
 * Import
 */
import axios from 'axios';
import { NEW_USER_SUBMIT, CONNECT_USER_SUBMIT } from 'src/store/reducers/loginReducer';

/**
* Code
*/
const urlSignUp = 'http://92.243.9.56/signup';
const urlWiki = 'http://92.243.9.56/wiki';

const loginMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case NEW_USER_SUBMIT:
      // Je veux faire une requête axios
      axios({
        method: 'post',
        url: urlSignUp,
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone',
        },
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log('Error on Authentication');
      });

      // axios.get(urlWiki)
      //   .then(function (response) {
      //     // handle success
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // always executed
      //   });
      next(action);
      break;
    case CONNECT_USER_SUBMIT:
      next(action);
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
