/**
 * Import
 */
import axios from 'axios';
import { QUIZ } from 'src/store/reducers/quizReducer.js';

/**
* Code
*/
const urlQuiz = 'http://92.243.9.56/api';

const quizMiddleware = store => next => (action) => {
  switch (action.type) {
    case QUIZ:
      axios.get(urlQuiz)
         .then(function (response) {
           // handle success
          console.log(response);
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


export default quizMiddleware;
