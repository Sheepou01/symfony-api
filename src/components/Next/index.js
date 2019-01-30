/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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
    return (
      randomTopito(index)
    );
  }
  return (
    <div id="next">
      <Button onClick={handleClick}>
      Next
        <Icon name="chevron right" size="huge" />
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
