const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById('ingredients');
const element = ingredients.map(ingredient  => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item') ;
  return liEl;
})
ingredientsEl.append(...element);
console.log(ingredientsEl);