import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Button, Loader, Checkbox, Card,
} from 'semantic-ui-react';

import classNames from 'classnames';

/**
 * Local import
 */
// import Next from 'src/components/Next';
import './style.scss';

import NextQuiz from 'src/components/Next/NextQuiz';

// import { green } from 'ansi-colors';


/**
 * Code
 */

const Quiz = ({ quiz, loading, scoreIncrement, score, formSubmitted, quizSubmitted}) => {
  // console.log(selectedOption);
  // Fonction pour le bouton radio
  function handleFormSubmit(evt) {
    evt.preventDefault();
    quizSubmitted();

    console.log(`Votre score est de : ${score}`);
    const answer = Number(evt.currentTarget.id);
    // console.log(answer);
    let { className } = evt.target;
    const answerClick = document.getElementsByClassName('answer-clicked');
    // console.log(answerClick);

    if (className === 'answer-clicked' && answer === 1) {
      className = 'good-answer';
    }
  }
  // Fonction pour le clic

  const handleClick = (evt) => {
    const answer = Number(evt.currentTarget.id);
    const { className } = evt.target;
    // console.log(evt);
    if (answer === 1 && !formSubmitted && className === 'quiz-answers') {
      scoreIncrement();
    }
    if (className === 'quiz-answers') {
      return evt.target.className = 'answer-clicked';
    }
    if (className ===  'answer-clicked') {
      return evt.target.className = 'quiz-answers';
    }
  };


  //  console.log(quiz);


  if (!loading) {
    const { title, questions } = quiz;
    console.log(questions);
    return (
      <div id="quiz-view">
        <form onSubmit={handleFormSubmit}>
          {formSubmitted && score < 5 ? <div className="quiz-score">Heuu tu es sérieux avec ton score moisi tu as fait {score}/10</div> : ''}
          {formSubmitted && score >= 5 && score < 7 ? <div className="quiz-score">Peut mieux faire mais good job quand même! Tu as fait {score}/10</div> : ''}
          {formSubmitted && score >= 8 ? <div className="quiz-score">C'est bon on tient notre champion!! Tu as fait {score}/10</div> : ''}
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
                            className={answer.correct ? 'good-answer' : 'bad-answer'}
                            onClick={handleClick}
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
          <div id="check-icon">
            <Button><Icon name="check" size="huge" /></Button>
          </div>
        </form>
        <NextQuiz />
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};

Quiz.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const Answer = ({id, answers}) => {
  // console.log(answers);
  const answersMap = answers.map(item => item.correct);
  // console.log(answersMap);
  return (
    <div>
      lol
    </div>
  );
};

/**
 * Export
 */
export default Quiz;


/**
 *     return (
      <div id="quiz-view">
        <form onSubmit={handleFormSubmit}>
          {formSubmitted ? <div>{score}/10</div> : ''}
          <h1>{title}</h1>
          <div id="quiz-boxes">
            {questions.map(question => (
              <div key={question.id} className="quiz-box">
                <div className="quiz-question">
                  <h2>{question.text}</h2>
                  <div className="quiz-form">
                    <ul>
                      {question.answers.map(answer => (
                        <li 
                          key={answer.id}
                          className="quiz-answers"
                          onClick={handleClick}
                          id={Number(answer.correct)}
                        >{answer.text}</li>
                      ))}
                    </ul>
                    {formSubmitted ? <Answer {...question} /> : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="check-icon">
            <Button><Icon name="check" size="huge" /></Button>
          </div>
        </form>
        <NextQuiz />
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};
 */


 // un gland = 1
 // une bille = 0
