const inputEmailEl = document.querySelector('[name="email"]');
const inputPassEl = document.querySelector('[name="password"]');
// const submitBtnEl = document.querySelector('[type="submit"]');
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (inputEmailEl.value === "" || inputPassEl.value === "") {
		return alert("Please fill in all the fields!");
	}

	console.log(`{Name: ${email.value}, Password: ${password.value}}`);
	event.currentTarget.reset();
}
