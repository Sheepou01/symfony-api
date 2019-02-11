
import React from 'react';
import Timer from 'src/styles/assets/timer.png';
import Game from 'src/styles/assets/gameFinal.png';
import Quiz from 'src/styles/assets/quizFinal.png';


/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const Help = () => (
  <div id="help-view">
    <div id="help-header">
      <h1>Help ?</h1>
      <p>Si tu es là c'est que tu avais 5 min à perdre et que tuas quand même besoin d'aide ! et c'est
      une bonne nouvelle, car tu es au bon endroit !</p>
    </div>

  <div id="help-body">
    <div className="help-article">
      <img src={Timer}></img>
      <h2> Timer </h2>
      <p>Tu vois le gros timer en haut de la page ? </p>
      <p>il se déclenche lorsque tu cliques l'un des 3 items (jeux, quiz, anecdotes)
      Pendant 5 minutes tu pourras faire ce que tu veux. Mais pas plus ....</p>
      <h2>Si tu veux changer ce délai, aucun probleme ! Inscrit toi via facebook et link le site via une chaine de 10 personnes, si ces 10 personnes partagent l'information alors tu pourras chnger la durée du chrono ! sinon inscrit toi avec ton mail que nous puissions le  partager avec le monde entier !</h2>
    </div>
    <span className="help-bar"></span>
    <div className="help-article">
      <img src={Game}></img>
        <h2> Games </h2>
        <p> Tu as cliqué sur game ? </p>
        <p> Tu es tombé sur Snake,Le serpent bleu doit attrapé la pomme rouge tout en évitant de se cogner contre la bordure verte foncé ou son propre corps ! déplace toi de avec les touches directionnelles du clavier, touche espace pour relancer une partie</p>
    </div>
    <span className="help-bar"></span>
    <div className="help-article">
      <img src={Quiz}></img>
      <h2> Quizz </h2>
      <p>tu as 10 questions avec 1 seules réponses possibles, pas de temps limites, et en étant inscrit tu pourras choisir les thèmes. </p>
    </div>
  </div>
    
    <p className="help-pierric">
    Et pour le reste ? Demande à Pierric !
    </p>
    
  </div>

);


/**
 * Export
 */
export default Help;


/**
 * A quoi sert ce site ?
 * 
 * Si tu es là c'est que tu avais 5 min à perdre ! et c'est une bonne nouvelle, car tu es au bon endroit !
 * Tu vois le gros timer en haut de la page ? il se déclenche lorsque tu cliques l'un des 3 items (jeux, quiz, anecdotes)
 * Pendant 5 minutes tu pourras faire ce que tu veux. Mais pas plus ....
 * 
 * Si tu veux changer ce délai, aucun probleme ! Inscrit toi via facebook et link le site via une chaine de 10 personnes, si ces 10 personnes partagent l'information alors tu pourras chnger la durée du chrono ! 
 * sinon inscrit toi avec ton mail que nous puissions le  partager avec le monde entier !
 * 
 * 
 * Games :
 * Tu as cliqué sur game ? tu es tombé sur Snake,
 * Le serpent bleu doit attrapé la pomme rouge tout en évitant de se cogner contre la bordure verte foncé ou son propre corps ! 
 * déplace toi de avec les touches directionnelles du clavier,
 * touche espace pour relancer une partie.
 * 
 * Quizz :
 * tu as 10 questions avec 1 seules réponses possibles, pas de temps limites, et en étant inscrit tu pourras choisir les thèmes.
 * Inscrit toi via facebook et link le site via une chaine de 10 personnes, si ces 10 personnes partagent l'information alors tu pourras chnger la durée du chrono ! 
 * sinon inscrit toi avec ton mail que nous puissions le  partager avec le monde entier !
 * 
 * 
 * 
 */
