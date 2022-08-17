import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('[type="submit"]'),
};
const { firstDelay, step, amount, submit } = refs;

const onClick = (event) => {
  event.preventDefault();

  for (let i = 0; i < amount.value; i++) {
    const steps = +step.value * i;
    const ourDelay = +firstDelay.value + steps;
    createPromise(i, ourDelay).then(data => {
      return console.log(data)
    }).catch(v => {
      console.log(v)
    })
  }
};

submit.addEventListener('click', onClick)

function createPromise(num, delay) {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(Notify.failure(`Fulfilled promise ${num + 1} in ${delay}ms`));
      }
      else {
        reject(Notify.success(`Rejected promise ${num + 1} in ${delay}ms`));
      }
    }, delay)


  })

  return prom
}


