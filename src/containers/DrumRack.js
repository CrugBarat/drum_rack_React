import React, {Component, Fragment} from 'react';
import getSound from '../helpers/soundMap.js';
import {SoundArray} from '../config/SoundArray.js';
import SoundSelect from '../components/SoundSelect';


class DrumRack extends Component {
  constructor() {
    super();

    this.state = {
      bpm: 90,
      sound: null,
      playing: false,
      sounds: SoundArray
    }

    this.onStartStop = this.onStartStop.bind(this);
    this.onReduceBPM = this.onReduceBPM.bind(this);
    this.onIncreaseBPM = this.onIncreaseBPM.bind(this);
    this.handleSoundSelect = this.handleSoundSelect.bind(this);
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

  handleSoundSelect(name) {
    let sound = getSound(name);
    this.setState({sound: new Audio(sound)});
  }

  render() {
    return (
      <Fragment>
        <div className="drum-rack-container">
          <div className="bpm-container">
            <h1>{this.state.bpm} bpm</h1>
          </div>
          <div className="button-container">
            <button onClick={this.onReduceBPM}>-</button>
            <button onClick={this.onStartStop}>Start/Stop</button>
            <button onClick={this.onIncreaseBPM}>+</button>
          </div>
          <div>
            <SoundSelect sounds={this.state.sounds} onSoundSelect={this.handleSoundSelect}/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default DrumRack;
