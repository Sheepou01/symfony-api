/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import Next from 'src/components/Next';
import './style.scss';

/**
 * Code
 */



const Anecdotes = ({ receivedTopito, topitos }) => {
  function handleClick(e) {
    e.preventDefault();
    console.log('component' + receivedTopito());
  };


  
  return (
  <div>
    <div id="wiki-view">
      <h1>{}</h1>
      <ul className="wiki-info">
        <li className="Date">{}</li>
        <li className="source"> source : http://www.topito.com/top-20-des-phrases-cultes-de-nos-entraineurs-de-rugby </li>
      </ul>
      <p className="description">
      {}</p>
      <button onClick={handleClick}> </button>
    </div>
    <Next className="next-button" />
  </div>
)};


/**
 * Export
 */
export default Anecdotes;
