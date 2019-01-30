/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Field from 'src/components/Login/Field';
import './style.scss';
/**
 * Code
 */
const UserProfile = () => (
  <div id="profile">
    <div id="profile-edit">
      <h2>Tu veux modifier quelque chose</h2>
      <form>
        <Field
          // handleInputChange={handleInputChange}
          // value={inputPseudo}
          name="inputPseudo"
          type="text"
          placeholder="Votre Pseudo"
        />
        <Field
          // handleInputChange={handleInputChange}
          // value={inputEmail}
          name="inputEmail"
          type="text"
          placeholder="Votre Email"
        />
        <Field
          // handleInputChange={handleInputChange}
          // value={inputPassword}
          name="inputPassword"
          type="password"
          placeholder="Mot de Passe"
        />
      </form>
    </div>
    <div id="profile-themes">
      <h2>Tes thèmes préférés?</h2>
      <form>
        <Field
          // handleInputChange={handleInputChange}
          // value={inputPassword}
          name="inputTheme1"
          type="text"
          placeholder="Thème n°1"
        />
        <Field
          // handleInputChange={handleInputChange}
          // value={inputPassword}
          name="inputTheme2"
          type="text"
          placeholder="Thème n°2"
        />
        <Field
          // handleInputChange={handleInputChange}
          // value={inputPassword}
          name="inputTheme3"
          type="text"
          placeholder="Thème n°3"
        />
      </form>
    </div>
    <div id="profile-scores">
      <h2>Tes scores</h2>
      <h3>Jeux</h3>
      <ul>
        <li>Snake: </li>
        <li>Casse Brique: </li>
        <li>Bomber:  </li>
      </ul>
      <h3>Quiz</h3>
      <ul>
        <li>Quiz n°1 </li>
        <li>Quiz n°2 </li>
        <li>Quiz n°3  </li>
      </ul>
    </div>
  </div>
);


/**
 * Export
 */
export default UserProfile;
