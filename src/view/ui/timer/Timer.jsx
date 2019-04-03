import React, { Component } from 'react';
import TimerBar, { TimerContainer } from './TimerBar';
import * as TimeService from '../../../services/TimeService';

class Timer extends Component {
  state = {
    currentTime: this.props.timeInSeconds
  };

  interval = setInterval(() => {
    return this.state.currentTime > 0
      ? this.setState(prevState => ({ currentTime: prevState.currentTime - 1 }))
      : this.endTimer();
  }, 1000);

  getRemainingPercentage() {
    const { currentTime } = this.state;
    const { timeInSeconds } = this.props;

    return (currentTime / timeInSeconds) * 100;
  }

  endTimer() {
    const { onEndTimer } = this.props;

    if (onEndTimer) onEndTimer();
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <TimerContainer>
        Remaining time: {TimeService.secondsToMinutes(currentTime)}
        <TimerBar percentage={this.getRemainingPercentage()} />
      </TimerContainer>
    );
  }
}

export default Timer;
