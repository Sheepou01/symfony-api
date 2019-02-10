/**
 * Npm import
 */
import React, { Component } from 'react';
import classnames from 'classnames';
/**
 * Local import
 */

import './style.scss';
// import Bomber from './Bomber';
import Snake from './Snake';

/**
 * Code
 */

class Game extends React.Component {
  componentDidMount() {
    const { startTimer } = this.props;
    startTimer();
  }

  handleLaunch = (evt) => {
    // evt.prevendefault();
    // console.log(evt.target);
    // this.setState({
    //   launchGame: !this.state.launchGame,
    // });
    const { startTimer } = this.props;
    console.log(startTimer);
    const { launchGame } = this.props;
    // console.log(launchGame);
  }

  render() {
    const { launchGame } = this.props;
    return (
      <div id="snake">
        <div
          id="test"
          onClick={this.handleLaunch} >
          <a
            href="javascript:location.reload(true)"
            className={classnames({
              gameLaunch: true,
              gameClose: launchGame,
            })}
          >Lancer le Jeu ?
          </a>
        </div>


        <Snake />
      </div>
    );
  }
}
//

/**
 * Export
 */
export default Game;
