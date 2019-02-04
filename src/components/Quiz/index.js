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
import Response from './Response';

/**
 * Code
 */
const Quiz = ({ quiz, loading, selectedOption }) => {
  // console.log(selectedOption);
  // Fonction pour le bouton radio
  function handleFormSubmit(event) {
    event.preventDefault();
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
  //  console.log(quiz);

  if (!loading) {
    const { title, questions } = quiz;
    console.log(questions);
    return (
      <div id="quiz-view">
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
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};

Quiz.propTypes = {
  selectedOption: PropTypes.bool.isRequired,
  quiz: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Quiz;
