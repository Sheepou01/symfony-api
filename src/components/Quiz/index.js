import React from 'react';
import { Icon } from 'semantic-ui-react';
/**
 * Local import
 */
import Next from 'src/components/Next';
import './style.scss';

/**
 * Code
 */
const Quizz = () => (
  <div id="quiz-view">

    <h1>Connecter ReactJs à Symfony</h1>

    <div id="quiz-boxes">
      <div className="quiz-box">
        <div className="quiz-question">
          <h2>On y arrive pas à cause de :</h2>
          <div className="quiz-answers">
          <ul>
            <li>Jérémy <input type="checkbox"></input></li>
            <li>Jérémy <input type="checkbox"></input></li>
            <li>Jérémy <input type="checkbox"></input></li>
          </ul>
          </div>
        </div>
      </div>

      <div className="quiz-box">
        <div className="quiz-question">
          <h2>css est dégueu à cause de : </h2>
          <div className="quiz-answers">
          <ul>
            <li>Jérémy <input type="checkbox"></input></li>
            <li>Jérémy <input type="checkbox"></input></li>
            <li>Jérémy <input type="checkbox"></input></li>
          </ul>
          </div>
        </div>
      </div>

      <div className="quiz-box">
        <div className="quiz-question">
          <h2>Qui sauvera les meubles ?</h2>
          <div className="quiz-answers">
          <ul>
            <li>Laurent <input type="checkbox"></input></li>
            <li>Laurent <input type="checkbox"></input></li>
            <li>Laurent <input type="checkbox"></input></li>
          </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="check-icon">
      <button><Icon name='check' size='huge' /></button>
      <Next />
    </div>
  </div>
);


/**
 * Export
 */
export default Quizz;
