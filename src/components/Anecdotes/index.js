/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
/**
 * Local import
 */
import Next from 'src/components/Next';
import './style.scss';

/**
 * Code
 */


const Anecdotes = ({ activeTopito, topitosList, arrayIndexTopito }) => {

 // FONCTION RANDOM

  // TOPITO
  if (topitosList.length > 0) {
    // Je récupère name, body et created_at dans l'objet à l'index 0 (activeTopito) dans le tableau (topitosList)
    const { name, body, created_at } = topitosList[activeTopito];
    return (
      <div>
        <div id="wiki-view">
          <h1>{name}</h1>
          <ul className="wiki-info">
            <li className="Date">{created_at}</li>
            <li className="source"> source : http://www.topito.com/top-20-des-phrases-cultes-de-nos-entraineurs-de-rugby </li>
          </ul>
          <p className="description">{body}</p>
        </div>
        <Next className="next-button" />
      </div>
    );
  }
return <div><h2><Loader active inline='centered' /></h2></div>;
};

Anecdotes.propTypes = {
  //activeTopito: PropTypes.number.isRequired,
  topitosList: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  )};

/**
 * Export
 */
export default Anecdotes;
