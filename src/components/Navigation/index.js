/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { NavLink } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import './style.scss';
/**
 * Code
 */
const Navigation = ({ decrementTimer, timerOff, gameOver }) => {
  const handleStartClick = () => {
    if (timerOff) {
      setInterval(decrementTimer, 1000);
    }
    // decrementTimer();
  };

  // const stopDecrement = () => {
  //   if (gameOver) {
  //     clearInterval(this.decrementer);
  //   }
  // };
  
  return (
    <div id="navigation">
      <div>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content step-animation" onClick={handleStartClick}>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/jeu">Games</NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/quiz">Quiz </NavLink>
            <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/anecdote">Anecdotes</NavLink>
          </div>
        </figure>
      </div>
      {/* <Card>
        <Image src="src/styles/images/facts.png" />
        <Card.Content>
          <Card.Header>Game</Card.Header>
        </Card.Content>
      </Card> */}
    </div>
  );
};

Navigation.propTypes = {
  decrementTimer: PropTypes.func.isRequired,
  timerOff: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Navigation;
