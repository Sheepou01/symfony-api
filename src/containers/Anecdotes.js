/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Anecdotes from 'src/components/Anecdotes';


// Action Creators
import { receivedTopito, topitosList } from '../store/reducers/anecdotesReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  // J'utilise le state de mon loginReducer
name: state.anecdotesReducer.topitosName,
body: state.anecdotesReducer.topitosBody,
created_at: state.anecdotesReducer.topitosDate,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  receivedTopito: () => {
    dispatch(receivedTopito());
  },
});

// Container
// connect(Ce dont j'ai besoin = state et actions)(Qui en a besoin = Login)
const AnecdotesContainer = connect(mapStateToProps, mapDispatchToProps)(Anecdotes);


/**
 * Export
 */
export default AnecdotesContainer;
