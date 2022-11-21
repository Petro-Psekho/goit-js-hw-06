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
console.log(counterValue.textContent);

counterValue = Number((counterValue.textContent = 0));
console.log(counterValue);

const counterButtonRef = document.querySelectorAll('button');
console.log(counterButtonRef[0].dataset.action);

const counterButtonDecrementRef = counterButtonRef[0];
console.log(counterButtonDecrementRef);

const counterButtonIncrementRef = counterButtonRef[1];
console.log(counterButtonDecrementRef);

counterButtonDecrementRef.addEventListener('click', () => {
  counterValue -= 1;
  console.log(counterValue);
});
