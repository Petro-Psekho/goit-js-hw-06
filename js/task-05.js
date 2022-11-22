// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

//----------------------------------------------------------------------

// const inputRef = document.querySelector('#name-input');
// console.log(inputRef);

// const nameLabelRef = document.querySelector('#name-output');
// console.log(nameLabelRef);

// inputRef.addEventListener('input', event => {
//   console.log(event.currentTarget.value);
//   nameLabelRef.textContent = event.currentTarget.value;
// });

//----------------------------------------------------------------------

const inputRef = document.querySelector('#name-input');
console.log(inputRef.attributes);
inputRef.textContent = '';
console.log(inputRef.textContent);

const nameLabelRef = document.querySelector('#name-output');
console.log(nameLabelRef);

inputRef.addEventListener('input', event => {
  console.log(event.currentTarget.value);
  if ((inputRef.textContent = '')) {
    nameLabelRef.innerHTML = 'Anonymous1111';
  }

  //   nameLabelRef.textContent = event.currentTarget.value;
  //   inputRef.attributes.placeholder.value = event.currentTarget.value;

  //   if ((inputRef.attributes.placeholder.value = 'Please enter your name')) {
  //     nameLabelRef.textContent = event.currentTarget.value;
  //     inputRef.attributes.placeholder.value = event.currentTarget.value;
  //     console.log(inputRef.attributes.placeholder.value);
  //   } else if ((inputRef.textContent = '')) {
  //     nameLabelRef.innerHTML = 'Anonymous1111';
  //   }
});

//   nameLabelRef.innerHTML = 'Anony11111mous';
