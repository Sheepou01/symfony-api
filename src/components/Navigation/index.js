/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

import { NavLink } from 'react-router-dom';
// import { Card, Icon, Image } from 'semantic-ui-react';
import './style.scss';

/**
 * Code
 */


const Navigation = ({ startTimer, quiz }) => {
  const handleStartClick = () => {
    startTimer();
  };

  const handleReceiveQuiz = () => {
    quiz();
  };

  // Fonction randomisation au clic

  return (
    <div id="navigation">
      <div>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content step-animation" onClick={handleStartClick}>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/jeu">
              <div className="card">
                <img src="src/styles/images/facts.png" alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Games</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/quiz" onClick={handleReceiveQuiz}>
              <div className="card">
                <img src="src/styles/images/facts.png" alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Quiz</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/anecdote">
              <div className="card">
                <img src="src/styles/images/facts.png" alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Anecdotes</div>
                </div>
              </div>
            </NavLink>
          </div>
        </figure>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  startTimer: PropTypes.func.isRequired,
  timerOff: PropTypes.bool.isRequired,
  // gameOver: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Navigation;
