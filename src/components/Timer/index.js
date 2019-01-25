/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import './style.scss';

/**
 * Code
 */


class TimerApp extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {count: 1}
  // }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // tick () {
  //   this.setState({count: (this.state.seconds + 1)})
  // }
  startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(this.props.decrementTimer(), 100)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div className='timer'>
        <h1>{this.props.seconds}</h1>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div>
      </div>
    )
  }
}


/**
 * Export
 */
export default TimerApp;
