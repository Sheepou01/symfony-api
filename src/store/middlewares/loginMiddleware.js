/**
 * Import
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { NEW_USER_SUBMIT, CONNECT_USER_SUBMIT, setCurrentUser, LOGOUT } from 'src/store/reducers/loginReducer';
import setAuthorizationToken from '../setAuthorizationToken';

/**
* Code
*/
const urlSignUp = 'http://92.243.9.56/api/signup';
const urlSignIn = 'http://217.70.191.8/api/login_check';
const test = 'http://217.70.191.8/api/test';

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
      next(action);
      break;
    case CONNECT_USER_SUBMIT:
      axios({
        method: 'post',
        url: urlSignIn,
        data: {
          // Je transmets les infos dynamiquement grâce à l'action CONNECT_USER_SUBMIT
          // action email et action.password viennent de mon action qui prennent les valeurs enregistrées dans mes inputs
          // Username car contrainte Symfo - connexion
          username: action.email,
          password: action.password,
        },
      }).then((response) => {
        // Je stocke mon token reçu par le back dans une variable
        // eslint-disable-next-line prefer-destructuring
        const token = response.data.token;
        // J'enregistre le token dans mon local storage
        // Local storage est une API native aux navigateurs modernes. ils storent des datas
        // pour que les datas soient accessibles lors des prochaines sessions
        localStorage.setItem('jwtToken', token);
        // J'appelle ma fonction setAutorization qui met dans le header de ma requete HTTP
        // notre token dans la propriété Authorization
        setAuthorizationToken(token);
        // J'appelle mon action creator qui va mettre les infos du token dans mon initial state
        store.dispatch(setCurrentUser(jwtDecode(token)));
        axios({
          method: 'post',
          url: test,
          header: {
            Authorization: `Bearer${token}`,
          },
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;
    case LOGOUT:
      // Je retire le token du localStorage pour ne pas que ce soit visible lors des futures sessions
      localStorage.removeItem('jwtToken');
      // J'enlève mon authorization dans le header de la requete
      setAuthorizationToken(false);
      // Je fournis un objet vide à mon initial state
      store.dispatch(setCurrentUser({}));
      next(action);
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
