import React, {Component, Fragment} from 'react';
import sound from '../assets/audio/sound.wav';

class Metronome extends Component {
  constructor() {
    super();

    this.state = {
      bpm: 90,
      sound: new Audio(sound),
      playing: false
    }

    this.onStartStop = this.onStartStop.bind(this);
    this.onReduceBPM = this.onReduceBPM.bind(this);
    this.onIncreaseBPM = this.onIncreaseBPM.bind(this);
  }

  onStartStop() {
    if(this.state.playing === false) {
      this.intervalID = setInterval(() => this.state.sound.play(), (60000/this.state.bpm));
      this.setState({playing: true})
    } else {
      clearInterval(this.intervalID);
      this.setState({playing: false});
    }
  }

  onReduceBPM() {
    let bpm = this.state.bpm;
    this.setState({bpm: bpm - 1});
  }

  onIncreaseBPM() {
    let bpm = this.state.bpm;
    this.setState({bpm: bpm + 1});
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.bpm} bpm</h1>
        <button onClick={this.onReduceBPM}>-</button>
        <button onClick={this.onStartStop}>Start/Stop</button>
        <button onClick={this.onIncreaseBPM}>+</button>
      </Fragment>
    )
  }
}

export default Metronome;
