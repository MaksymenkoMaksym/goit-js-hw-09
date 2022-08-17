const makePromise = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
    .then(value => console.log(value)) //["promiseA value", "promiseB value"]
    .catch(error => console.log(error));
//=================================================
const makePromise2 = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    });
};

const promiseA2 = makePromise("promiseA2 value", 1000);
const promiseB2 = makePromise("promiseB2 value", 3000);

Promise.race([promiseA2, promiseB2])
    .then(value => console.log(value)) // "promiseA value"
    .catch(error => console.log(error));
//=============================================================
const makeGreeting = (guestName, onSuccess, onError) => {
    if (guestName === "" || guestName === undefined) {
        return onError("Guest name must not be empty");
    }
    onSuccess(`Welcome ${guestName}`);
};

makeGreeting(
    "Mango",
    greeting => console.log(greeting),
    error => console.error(error)
);


