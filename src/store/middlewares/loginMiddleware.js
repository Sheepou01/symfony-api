/**
 * Import
 */
import axios from 'axios';
import { NEW_USER_SUBMIT, CONNECT_USER_SUBMIT } from 'src/store/reducers/loginReducer';

/**
* Code
*/
const urlSignUp = 'http://92.243.9.56/api/signup';
const urlSignIn = 'http://92.243.9.56/api/signin';
// Const pour l'url du wiki
const urlWiki = 'http://92.243.9.56/api/wiki';

const loginMiddleware = store => next => (action) => {

  switch (action.type) {
    case NEW_USER_SUBMIT:
      // Je veux faire une requête axios
      axios({
        method: 'post',
        url: urlSignUp,
        // Je transmets les infos dynamiquement grâce à l'action NEW_USER_SUBMIT
        data: {
          username: action.pseudo,
          email: action.email,
          password: action.password,
        },
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      // Conection axios pour obtenir les wikis:
      // axios.get(urlWiki)
      //   .then(function (response) {
      //     // handle success
      //     console.log(response.data);
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
      axios({
        method: 'post',
        url: urlSignIn,
        data: {
          // Je transmets les infos dynamiquement grâce à l'action CONNECT_USER_SUBMIT
          email: action.email,
          password: action.password,
        },
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
