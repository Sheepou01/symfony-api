/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Loader } from 'semantic-ui-react';


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
    const score = Object.keys(user_answers).length;
    console.log(Object.keys(user_answers));

    scoreIncrement(score);
    quizSubmitted();
    if (isAuthenticated) {
      sendingScore();
    }
  };
  // Fonction pour le clic
  // const handleClick = (evt) => {
  //   const answer = Number(evt.currentTarget.id);
  //   // console.log (evt.target);
  //   const { className } = evt.target;
  //   // console.log(evt);
  //   if (answer === 1 && !formSubmitted && className === 'quiz-answers') {
  //     scoreIncrement();
  //   }
  //   if (className === 'quiz-answers') {
  //     // eslint-disable-next-line no-return-assign
  //     return evt.target.className = 'answer-clicked';
  //   }
  //   if (className === 'answer-clicked') {
  //     // eslint-disable-next-line no-return-assign
  //     return evt.target.className = 'quiz-answers';
  //   }
  //   return null;
  // };

  const setAnswer = (event) => {
    const isSelected = [event.target.checked];
    const { value, id, className } = event.target;
    // I verify if the checkbox that I checked is true && that the value of the input is a string true
    // and I give the id and the value of my target to my action creator.
    if (isSelected[0] === true && value === 'true') {
      setStateAnswer(id, value);
    }
  };

  if (!loading) {
    const { title, questions } = quiz;
    // My const score is the length of my user_answers object that I change to an array
    
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
                                htmlFor={`question-id-${question.id}-answer-input-${answer.id}`}
                                // className={Object.keys(user_answers)[1 - 1] === `question-id-${question.id}-answer-input-${answer.id}` ? 'answer-good' : 'answer-bad'}
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
                                id={`question-id-${question.id}-answer-input-${answer.id}`}
                                type="radio"
                                name={question.text}
                                value={answer.correct}
                                onClick={setAnswer}
                                defaultChecked={false}
                              />
                              <label className="quiz-answers" htmlFor={`question-id-${question.id}-answer-input-${answer.id}`}>
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
          {formSubmitted && scoreState < 5 ? <div className="quiz-score">Heuu tu es sérieux avec ton score tu as fait {scoreState}/10</div> : ''}
          {formSubmitted && scoreState >= 5 && scoreState < 7 ? <div className="quiz-score">Peut mieux faire mais good job quand même! Tu as fait {scoreState}/10</div> : ''}
          {formSubmitted && scoreState >= 8 ? <div className="quiz-score">C'est bon on tient notre champion!! Tu as fait {scoreState}/10</div> : ''}
          <div id="button-check">
            <Button className="button-submit"><Icon name="check" size="large" /> Valides tes réponses</Button>
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
};


/**
 * Export
 */
export default Quiz;
