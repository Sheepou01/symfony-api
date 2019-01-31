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
const Quiz = ({ quiz, loading }) => {
  //  console.log(quiz);

  // console.log(questions)
  // console.log(questions.map(question => question.text));
  if (!loading) {
    const { title, questions } = quiz;
    console.log(questions);
    return (
      <div id="quiz-view">
        <h1>{title}</h1>
        {questions.map(question => (
          <div key={question.id} id="quiz-boxes">
            <div className="quiz-box">
              <div className="quiz-question">
                <h2>{question.text}</h2>
                <div className="quiz-answers">
                  <form>
                    <div>
                      <input type="radio" id="contactChoice1"
                      name="contact" value="email" />
                      <label htmlFor="contactChoice1">Email</label>

                      <input type="radio" id="contactChoice2"
                      name="contact" value="telephone" />
                      <label htmlFor="contactChoice2">Téléphone</label>

                      <input type="radio" id="contactChoice3"
                      name="contact" value="courrier" />
                      <label htmlFor="contactChoice3">Courrier</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div id="check-icon">
          <Button><Icon name="check" size="huge" /></Button>
        </div>
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Quiz;

/**<div className="quiz-answers">
                  <form>
                    {question.answers.map(answer => 
                      <div key={answer.id}>
                      <label htmlFor={answer.id}>{answer.text}</label>
                        <input type="radio" name={answer.id} value={answer.id} />
                      </div>
                    )}
                  </form>
                </div> */
