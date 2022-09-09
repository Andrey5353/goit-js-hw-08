import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-item'

const savedTime = localStorage.getItem(STORAGE_KEY) || 0;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
};
player.setCurrentTime(savedTime);