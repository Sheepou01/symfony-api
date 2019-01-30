/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

/**
 * Local import
 */
import Next from 'src/components/Next';
import './style.scss';

/**
 * Code
 */


const Anecdotes = ({ activeTopito, topitosList, randomTopito }) => {
  // FONCTION RANDOM
  // TOPITO
  if (topitosList.length > 0) {
  // Je récupère name, body et created_at dans l'objet à l'index 0 (activeTopito)
  // dans le tableau (topitosList)
    const { name, body, created_at } = topitosList[activeTopito];
    return (
      <div>
        <div id="wiki-view">
          <h1>{name}</h1>
          <ul className="wiki-info">
            <li className="Date">{created_at}</li>
            <li className="source"> source : http://www.topito.com/top-20-des-phrases-cultes-de-nos-entraineurs-de-rugby </li>
          </ul>

          <p className="description">
            { ReactHtmlParser(body) }
          </p>
        </div>
        <Next className="next-button" randomTopito={randomTopito} topitosList={topitosList} />
      </div>
    );
  }
  return <div><h2><Loader active inline="centered" /></h2></div>;
};

Anecdotes.propTypes = {
  activeTopito: PropTypes.number.isRequired,
  randomTopito: PropTypes.func.isRequired,
  topitosList: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Anecdotes;
