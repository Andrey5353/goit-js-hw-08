import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const nameKey = 'videoplayer-current-item'

const savedTime = localStorage.getItem(nameKey) || 0;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(nameKey, data.seconds)
};
player.setCurrentTime(savedTime);