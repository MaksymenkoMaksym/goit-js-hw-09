import { fromGoItConvertMs, addLeadingZero, resetTimer } from './module-code.js';

// Елементи в документі
const inputDate = document.querySelector('input');
const start = document.querySelector('button');
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
//Константи
const CURRENT_MS_FROM_1970 = Date.now();
let date = new Date();
const ONE_SECOND = 1000;
// Прослуховувачі подій
inputDate.addEventListener('input', handlerDate);
inputDate.addEventListener('click', dateTimeLocal)
start.addEventListener('click', onClickStart);


//Значення в інпуті на момент заходу на сторінку
let timerInput = window.setInterval(() => {
    let date = new Date();
    inputDate.value = date;
    // inputDate.value = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}, ONE_SECOND);


console.log(inputDate.value);
function handlerDate(params) {
    date = new Date(this.value);
    const selectedTimeInMs = date.getTime();
    if (selectedTimeInMs < CURRENT_MS_FROM_1970) {
        alert("Please choose a date in the future")
        return
    }
}

function onClickStart() {
    if (inputDate.value <= CURRENT_MS_FROM_1970) {
        return;
    }

    const idTimer = setInterval(() => {
        let totalSec = Math.floor((date.getTime() - Date.now()) / ONE_SECOND);

        let obj = fromGoItConvertMs(totalSec);
        console.log(obj);
        const totalMin = Math.floor(totalSec / 60);
        const totalHr = Math.floor(totalMin / 60);
        const totalDays = Math.floor(totalHr / 24);

        seconds.textContent = totalSec - (totalMin * 60);
        minutes.textContent = totalMin - (totalHr * 60);
        hours.textContent = totalHr - totalDays * 24;
        days.textContent = totalDays;

        if (totalSec === 0) {
            clearTimeout(idTimer);
        }
    }, ONE_SECOND);

}

function dateTimeLocal() {
    inputDate.type = "datetime-local"
}