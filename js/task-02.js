// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2) Додасть назву інгредієнта як його текстовий вміст.
// 3) Додасть елементу клас item.
// 4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

// const ingredient = ingredients.map(ingredient => {
//   const ingredientsRef = document.createElement('li');
//   ingredientsRef.classList = 'item';
//   ingredientsRef.textContent = ingredient;

//   return ingredientsRef;
// });

// console.log(ingredient);

// ingredientsRef.append(...ingredient);

const makeIngredients = ingredient => {
  return ingredient.map(ingredient => {
    const ingredientsRef = document.createElement('li');
    ingredientsRef.classList = 'item';
    ingredientsRef.textContent = ingredient;

    return ingredientsRef;
  });
};

const ingredient = makeIngredients(ingredients);
ingredientsRef.append(...ingredient);
