/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Loader } from 'semantic-ui-react';
// import classNames from 'classnames';



/**
 * Local import
 */
import './style.scss';

import NextQuiz from 'src/components/Next/NextQuiz';
// import NextQuiz from 'src/containers/NextQuiz';


/**
 * Code
 */


const Quiz = ({
  quizSubmitted,
  sendingScore,
  isAuthenticated,
  formSubmitted,
  loading,
  nextQuiz,
  quiz,
  user_answers,
  setStateAnswer,
  scoreState,
  scoreIncrement,
  newQuizDisplay,
}) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // I transform my object user_answers in an array with the question's id as keys
    const keysArray = Object.keys(user_answers);
    // I Can map on it and return an object with the question'id as a key and the response
    const objectAnswer = keysArray.map(key => ({
      questionId: key,
      response: user_answers[key],
    }));
    // filter of our array to take the only good answers
    const nbAnswer = objectAnswer.filter(answer => answer.response.correct === true).length;

    scoreIncrement(nbAnswer);
    quizSubmitted();
    if (isAuthenticated) {
      sendingScore();
    }
  };

  const setAnswer = response => () => {
    setStateAnswer(response);
  };

  if (!loading) {
    const { title, questions } = quiz;

    // const objectAnwser = Object.keys(user_answers).map(key => ({
    //   questionId: key,
    //   response: user_answers[key],
    // }));
    // const answerFinal = objectAnwser.map(ans => ans.questionId);
    // console.log(answerFinal)
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
                    <div>
                      {formSubmitted ? (
                        question.answers.map(answer => (
                          <div>
                            <div key={answer.id}>
                              <label
                                htmlFor={answer.id}
                                className={answer.correct ? 'answer-good' : 'answer-bad'}
                              >
                                {`${answer.text}`}
                              </label>
                            </div>
                          </div>
                        ))
                      )
                        : (
                          question.answers.map(answer => (
                            <div key={answer.id} className="quiz-answers">
                              <input
                                id={answer.id}
                                type="radio"
                                name={question.text}
                                value={answer.correct}
                                onClick={setAnswer({
                                  questionId: question.id,
                                  answer,
                                })}
                                defaultChecked={false}
                              />
                              <label className="quiz-answers" htmlFor={answer.id}>
                                {`${answer.text}`}
                              </label>
                            </div>
                          ))
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {formSubmitted && scoreState < 5 ? <div className="quiz-score">Heuu tu es sérieux avec ton score tu as fait {scoreState}/{questions.length}</div> : ''}
          {formSubmitted && scoreState >= 5 && scoreState < 7 ? <div className="quiz-score">Peut mieux faire mais good job quand même! Tu as fait {scoreState}/{questions.length}</div> : ''}
          {formSubmitted && scoreState >= 8 ? <div className="quiz-score">C'est bon on tient notre champion!! Tu as fait {scoreState}/{questions.length}</div> : ''}
          <div id="button-check">
            <Button className="button-submit"><Icon name="check" size="large" /> Valide tes réponses</Button>
            <NextQuiz nextQuiz={nextQuiz} newQuizDisplay={newQuizDisplay} />
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
  quiz: PropTypes.object.isRequired,
  sendingScore: PropTypes.func.isRequired,
  nextQuiz: PropTypes.func.isRequired,
  scoreState: PropTypes.number.isRequired,
  user_answers: PropTypes.array.isRequired,
  setStateAnswer: PropTypes.func.isRequired,
  scoreIncrement: PropTypes.func.isRequired,
  newQuizDisplay: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Quiz;
