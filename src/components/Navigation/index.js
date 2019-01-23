/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import { NavLink } from 'react-router-dom';
import './style.scss';
/**
 * Code
 */
const Navigation = () => (
  <div id="navigation">
    <div>
      <figure className="icon-cards mt-3">
        <div className="icon-cards__content step-animation">
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

/**
 * Export
 */
export default Navigation;
