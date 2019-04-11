/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

/**
 * Local import
 */

/**
 * Code
 */
const Settings = ({
  menuDisplay,
  menuOppenned,
  isAuthenticated,
  logout,
}) => {
  // Action which start when the first click on the menu -> state menu openned? true or false
  const handleMenuDisplay = () => {
    menuDisplay();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      onClick={handleMenuDisplay}
      className={classnames({
        open: true,
        oppenned: menuOppenned,
      })}
    >
      <span className="cls" />
      <span>
        {!isAuthenticated
          ? (
            <ul className="sub-menu ">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/connexion">Se Connecter</NavLink>
              </li>
            </ul>
          )
          : (
            <ul className="sub-menu ">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/mon-profil">Mon Profil</NavLink>
              </li>
              <li>
                <NavLink to="">Classements</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={handleLogout}>Deconnexion</NavLink>
              </li>
            </ul>
          )
        }
      </span>
      <span className="cls" />
    </div>
  );
};

Settings.propTypes = {
  menuDisplay: PropTypes.func.isRequired,
  menuOppenned: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Settings;
