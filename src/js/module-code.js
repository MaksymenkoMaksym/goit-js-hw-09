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


