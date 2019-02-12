/**
 * Import
 */
import axios from 'axios';
import $ from 'jquery';
import { QUIZ, receivedQuiz, SEND_SCORE } from 'src/store/reducers/quizReducer';

/**
* Code
*/


const quizMiddleware = store => next => (action) => {

  const { quiz, score } = store.getState().quizReducer;
  const { user } = store.getState().userReducer;
  const urlQuiz = 'https://guillaume-marques.fr/api/quizz';
  const urlScoreQuiz = `https://guillaume-marques.fr/api/set/quizz_score/${quiz.id}/user/${user.id}`;

  const settings = {
    async: true,
    crossDomain: true,
    url: urlQuiz,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    processData: false,
    data: {
      id: user.id,
    },
  };

  switch (action.type) {
    case QUIZ:

      // We tried to use another method to make a request
      $.ajax(settings).done((response) => {
        store.dispatch(receivedQuiz(response));
      });
      // axios({
      //   method: 'get',
      //   url: urlQuiz,
      //   header: {
      //     'content-type': 'application/json',
      //   },
      //   paramconverter in back-end, so we have to send an empty object. paramconverter is waiting something in return
      //   data: {
      //     id: user.id,
      //   },
      // }).then((response) => {
      //   // handle success
      //   console.log(response.data);
      //   store.dispatch(receivedQuiz(response.data));
      // })
      //   .catch((error) => {
      //     // handle error
      //     console.log(error);
      //   });
      break;
    case SEND_SCORE:
      axios({
        method: 'post',
        url: urlScoreQuiz,
        header: {
          'content-type': 'application/json',
        },
        data: {
          score,
        },
      }).then((response) => {
        // handle success
        // console.log(response.data);
      }).catch((error) => {
        // handle error
        // console.log(error);
      });
      break;
    default:
      next(action);
  }
};


export default quizMiddleware;
