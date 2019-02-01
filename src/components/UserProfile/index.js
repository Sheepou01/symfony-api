/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Field from 'src/components/Login/Field';
import { Input, Button } from 'semantic-ui-react';
import ThemeList from './ThemeList';
import './style.scss';
/**
 * Code
 */
const UserProfile = ({ themes, userFavTheme, idFavoriteTheme }) => {

  const handleChange = (e) => {
    console.log(e);
    // return (
    //   userFavTheme(value)
    // );
  }

  return (
    <div id="profile">
      <div id="profile-edit">
        <h2>Tu veux modifier quelque chose</h2>
        <form className="form-edit">
          <Field
            // handleInputChange={handleInputChange}
            // value={inputPseudo}
            name="inputPseudo"
            type="text"
            placeholder="Votre Pseudo"
          />
          <Button icon="check" />
        </form>
        <form className="form-edit">
          <Field
            // handleInputChange={handleInputChange}
            // value={inputEmail}
            name="inputEmail"
            type="text"
            placeholder="Votre Email"
          />
          <Button icon="check" />
        </form>
        <form className="form-edit">
          <Field
            // handleInputChange={handleInputChange}
            // value={inputPassword}
            name="inputPassword"
            type="password"
            placeholder="Mot de Passe"
          />
          <Button icon="check" />
        </form>
      </div>
      <div id="profile-themes">
        <h2>Tes thèmes préférés?</h2>
        <form>
          <select name="" id="">
            <option value="">Choisi un thème</option>
            {themes.map(theme => <option value={theme.value}>{theme.text}</option>)}
          </select>
        </form>
        <ThemeList userFavTheme={userFavTheme} themes={themes} idFavoriteTheme={idFavoriteTheme} />
        <ThemeList userFavTheme={userFavTheme} themes={themes} idFavoriteTheme={idFavoriteTheme} />
        <form>
          <Field
            // handleInputChange={handleInputChange}
            // value={inputPassword}
            name="inputTheme2"
            type="text"
            placeholder="Thème n°2"
          />
        </form>
        <form>
          <Field
            // handleInputChange={handleInputChange}
            // value={inputPassword}
            name="inputTheme3"
            type="text"
            placeholder="Thème n°3"
          />
        </form>
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
