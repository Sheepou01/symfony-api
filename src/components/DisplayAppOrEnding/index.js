/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import DisplayApp from 'src/components/DisplayApp';
import Ending from 'src/containers/Ending';
import Timer from 'src/containers/Timer';
import Footer from 'src/components/Footer';

// import './app.scss';

/**
 * Code
 */
const DisplayAppOrEnding = ({ gameOver }) => {
  console.log(gameOver);
  return (
    <div>
      <Header />
      <Timer />
      <DisplayApp />
      {/* {gameOver ? <Ending /> : <DisplayApp /> } */}
      <Footer />
    </div>
  );
};

/**
 * Export
 */
export default DisplayAppOrEnding;
