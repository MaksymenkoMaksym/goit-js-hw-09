

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),

  submit: document.querySelector('[type="submit"]'),
};

const { firstDelay, step, amount, submit } = refs;

/*
Напиши скрипт, который при сабмите формы вызывает функцию 
createPromise(position, delay) столько раз, 
сколько ввели в поле amount. 
При каждом вызове передай ей номер создаваемого промиса (position) 
и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).
*/

submit.addEventListener('click', createPromise)


function createPromise(posiion, { value: fD } = firstDelay) {
  event.preventDefault();
  const { value: stepDelay } = step;
  const { value: number } = amount;

  let n = 0;
  if (+number <= 0) {
    return
  }

  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

    n += 1;

    if (shouldResolve) {
      // Fulfill
      console.log(`Goodaaa !!!!!!!${n}`);
    } else {
      // Reject
      console.log(`OOPS${n}`);
    };

  }, +fD)



  const idTimer = setInterval(() => {
    const shouldResolve = Math.random() > 0.3;

    n += 1;

    if (n === +number) {
      clearInterval(idTimer);
    }

    if (shouldResolve) {
      // Fulfill
      console.log(`Goodaaa !!!!!!!${n}`);
    } else {
      // Reject
      console.log(`OOPS${n}`);
    };

  }, (+fD + +stepDelay))

}

