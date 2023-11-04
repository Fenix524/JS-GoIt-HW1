const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('ul#ingredients');
const elList = [];

ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;

  elList.push(item);
  console.log(item);
});

ingredientsList.append(...elList);