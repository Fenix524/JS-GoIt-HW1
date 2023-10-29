const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('ul#ingredients')
console.log(ingredientsList);
ingredients.forEach((ingredient) => {
  let item = document.createElement("li"); 
  console.log(item);
  item.classList.add("item")
  item.textContent = ingredient;

  ingredientsList.append(item)
})