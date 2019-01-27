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
const Settings = ({ menuDisplay, menuOppenned }) => {  

  // Action qui se déclenche lors du clic sur le menu et qui met en place le state du men: open or not
  const handleStopPropagation = () => {
    menuDisplay();
  };

  return (
    <div
      onClick={handleStopPropagation}
      className={classnames({
        open: true,
        oppenned: menuOppenned,
      })}
    >
      <span className="cls" />
      <span>
        <ul className="sub-menu ">
          <li>
            <NavLink to="/mon-profil">Mon Profil</NavLink>
          </li>
          <li>
            <NavLink to="/mon-profil">Nous contacter</NavLink>
          </li>
          <li>
            <NavLink to="/mon-profil">Aide</NavLink>
          </li>
          <li>
            <NavLink to="/mon-profil">Classements</NavLink>
          </li>
        </ul>
      </span>
      <span className="cls" />
    </div>
  );
};

Settings.propTypes = {
  menuDisplay: PropTypes.func.isRequired,
  menuOppenned: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Settings;
