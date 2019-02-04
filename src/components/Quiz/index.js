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

/**
 * Code
 */
const Quiz = ({ quiz, loading, scoreIncrement, score, formSubmitted, quizSubmitted}) => {
  // console.log(selectedOption);
  // Fonction pour le bouton radio
  function handleFormSubmit(event) {
    event.preventDefault();
    quizSubmitted();
    console.log(`Votre score est de : ${score}`);
  }
  // Fonction pour le clic
  function handleClick(e) {
    const answer = Number(e.currentTarget.id);
    changeColor(); 
    // console.log(style);
    if (answer === 1) {
      scoreIncrement();
    }
  }

  if (!loading) {
    const { title, questions } = quiz;
    // console.log(questions);
    return (
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
                        >
                          {answer.text}
                        </li>
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
