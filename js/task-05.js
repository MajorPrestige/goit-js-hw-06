const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
	if (inputEl.value === "") {
		return (userNameEl.textContent = "Anonymous");
	}
	userNameEl.textContent = inputEl.value;
});
