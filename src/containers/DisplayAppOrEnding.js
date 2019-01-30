import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DisplayAppOrEnding from 'src/components/DisplayAppOrEnding';

const mapStateToProps = state => ({
  gameOver: state.timerReducer.gameOver,
});

const mapDispatchToProps = {};

const DisplayAppOrEndingContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayAppOrEnding);

export default withRouter(DisplayAppOrEndingContainer);
