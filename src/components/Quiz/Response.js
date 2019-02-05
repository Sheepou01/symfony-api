/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */
const Response = ({ quiz }) => {
   
  // Je récupère chaque question :
  const { questions } = quiz;
  
  // je recupere chaque réponse à mes questions :
  const reponse = questions.map(question => question.answers.map(answer => answer.correct));
  console.log(reponse);
  const goodAnswer = reponse.filter(rep => rep.length === 4);
  // console.log(goodAnswer);



  // const correct = reponse.map(item => item.correct);
  // reponse du mappage undefine
  // console.log(correct)

  // const jeremy = 

  // Je créer la condition en fonction de correct
  // if correct === true  {

  return (
    
    <div>
      <p> Bonne réponse </p>
    </div>
  );
  // }

// return (
//   <div>
//   <p>Mauvaise réponse</p>
//   </div>
// )
};

Response.propTypes = {
};
/**
 * Export
 */
export default Response;
