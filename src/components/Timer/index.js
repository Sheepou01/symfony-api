/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */


const TimerApp = ({ minutes, seconds, handleChange }) => {

  return (
    <div>
      <TimerInput minutes={minutes} handleChange={handleChange} />
      <Timer minutes={minutes} seconds={seconds} />
      <StartButton />
    </div>
  );
};

const TimerInput = ({ minutes, handleChange }) => {

  const handleChangeInput = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div style={{ marginLeft: 100 }}>
      <h3>Input your desired time</h3>
      <input type="number" minutes={minutes} onChange={handleChangeInput} required />
    </div>
  );
};

const Timer = ({ minutes, seconds }) => {
  console.log('coucou depuis Timer');
  return (
    <div>
      <h1 style={{ fontSize: '3em', marginLeft: 100 }}> {minutes}:{seconds} </h1>
    </div>
  );
};

const StartButton = () => {
  console.log('coucou depuis StartButton');
  return (
    <div style={{ marginLeft: 130 }}>
      <button type="button"> Start</button>
    </div>
  );
};


/**
 * Export
 */
export default TimerApp;
