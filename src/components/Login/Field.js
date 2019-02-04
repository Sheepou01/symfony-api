/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';


/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */

// Liste des props qui proviennent de Login
const Field = ({ name, type, placeholder, value, handleInputChange }) => (
  <div className="field">
    <Input
      className="field-input"
      name={name}
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  </div>
);

// PropTypes des props de Field
Field.propTypes = {
  // name: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // placeholder: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  // handleInputChange: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Field;
