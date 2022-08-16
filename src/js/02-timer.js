import { myConverterMs, addLeadingZero, resetTimer, error, success } from './module-code.js';

// Елементи в документі
const inputDate = document.querySelector('input');
const start = document.querySelector('button');

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
//Константи
const CURRENT_MS_FROM_1970 = Date.now();
const ONE_SECOND = 1000;
// Змінні
let isInFuture = false;
let date = null;
let notifyId = null;
// Прослуховувачі подій
inputDate.addEventListener('input', handlerDate);
inputDate.addEventListener('click', dateTimeLocal)
start.addEventListener('click', onClickStart);


//Значення в інпуті на момент заходу на сторінку
let timerInput = window.setInterval(() => {
    let date = new Date();
    // inputDate.value = date;
    inputDate.value = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}, ONE_SECOND);
//
start.disabled = true;


function handlerDate(params) {
    date = new Date(this.value);
    const selectedTimeInMs = date.getTime();

    if (selectedTimeInMs < CURRENT_MS_FROM_1970) {
        error("Please choose a date in the future", notifyId);
        start.disabled = true;
        return
    }
    success("GOOD!!! You are # 1 😎", notifyId);
    start.disabled = false;
}

function onClickStart() {

    if (inputDate.value <= CURRENT_MS_FROM_1970) {
        return;
    }

    const idTimer = setInterval(() => {
        let { ss, mm, hh, dd, timeToGo: ttg } = myConverterMs(ONE_SECOND, date);

        seconds.textContent = addLeadingZero(ss);
        minutes.textContent = addLeadingZero(mm);
        hours.textContent = addLeadingZero(hh);
        days.textContent = addLeadingZero(dd);

        if (ttg === 0) {
            clearTimeout(idTimer);
        }
    }, ONE_SECOND);

}

function dateTimeLocal() {
    inputDate.type = "datetime-local";
    clearInterval(timerInput);
}
