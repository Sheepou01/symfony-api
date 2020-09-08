import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from 'src/components/App';

const mapStateToProps = state => ({
  gameOver: state.timerReducer.gameOver,
});

const mapDispatchToProps = {};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppContainer);
