/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */

// Bouton Next pour passer sur un autre quiz
class NextQuiz extends React.Component {
  handleReceiveQuiz = () => {
    // evt.preventDefault();
    const { nextQuiz, newQuizDisplay } = this.props;
    nextQuiz();
    newQuizDisplay();
  };

  render() {
    return (
      <div id="next">
        <NavLink to="/quiz" onClick={this.handleReceiveQuiz}>
          <Button className="button-next">
            Passes au prochain Quiz
            <Icon name="chevron right" size="large" />
          </Button>
        </NavLink>
      </div>
    );
  }
}

NextQuiz.propTypes = {
  nextQuiz: PropTypes.func.isRequired,
  newQuizDisplay: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NextQuiz;

