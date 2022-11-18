// Напиши скрипт, який:

// 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// 2) Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення:

//* Number of categories: 3

//* Category: Animals
//* Elements: 4

//* Category: Products
//* Elements: 3

//* Category: Technologies
//* Elements: 5

const numberCategoriesRef = document.querySelectorAll('h2');
const elementsRef = document.querySelectorAll('.item');
// const numberElementsRef = elementsRef.querySelectorAll('ul');
console.log(elementsRef.lastElementChild);

console.log('Number of categories:', numberCategoriesRef.length); // Number of categories: 3
console.log('Category:', numberCategoriesRef[0].textContent); // Category: Animals
console.log('Elements:', numberCategoriesRef[0].length); // Elements: 4

console.log('Category:', numberCategoriesRef[1].textContent); // Category: Products
console.log('Elements:', numberCategoriesRef[0].length); // Elements: 3

console.log('Category:', numberCategoriesRef[2].textContent); // Category: Technologies
console.log('Elements:', numberCategoriesRef[0].length); // Elements: 5

// const nameCategory = document.querySelectorAll()
