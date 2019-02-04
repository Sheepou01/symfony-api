/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Anecdotes from 'src/components/Anecdotes';


// Action Creators
import { randomTopito } from '../store/reducers/anecdotesReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
// console.log('Middleware' + randomTopito);
const mapStateToProps = state => ({
  // J'utilise le state de mon userReducer
  // Je retourne mon tableau d'objet recu
  topitosList: state.anecdotesReducer.topitosList,
  activeTopito: state.anecdotesReducer.activeTopito,
  // Je retourne mon tableau d'index
  // arrayIndexTopito :state.anecdotesReducer.arrayTopito,
  // Je retourne uniquement un nom de mon tableau d'objet (pas obligatoire)
  // name: state.anecdotesReducer.topitosName,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  // received Topito renvoie un objet action pret à l'emploi
  randomTopito: (array) => {
    dispatch(randomTopito(array));
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const AnecdotesContainer = connect(mapStateToProps, mapDispatchToProps)(Anecdotes);


/**
 * Export
 */
export default AnecdotesContainer;
