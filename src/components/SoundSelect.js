import React from 'react';

const SoundSelect = (props) => {
  const options = props.sounds.map((sound, index) => {
      return <option key={index} value={sound.name}>{sound.name}</option>
  });

  function handleChange(ev) {
    props.onSoundSelect(ev.target.value);
  }

  return (
    <select onChange={handleChange} defaultValue="default">
      <option value="default" disabled>Sounds</option>
      {options}
    </select>
  )
}

export default SoundSelect;
