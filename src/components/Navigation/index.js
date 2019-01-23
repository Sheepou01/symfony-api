/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Games from './Games';
import Quizz from './Quizz';
import Anecdotes from './Anecdotes';
import './style.scss';
/**
 * Code
 */
const Navigation = () => (
  <div id="navigation">
    {/* <Games />
    <Quizz />
    <Anecdotes /> */}
    <div>
      <figure className="icon-cards mt-3">
        <div className="icon-cards__content step-animation">
          <div className="icon-cards__item d-flex align-items-center justify-content-center">Games</div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center">Quiz </div>
          <div className="icon-cards__item d-flex align-items-center justify-content-center">Anecdotes</div>
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
