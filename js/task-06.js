const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
	if (inputEl.value.length < inputEl.dataset.length) {
		inputEl.classList.remove("valid");
		return inputEl.classList.add("invalid");
	}
	inputEl.classList.remove("invalid");
	inputEl.classList.add("valid");
});
