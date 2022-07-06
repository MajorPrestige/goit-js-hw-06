let counterValue = 0;
const plusOneBtnEl = document.querySelector('[data-action="increment"]');
const minusOneBtnEl = document.querySelector('[data-action="decrement"]');
const resultEl = document.querySelector("#value");

plusOneBtnEl.addEventListener("click", () => (resultEl.textContent = counterValue += 1));
minusOneBtnEl.addEventListener("click", () => (resultEl.textContent = counterValue -= 1));
