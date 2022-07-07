function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector('[type="number"]');
const randomBoxes = document.querySelector("#boxes");

const createBoxes = () => {
	const amount = Number(inputEl.value);
	const basicSize = 30;

	for (let i = 0; i < amount; i += 1) {
		const size = basicSize + i * 10;
		const elemDiv = document.createElement("div");
		elemDiv.style.width = `${size}px`;
		elemDiv.style.height = `${size}px`;
		elemDiv.style.backgroundColor = getRandomHexColor();
		randomBoxes.append(elemDiv);
	}
};

const destroyBoxes = () => {
	randomBoxes.innerHTML = "";
};

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);
