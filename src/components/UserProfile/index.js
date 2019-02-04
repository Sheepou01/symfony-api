/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Field from 'src/components/Login/Field';
import { Input, Button } from 'semantic-ui-react';
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
  editInputPseudo,
  editInputEmail,
  editInputPassword,
  editUser,
  handleInput,
}) => {

  const handleChange = (e) => {
    console.log(e);
    // return (
    //   userFavTheme(value)
    // );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(name, value);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    editUser(editInputPseudo, editInputEmail, editInputPassword)
  };

  return (
    <div id="profile">
      {isAuthenticated ? <WelcomeMessage username={username} /> : ''}
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
            type="text"
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
      </div>
      <h2>Tu cherches quelqu'un?</h2>
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
      </div>
    </div>
  );
};


/**
 * Export
 */
export default UserProfile;
