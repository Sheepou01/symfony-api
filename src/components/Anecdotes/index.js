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
  // FUNCTION RANDOM
  // TOPITO
  if (topitosList.length > 0) {
    // I get the name, body and created_at in the object to the index of 0 in the array topitosList
    const {
      name,
      body,
      created_at,
      source,
    } = topitosList[activeTopito];
    return (
      <div>
        <div id="wiki-view">
          <h1>{name}</h1>
          <ul className="wiki-info">
            <li className="Date">{created_at}</li>
            <li className="source">{source}</li>
          </ul>

          <section className="description">
            { ReactHtmlParser(body) }
          </section>
        </div>
        <Next randomTopito={randomTopito} topitosList={topitosList} />
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
