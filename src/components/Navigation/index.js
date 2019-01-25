/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { NavLink } from 'react-router-dom';
import './style.scss';
/**
 * Code
 */
class Navigation extends React.Component {
  handleStartClick = () => {
    const { decrementTimer, timerOff } = this.props;
    if (timerOff) {
      this.decrementer = setInterval(decrementTimer, 1000);
    }
  };

  stopDecrement = () => {
    const { gameOver } = this.props;
    if (gameOver) {
      clearInterval(this.decrementer);
    }
  };

  render() {
    return (
      <div id="navigation">
        <div>
          <figure className="icon-cards mt-3">
            <div className="icon-cards__content step-animation" onClick={this.handleStartClick}>
              <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/jeu">Games</NavLink>
              <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/quiz">Quiz </NavLink>
              <NavLink className="icon-cards__item d-flex align-items-center justify-content-center" to="/anecdote">Anecdotes</NavLink>
            </div>
          </figure>
        </div>
        {/* <div className="checkbox">
          <input className="d-none" id="toggle-animation" type="checkbox" />
          <label className="checkbox__checkbox" htmlFor="toggle-animation" />
          <label className="checkbox__label" htmlFor="toggle-animation">Toggle animation</label>
        </div> */}
      </div>
    );
  }
}

Navigation.propTypes = {
  decrementTimer: PropTypes.func.isRequired,
  timerOff: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Navigation;
