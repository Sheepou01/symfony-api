import React from 'react';
import Quiz from 'src/components/Quiz';
import Loading from 'src/components/Loading';

// Si ce composant a un prop loading qui vaut true -> rendre composant loading

// Sinon rendre App

const DisplayQuizOrLoading = ({ loading, quiz }) => {
// console.log(quiz);
 return (

  loading ? <Loading /> : <Quiz />
)
 };

export default DisplayQuizOrLoading;
