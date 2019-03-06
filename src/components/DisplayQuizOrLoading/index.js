import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/components/Quiz';
import Loading from 'src/components/Loading';

// Si ce composant a un prop loading qui vaut true -> rendre composant loading

// Sinon rendre App
const DisplayQuizOrLoading = ({ loading }) => (
// console.log(quiz);
  loading ? <Loading /> : <Quiz />
);

export default DisplayQuizOrLoading;

DisplayQuizOrLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
