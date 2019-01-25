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



const Anecdotes = ({ receivedTopito, topito, name, body, created_at }) => {
  function handleClick(e) {
    e.preventDefault();
    const test = name;
  console.log(test);
  };

  return (
  <div>
    <div id="wiki-view">
      <h1>{name}</h1>
      <ul className="wiki-info">
        <li className="Date">{created_at}</li>
        <li className="source"> source : http://www.topito.com/top-20-des-phrases-cultes-de-nos-entraineurs-de-rugby </li>
      </ul>
      <p className="description">
      {body}</p>
      <button onClick={handleClick}> </button>
    </div>
    <Next className="next-button" />
  </div>
)};


/**
 * Export
 */
export default Anecdotes;
