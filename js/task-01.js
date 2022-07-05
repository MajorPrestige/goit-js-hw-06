const categoriesItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemEl.length);

categoriesItemEl.forEach(el => {
	const searchTitle = el.querySelector("h2");
	console.log("Category:", searchTitle.textContent);
	const numbersOfList = el.querySelectorAll("ul > li");
	console.log("Elements:", numbersOfList.length);
});
