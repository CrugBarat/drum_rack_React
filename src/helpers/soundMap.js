import beep from '../assets/audio/beep.wav';
import chirp from '../assets/audio/chirp.wav';
import blip from '../assets/audio/blip.wav';
import cat from '../assets/audio/cat.wav';
import dog from '../assets/audio/dog.wav';
import glug from '../assets/audio/glug.wav';
import kick from '../assets/audio/kick.wav';
import hat from '../assets/audio/hat.wav';
import tom from '../assets/audio/tom.wav';
import chatter from '../assets/audio/chatter.wav';
import zap from '../assets/audio/zap.wav';
import hloop from '../assets/audio/hloop.wav';

let sounds = {
    beep,
    chirp,
    blip,
    cat,
    dog,
    glug,
    kick,
    hat,
    tom,
    chatter,
    zap,
    hloop
};

function getSound(key) {
    return sounds[key];
}

export default getSound;
