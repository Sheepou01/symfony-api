/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */
import Field from 'src/components/Login/Field';
import { Button } from 'semantic-ui-react';
import WelcomeMessage from './WelcomeMessage';
import ThemeList from './ThemeList';
import './style.scss';
/**
 * Code
 */
const UserProfile = ({
  themes,
  userFavTheme,
  idFavoriteTheme,
  isAuthenticated,
  username,
  userRole,
  editInputPseudo,
  editInputEmail,
  editInputPassword,
  editUser,
  handleInput,
  editInputTimer,
  editTimer,
  handleInputTimer,
  quizzScore,
}) => {
  // Function which will handle every changement on the inputs of the user
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(name, value);
  };
  // Function which will handle every changement on the input of the timer
  const handleInputTimerChange = (event) => {
    const { name, value } = event.target;
    handleInputTimer(name, value);
  };

  // Function which will handle the submit of the user's form (edit of the user details)
  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    // console.log(editInputPseudo);
    editUser(editInputPseudo, editInputEmail, editInputPassword);
  };

  // Function which will handle the submit of the Timer's form (edit of the time)
  const handleEditTimer = (evt) => {
    evt.preventDefault();
    editTimer((editInputTimer * 60));
  };


  return (
    <div id="profile">
      {/* Here is the message when the user is connected end redirected to his profile page */}
      {isAuthenticated ? <WelcomeMessage username={username} /> : ''}
      {userRole[0] === 'ROLE_ADMIN' ? <Button id="Button-admin"><a href="https://guillaume-marques.fr/admin/user">Interface Admin</a></Button> : ''}
      <div id="profile-edit">
        <h2>Tu veux modifier quelque chose?</h2>
        <form className="form-edit" onSubmit={handleEditSubmit}>
          <Field
            handleInputChange={handleInputChange}
            value={editInputPseudo}
            name="editInputPseudo"
            type="text"
            placeholder="Votre Pseudo"
          />
          <Field
            handleInputChange={handleInputChange}
            value={editInputEmail}
            name="editInputEmail"
            type="email"
            placeholder="Votre Email"
          />
          <Field
            handleInputChange={handleInputChange}
            value={editInputPassword}
            name="editInputPassword"
            type="password"
            placeholder="Mot de Passe"
          />
          <Button>Valider</Button>
        </form>
      </div>
      <div id="login-edit">
        <h2>Si tu le souhaites, tu peux modifier la durée du timer :</h2>
        <form className="form-edit" onSubmit={handleEditTimer}>
          <Field
            handleInputChange={handleInputTimerChange}
            value={editInputTimer}
            name="editInputTimer"
            type="number"
            placeholder="Entre le nombre de minutes"
          />
          <Button>Valider</Button>
        </form>
      </div>
      <div id="profile-theme">
        <h2>Ton thème préféré?</h2>
        <ThemeList
          userFavTheme={userFavTheme}
          themes={themes}
          idFavoriteTheme={idFavoriteTheme}
        />
      </div>
      <h2>Tes scores</h2>
      <div className="profile-scores">
        {/* We could show the scores of the games too if the games are coded with ReactJS
        <div className="scores">
          <h3>Jeux</h3>
          <ul>
            <li>Snake: <span>900</span></li>
            <li>Casse Brique: <span>900</span></li>
            <li>Bomber: <span>900</span></li>
          </ul>
        </div> */}
        <div className="scores">
          <h3>Tes 3 derniers quiz</h3>
          <ul>
            {quizzScore.map(quiz => <li key={quiz.id}>{quiz.title}: <p>{quiz.score} / 10</p></li>)}
          </ul>
        </div>
      </div>
      {/* <h2>Tu cherches quelqu'un?</h2>
      <Input
        className="inputSearch"
        icon="users"
        iconPosition="left"
        placeholder="Entre son pseudo"
      />
      <h2>Ses scores</h2>
      <div className="profile-scores">
        <div className="scores">
          <h3>Jeux</h3>
          <ul>
            <li>Snake: <span>900</span></li>
            <li>Casse Brique: <span>900</span></li>
            <li>Bomber: <span>900</span></li>
          </ul>
        </div>
        <div className="scores">
          <h3>Quiz</h3>
          <ul>
            <li>Quiz n°1: <span>900</span></li>
            <li>Quiz n°2: <span>900</span></li>
            <li>Quiz n°3:  <span>900</span></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

UserProfile.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  userFavTheme: PropTypes.func.isRequired,
  idFavoriteTheme: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  editInputPseudo: PropTypes.string.isRequired,
  editInputEmail: PropTypes.string.isRequired,
  editInputPassword: PropTypes.string.isRequired,
  editUser: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  editTimer: PropTypes.func.isRequired,
  editInputTimer: PropTypes.number.isRequired,
  handleInputTimer: PropTypes.func.isRequired,
  quizzScore: PropTypes.array.isRequired,
  userRole: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/**
 * Export
 */
export default UserProfile;
