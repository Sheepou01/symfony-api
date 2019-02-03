/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */

import facts from 'src/styles/assets/facts.png';
// import { Card, Icon, Image } from 'semantic-ui-react';
import './style.scss';

/**
 * Code
 */


const Navigation = ({ startTimer, timerOff, gameOver }) => {
  const handleStartClick = () => {
    // if (timerOff) {
    //   setInterval(decrementTimer, 1000);
    // }
    startTimer();
  };

  // const stopDecrement = () => {
  //   if (gameOver) {
  //     clearInterval(this.decrementer);
  //   }
  // };

  // Fonction randomisation au clic

  return (
    <div id="navigation">
      <div>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content step-animation" onClick={handleStartClick}>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/jeu">
              <div className="card">
                <img src={facts} alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Games</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/quiz">
              <div className="card">
                <img src={facts} alt="" className="card-image" />
                <div className="card-banner">
                  <div className="card-title">Quiz</div>
                </div>
              </div>
            </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/anecdote">
              <div className="card">
                <img src={facts} alt="" className="card-image" />
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
