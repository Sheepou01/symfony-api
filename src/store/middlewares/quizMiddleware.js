/**
 * Import
 */
import axios from 'axios';
import { QUIZ, receivedQuiz, SEND_SCORE } from 'src/store/reducers/quizReducer';
import { userFavTheme } from '../reducers/userReducer';

/**
* Code
*/

const urlQuiz = 'https://guillaume-marques.fr/api/quizz';


const quizMiddleware = store => next => (action) => {
  
  const { quiz, score } = store.getState().quizReducer;
  const { user } = store.getState().userReducer;
  const urlScoreQuiz = `https://guillaume-marques.fr/api/set/quizz_score/${quiz.id}/user/${user.id}`;
  
  switch (action.type) {
    case QUIZ:
      axios({
        method: 'get',
        url: urlQuiz,
        // paramconverter in back-end, so we have to send an empty object. paramconverter is waiting something in return
        data: {
          id: user.id,
        },
      }).then((response) => {
        // handle success
        console.log(response.data);
        store.dispatch(receivedQuiz(response.data));
      })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      break;
    // case SEND_SCORE:
    //   console.log(quiz.id);
    //   axios({
    //     method: 'post',
    //     url: urlScoreQuiz,
    //     // paramconverter in back-end, so we have to send an empty object. paramconverter is waiting something in return
    //     data: {
    //       score,
    //     },
    //   }).then((response) => {
    //     // handle success
    //     console.log(response.data);
    //     store.dispatch(receivedQuiz(response.data));
    //   })
    //     .catch((error) => {
    //       // handle error
    //       console.log(error);
    //     });
    //   break;
    default:
      next(action);
  }
};


export default quizMiddleware;
