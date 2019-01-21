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
    <Games />
    <Quizz />
    <Anecdotes />
  </div>
);

/**
 * Export
 */
export default Navigation;
