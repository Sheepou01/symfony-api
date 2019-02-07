/**
 * Import
 */
import axios from 'axios';
import { QUIZ, receivedQuiz } from 'src/store/reducers/quizReducer';

/**
* Code
*/

const urlQuiz = 'https://guillaume-marques.fr/api/quizz';


const quizMiddleware = store => next => (action) => {
  switch (action.type) {
    case QUIZ:
      axios.get(urlQuiz)
        .then((response) => {
          // handle success
          console.log(response.data);
          store.dispatch(receivedQuiz(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};


export default quizMiddleware;
