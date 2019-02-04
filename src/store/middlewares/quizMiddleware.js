/**
 * Import
 */
import axios from 'axios';
import { QUIZ, receivedQuiz } from 'src/store/reducers/quizReducer';

/**
* Code
*/
<<<<<<< HEAD
const urlQuiz = 'http://217.70.191.8/api/quizz';
=======

const urlQuiz = 'http://217.70.191.8/api/quizz';

>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f

const quizMiddleware = store => next => (action) => {
  switch (action.type) {
    case QUIZ:
      axios.get(urlQuiz)
        .then((response) => {
          // handle success
          // console.log(response.data);
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
