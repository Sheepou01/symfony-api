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
const Ending = ({ clickEndView }) => {

  const handleClickEndView = () => {
    clickEndView();
  };

  return (
    <div id="ending-view">
      <div>Tu as pas fini ?? Quel dommage... Mais tu as perdu 5 minutes grâce à nous !!!!</div>
      <button type="button" onClick={handleClickEndView}>Accueil</button>
    </div>
  );
};

/**
 * Export
 */
export default Ending;
