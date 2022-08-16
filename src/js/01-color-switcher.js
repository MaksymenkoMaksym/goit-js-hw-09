import { getRandomHexColor } from './module-code';


const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;

start.addEventListener('click', onClickStart)
stop.addEventListener('click', onClickStop)

function onClickStart() {
    // 1 Спосіб
    // this.nextElementSibling.removeAttribute('disabled');
    // this.setAttribute('disabled', true);
    // 2 Спосіб
    this.nextElementSibling.disabled = false;
    this.disabled = true;
    timerId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
}

function onClickStop() {
    // 1 Спосіб
    // this.setAttribute('disabled', true);
    // this.previousElementSibling.removeAttribute('disabled');
    // 2 Спосіб
    this.previousElementSibling.disabled = false;
    this.disabled = true;
    clearTimeout(timerId);
}


