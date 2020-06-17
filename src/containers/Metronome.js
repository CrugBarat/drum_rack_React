import React, {Component, Fragment} from 'react';
import sound from '../assets/audio/sound.wav';

class Metronome extends Component {
  constructor() {
    super();

    this.state = {
      bpm: 90,
      sound: new Audio(sound)
    }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    setInterval(() => this.state.sound.play(), (60000/this.state.bpm));
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.bpm}</h1>
        <button onClick={this.onButtonClick}>Start/Stop</button>
      </Fragment>
    )
  }
}

export default Metronome;
