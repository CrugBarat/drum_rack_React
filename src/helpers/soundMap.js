import tick from '../assets/audio/tick.wav';
import beep from '../assets/audio/beep.wav';
import chirp from '../assets/audio/chirp.wav';
import blip from '../assets/audio/blip.wav';
import cat from '../assets/audio/cat.wav';
import dog from '../assets/audio/dog.wav';
import glug from '../assets/audio/glug.wav';

let sounds = {
    tick,
    beep,
    chirp,
    blip,
    cat,
    dog,
    glug
};

function getSound(key) {
    return sounds[key];
}

export default getSound;
