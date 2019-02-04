import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Button, Loader, Checkbox, Card,
} from 'semantic-ui-react';
/**
 * Local import
 */
// import Next from 'src/components/Next';
import './style.scss';
<<<<<<< HEAD
import Response from './Response';
=======
import { green } from 'ansi-colors';
>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f

/**
 * Code
 */
<<<<<<< HEAD
const Quiz = ({ quiz, loading, selectedOption }) => {
=======

const Quiz = ({ quiz, loading, scoreIncrement, score, formSubmitted, quizSubmitted}) => {
>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
  // console.log(selectedOption);
  // Fonction pour le bouton radio
  function handleFormSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    console.log('The Radio was clicked.');
    const result = (!selectedOption);
    console.log(result);
    return (result);
  }
  // Fonction pour le clic
  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }
=======
    quizSubmitted();
    console.log(`Votre score est de : ${score}`);
  }
  // Fonction pour le clic
  function handleClick(e) {
    const answer = Number(e.currentTarget.id);
    const goodAnswer = {
      color: 'white',
      background: 'red',
    };    
    // console.log(style);
    if (answer === 1) {
      scoreIncrement();
      `style=${goodAnswer}`;
    }
  }

  const goodAnswer = {
    color: 'white',
    background: 'green',
  };
>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
  //  console.log(quiz);

  if (!loading) {
    const { title, questions } = quiz;
    // console.log(questions);
    return (
      <div id="quiz-view">
<<<<<<< HEAD
        <h1>{title}</h1>
        <div id="quiz-boxes">
          {questions.map(question => (
            <div key={question.id} className="quiz-box">
              <div className="quiz-question">
                <h2>{question.text}</h2>
                <div className="quiz-form">
                  <form>
                    {question.answers.map(answer => (
                      <div
                        className="quiz-answers"
                        key={answer.id}
                        value={answer.correct}
                      >
                        <label>
                          <input
                            type="radio"
                            id={answer.id}
                            name={question.text}
                            value={answer.correct}
                            onChange={handleFormSubmit}
                          />
                          {answer.text}
                        </label>
                      </div>
                    ))}
                    <Response
                      quiz= {quiz}              
                    />                
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="check-icon">
          <Button onClick={handleClick}><Icon name="check" size="huge" /></Button>
        </div>
=======
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

>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};

Quiz.propTypes = {
<<<<<<< HEAD
  selectedOption: PropTypes.bool.isRequired,
  quiz: PropTypes.object.isRequired,
=======

>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
  loading: PropTypes.bool.isRequired,
};

const Answer = ({id, answers}) => {
  // console.log(answers);
  const answersMap = answers.map(item => item.correct);
  console.log(answersMap);
  return (
    <div>
      lol
    </div>
  )
}



/**
 * Export
 */
export default Quiz;
<<<<<<< HEAD
=======

>>>>>>> 766e955e45660c477c76a9843c4286d5a2d5717f
