// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputFontSizeControlRef = document.querySelector('#font-size-control');
console.log(inputFontSizeControlRef);
console.log(inputFontSizeControlRef.min);
console.log(inputFontSizeControlRef.max);
console.log(inputFontSizeControlRef.value);

const spanText = document.querySelector('#text');
console.log(spanText);

inputFontSizeControlRef.addEventListener('input', changeFontSize);

function changeFontSize() {
  console.log(inputFontSizeControlRef.value);

  spanText.style.fontSize = inputFontSizeControlRef.value + 'px';
}
