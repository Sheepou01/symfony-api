import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/components/Quiz';
import Loading from 'src/components/Loading';


const DisplayQuizOrLoading = ({ loading }) => (
  // If loading is true then render the component Loading, if not Quiz
  loading ? <Loading /> : <Quiz />
);

export default DisplayQuizOrLoading;

DisplayQuizOrLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
