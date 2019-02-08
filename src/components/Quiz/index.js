import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Loader } from 'semantic-ui-react';


/**
 * Local import
 */
// import Next from 'src/components/Next';
import './style.scss';

import NextQuiz from 'src/components/Next/NextQuiz';
// import NextQuiz from 'src/containers/NextQuiz';


// import { green } from 'ansi-colors';


/**
 * Code
 */


const Quiz = ({
  quizSubmitted,
  sendingScore,
  isAuthenticated,
  formSubmitted,
  scoreIncrement,
  quiz,
  loading,
  score,
  nextQuiz,
}) => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    quizSubmitted();
    if (isAuthenticated) {
      sendingScore();
    }
  };
  // Fonction pour le clic

  const handleClick = (evt) => {
    const answer = Number(evt.currentTarget.id);
    // console.log (evt.target);
    const { className } = evt.target;
    // console.log(evt);
    if (answer === 1 && !formSubmitted && className === 'quiz-answers') {
      scoreIncrement();
    }
    if (className === 'quiz-answers') {
      // eslint-disable-next-line no-return-assign
      return evt.target.className = 'answer-clicked';
    }
    if (className === 'answer-clicked') {
      // eslint-disable-next-line no-return-assign
      return evt.target.className = 'quiz-answers';
    }
    return null;
  };

  if (!loading) {
    const { title, questions } = quiz;
    console.log(quiz);
    return (
      <div id="quiz-view">
        <form onSubmit={handleFormSubmit}>
          <h1>{title}</h1>
          <div id="quiz-boxes">
            {questions.map(question => (
              <div key={question.id} className="quiz-box">
                <div className="quiz-question">
                  <h2>{question.text}</h2>
                  <div className="quiz-form">
                    <ul>
                      {formSubmitted ? (
                        question.answers.map(answer => (
                          <li
                            key={answer.id}
                            className={answer.correct ? 'answer-good' : 'answer-bad'}
                            id={Number(answer.correct)} // We use the Number function to convert our string true or false on Number
                          >
                            {answer.text}
                          </li>
                        ))
                      )
                        : (
                          question.answers.map(answer => (
                            <li
                              key={answer.id}
                              className="quiz-answers"
                              onClick={handleClick}
                              id={Number(answer.correct)} // We use the Number function to convert our string true or false on Number
                            >
                              {answer.text}
                            </li>
                          ))
                        )}
                    </ul>
                    {/* {formSubmitted ? <Answer {...question} /> : ''} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {formSubmitted && score < 5 ? <div className="quiz-score">Heuu tu es sérieux avec ton score moisi tu as fait {score}/10</div> : ''}
          {formSubmitted && score >= 5 && score < 7 ? <div className="quiz-score">Peut mieux faire mais good job quand même! Tu as fait {score}/10</div> : ''}
          {formSubmitted && score >= 8 ? <div className="quiz-score">C'est bon on tient notre champion!! Tu as fait {score}/10</div> : ''}
          <div id="button-check">
            <Button className="button-submit"><Icon name="check" size="large" /> Valides tes réponses</Button>
            <NextQuiz nextQuiz={nextQuiz} />
          </div>
        </form>
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};


Quiz.propTypes = {
  loading: PropTypes.bool.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  quizSubmitted: PropTypes.func.isRequired,
  scoreIncrement: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  sendingScore: PropTypes.func.isRequired,
  nextQuiz: PropTypes.func.isRequired,
};

// const Answer = ({id, answers}) => {
//   // console.log(answers);
//   const answersMap = answers.map(item => item.correct);
//   // console.log(answersMap);
//   return (
//     <div>
//       lol
//     </div>
//   );
// };


/**
 * Export
 */
export default Quiz;
