/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';


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
      <iframe src="https://giphy.com/embed/k4drIzcE2mPWU" width="480" height="430" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      <div id="ending-message">Tu as pas fini ?? Quel dommage... Mais tu as perdu du temps grâce à nous !!!!</div>
      <Button id="ending-button" type="button" onClick={handleClickEndView} content="Retour" />
    </div>
  );
};

Ending.propTypes = {
  clickEndView: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Ending;
