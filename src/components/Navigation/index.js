/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */

import Topito from 'src/styles/assets/anecdoteFinal.png';
import Game from 'src/styles/assets/gameFinal.png';
import Quiz from 'src/styles/assets/quizFinal.png';
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

  return (
    <div id="navigation">
      <div>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content step-animation" onClick={handleStartClick}>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/jeu">
              <div className="card">
                <img src={Game} alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Games</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/quiz" onClick={handleReceiveQuiz}>
              <div className="card">
                <img src={Quiz} alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Quiz</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/anecdote">
              <div className="card">
                <img src={Topito} alt="" className="card-image" />
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
  quiz: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Navigation;
