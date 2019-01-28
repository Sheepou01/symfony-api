/**
 * Npm import
 */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


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
    )}
  return (
  <div id="next">
    <Button onClick={handleClick}>
      Next
      <Icon name="chevron right" size="huge" />
    </Button>
  </div>
)};

/**
 * Export
 */
export default Next;
