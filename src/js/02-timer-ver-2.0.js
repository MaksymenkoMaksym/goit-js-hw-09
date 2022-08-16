import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fromGoItConvertMs, addLeadingZero, resetTimer } from './module-code.js';


const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button'),

    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

const UNIX_TIME = new Date().getTime();
const ONE_SECOND = 1000;

let timerId = null;

refs.startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            Notify.failure("Please choose a date in the future");
            return
        }
        refs.startButton.disabled = false;
        resetTimer(timerId, refs);
    },
};

let form = flatpickr(refs.inputDate, options);

refs.startButton.addEventListener('click', onClickStart);


function onClickStart() {
    refs.startButton.disabled = true;

    let result = new Date(refs.inputDate.value).getTime() - UNIX_TIME;
    // Спосіб № 1 ---  використовуєм ----  setInterval
    // let timerId = setInterval(function tick() {
    //     let { seconds: s, minutes: m, hours: h, days: d } = fromGoItConvertMs(result -= ONE_SECOND);


    //     // console.log('result', result);

    //     seconds.textContent = s;
    //     minutes.textContent = m;
    //     hours.textContent = h;
    //     days.textContent = d;

    //     if (!s && !m && !h && !d) {
    //         clearInterval(timerId);
    //          console.log('Вбиваєм таймер');
    //     };

    // }, ONE_SECOND, result);



    // Спосіб № 2 ---  використовуєм ---- Рекурсивний setTimeout (вкладений setTimeout )
    timerId = setTimeout(function tick() {
        let { seconds: s, minutes: m, hours: h, days: d } = fromGoItConvertMs(result -= ONE_SECOND);

        refs.seconds.textContent = addLeadingZero(s);
        refs.minutes.textContent = addLeadingZero(m);
        refs.hours.textContent = addLeadingZero(h);
        refs.days.textContent = addLeadingZero(d);

        timerId = setTimeout(tick, ONE_SECOND, result);

        if (!s && !m && !h && !d) {
            clearInterval(timerId);
            console.log('Вбиваєм таймер');
        };
    }, ONE_SECOND, result);
}


