/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { goToTop } from 'react-scrollable-anchor';


/**
 * Local import
 */
import './style.scss';
/**
 * Code
 */
const Next = ({ randomTopito, topitosList }) => {
  function handleClick() {
    const index = topitosList.map(item => item.id);
    goToTop();
    return (
      randomTopito(index)
    );
  }
  return (
    <div id="next">
      <Button onClick={handleClick} className="next-wiki">
        Suivant
        <Icon name="chevron right" size="large" />
      </Button>
    </div>
  );
};

Next.propTypes = {
  randomTopito: PropTypes.func.isRequired,
  topitosList: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default Next;
