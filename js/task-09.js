function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chageColorBtnEl = document.querySelector(".change-color");
const backgroundColorTextEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

chageColorBtnEl.addEventListener("click", () => {
	backgroundColorTextEl.textContent = `${getRandomHexColor()}`;
	bodyEl.style.backgroundColor = getRandomHexColor();
});
