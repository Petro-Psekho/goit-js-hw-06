// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// 1) Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3) Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector('#value');

counterValue.textContent = 0;
console.log(counterValue);

const counterButtonRef = document.querySelectorAll('button');

// counterButtonRef[0].addEventListener('click', counterButtonDecrementRef);

// function counterButtonDecrementRef() {
//   counterValue.innerHTML -= 1;
// }

// counterButtonRef[1].addEventListener('click', counterButtonIncrementRef);

// function counterButtonIncrementRef() {
//   counterValue.innerHTML++;
// }

const counterButtonDecrementRef = counterButtonRef[0];
console.log(counterButtonDecrementRef);

const counterButtonIncrementRef = counterButtonRef[1];
console.log(counterButtonIncrementRef);

counterButtonDecrementRef.addEventListener('click', () => {
  counterValue.innerHTML -= 1;
  console.log(counterValue.textContent);
});

counterButtonIncrementRef.addEventListener('click', () => {
  counterValue.innerHTML++;
  console.log(counterValue.textContent);
});
