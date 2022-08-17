export const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function fromGoItConvertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}


export function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

export function resetTimer(timerId, refs = {}) {
    clearInterval(timerId);
    //Ініціаізуєм парметр ф-ції і присвоюємо йому значеня обєкт за завмовченням
    // або записуємо в тіло ф-ції деструктур
    // const { days = 0, hours = 0, minutes = 0, seconds = 0 } = refs;
    refs.seconds.textContent = '00';
    refs.minutes.textContent = '00';
    refs.hours.textContent = '00';
    refs.days.textContent = '00';
}


export function myConverterMs(ONE_SECOND = 1, date = new Date) {

    let timeToGo = Math.floor((date.getTime() - Date.now()) / ONE_SECOND);
    const totalMin = Math.floor(timeToGo / 60);
    const totalHr = Math.floor(totalMin / 60);
    const totalDays = Math.floor(totalHr / 24);

    let ss = timeToGo - (totalMin * 60);
    let mm = totalMin - (totalHr * 60);
    let hh = totalHr - totalDays * 24;
    let dd = totalDays;

    return {
        ss,
        mm,
        hh,
        dd,
        timeToGo,
    }
}

export function error(text, notifyId = 0) {


    try {
        if (document.querySelector('[data-mesage]').classList.contains('.error-block')) {
            return
        };
        document.querySelector('.success-block').remove();
    } catch (error) {

    }
    const htmlText = `<div class="error-block" data-mesage><p class= "error-message">${text}</p></div>`;
    document.body.insertAdjacentHTML("afterbegin", htmlText);

    notifyId = setTimeout(() => { document.querySelector('.error-block')?.remove() }, 3000);
}

export function success(text, notifyId = 0) {

    try {
        if (document.querySelector('[data-mesage]').classList.contains('.success-block')) {
            return
        };
        document.querySelector('.error-block').remove();
    } catch (error) {

    }

    const htmlText = `<div class="success-block" data-mesage><p class= "success-message">${text}</p></div>`;
    document.body.insertAdjacentHTML("afterbegin", htmlText);

    notifyId = setTimeout(() => { document.querySelector('.success-block')?.remove() }, 3000);
}