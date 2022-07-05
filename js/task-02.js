const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingridientsListEl = document.querySelector("#ingredients");

const ingridientsItemListEl = ingredients.map(el => {
	const ingridientsItemEl = document.createElement("li");
	ingridientsItemEl.classList.add("item");
	ingridientsItemEl.textContent = el;

	return ingridientsItemEl;
});

ingridientsListEl.append(...ingridientsItemListEl);
