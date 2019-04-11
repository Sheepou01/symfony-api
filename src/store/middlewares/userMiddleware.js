/**
 * Import
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SIGNUP_USER, SIGNIN_USER, EDIT_USER, setCurrentUser, LOGOUT, USER_FAV_THEME, actionWrongSignin } from 'src/store/reducers/userReducer';
import setAuthorizationToken from '../setAuthorizationToken';

/**
* Code
*/


const userMiddleware = store => next => (action) => {

  const urlSignUp = 'https://guillaume-marques.fr/api/signup';
  const urlSignIn = 'https://guillaume-marques.fr/api/login_check';
  const test = 'https://guillaume-marques.fr/api/test';
  // const tag = 'http://217.70.191.8/api/tag'; pour recup la liste des themes pour l'instant j'ai fait en dur
  const { user } = store.getState().userReducer;
  // console.log(user.id);
  const urlEditUser = `https://guillaume-marques.fr/user/${user.id}/edit`;
  const urlFavTheme = `https://guillaume-marques.fr/user/${user.id}/tag/edit`;

  switch (action.type) {
    case SIGNUP_USER:
      // Je veux faire une requête axios
      axios({
        method: 'post',
        url: urlSignUp,
        // Je transmets les infos dynamiquement grâce à l'action SIGNUP_USER
        data: {
          username: action.pseudo,
          email: action.email,
          password: action.password,
        },
      }).then((response) => {
        // console.log(response);
      }).catch((error) => {
        // console.log(error);
      });
      next(action);
      break;
    case EDIT_USER:
      // Je veux faire une requête axios
      axios({
        method: 'post',
        url: urlEditUser,
        // Je transmets les infos dynamiquement grâce à l'action SIGNUP_USER
        data: {
          username: action.pseudo,
          email: action.email,
          password: action.password,
        },
      }).then((response) => {
        // console.log(response);
      }).catch((error) => {
        // console.log(error);
      });
      next(action);
      break;
    case SIGNIN_USER:
      axios({
        method: 'post',
        url: urlSignIn,
        data: {
          // Je transmets les infos dynamiquement grâce à l'action SIGNIN_USER
          // action email et action.password viennent de mon action qui prennent les valeurs enregistrées dans mes inputs
          // Username car contrainte Symfo - connexion
          username: action.email,
          password: action.password,
        },
      }).then((response) => {
        // Je stocke mon token reçu par le back dans une variable
        // eslint-disable-next-line prefer-destructuring
        const { token } = response.data;
        // J'enregistre le token dans mon local storage
        // Local storage est une API native aux navigateurs modernes. ils storent des datas
        // pour que les datas soient accessibles lors des prochaines sessions
        localStorage.setItem('jwtToken', token);
        // J'appelle ma fonction setAutorization qui met dans le header de ma requete HTTP
        // notre token dans la propriété Authorization
        // setAuthorizationToken(token);
        // J'appelle mon action creator qui va mettre les infos du token dans mon initial state
        store.dispatch(setCurrentUser(jwtDecode(token)));
        axios({
          method: 'post',
          url: test,
          header: {
            Authorization: `Bearer${token}`,
          },
        }).then((res) => {
          // console.log(res);
        }).catch((error) => {
          // console.log(error);
        });
      }).catch((error) => {
        // console.log(error);
        store.dispatch(actionWrongSignin());
      });
      next(action);
      break;
    case LOGOUT:
      // Je retire le token du localStorage pour ne pas que ce soit visible lors des futures sessions
      localStorage.removeItem('jwtToken');
      // J'enlève mon authorization dans le header de la requete
      // setAuthorizationToken(false);
      // Je fournis un objet vide à mon initial state
      store.dispatch(setCurrentUser({}));
      next(action);
      break;
    case USER_FAV_THEME:
      axios({
        method: 'post',
        url: urlFavTheme,
        data: {
          id: action.themeId,
        },
      }).then((response) => {
        // console.log(response);
      }).catch((error) => {
        // console.log(error);
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
