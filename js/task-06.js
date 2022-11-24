// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);
// console.log(inputRef.attributes);
// console.log(inputRef.dataset.length);
// console.log(inputRef.type);

// inputRef.addEventListener('blur', onInputBlur);
// const dataLength = String(inputRef.dataset.length);
// console.log(dataLength);
// const inputLength = String(inputRef.value.length);
// console.log(inputLength);

// console.log(inputLength === dataLength);

// function onInputBlur() {
//   console.log(String(inputRef.value.length));
//   console.log(String(inputRef.dataset.length));
//   console.log(inputRef);
//   console.log(inputLength === dataLength);

//   // inputRef.dataset.length === inputRef.value.length
//   //   ? inputRef.classList.add('valid')
//   //   : inputRef.classList.add('invalid');

//   if (String(inputRef.value.length) === String(inputRef.dataset.length)) {
//     console.log(
//       String(inputRef.value.length) === String(inputRef.dataset.length),
//     );
//     inputRef.classList.add('valid');
//   }
//   inputRef.classList.toggle('invalid');
// }

inputRef.addEventListener('blur', onInputBlur);
const dataLength = String(inputRef.dataset.length);
console.log(dataLength);
const inputLength = String(inputRef.value.length);
console.log(inputLength);

console.log(inputLength === dataLength);

function onInputBlur() {
  console.log(String(inputRef.value.length));
  console.log(String(inputRef.dataset.length));
  console.log(inputRef);
  console.log(inputLength === dataLength);

  // inputRef.dataset.length === inputRef.value.length
  //   ? inputRef.classList.add('valid')
  //   : inputRef.classList.toggle('invalid');

  if (String(inputRef.value.length) === String(inputRef.dataset.length)) {
    console.log(
      String(inputRef.value.length) === String(inputRef.dataset.length),
    );
    inputRef.classList.add('valid');
  }
  inputRef.classList.toggle('invalid');
}
