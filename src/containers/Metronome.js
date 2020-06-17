import React, {Component, Fragment} from 'react';

class Metronome extends Component {
  constructor() {
    super();

    this.state = {
      bpm: 140
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.bpm}</h1>
        <button>Start</button>
        <button>Stop</button>
      </Fragment>
    )
  }
}

export default Metronome;
