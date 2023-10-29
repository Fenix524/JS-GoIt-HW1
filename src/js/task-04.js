const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const mainCounter = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener("click", () => changeCounter(decrement));
incrementBtn.addEventListener("click", () => changeCounter(increment));

function changeCounter(fun) {
  counterValue = fun(counterValue);
  mainCounter.textContent = counterValue;
}

function decrement(counter) {
  return counter - 1;
}

function increment(counter) {
  return counter + 1;
}
