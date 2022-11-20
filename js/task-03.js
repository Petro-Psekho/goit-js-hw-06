// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

// const makeGalleryImages = image => {
//   return image.map(image => {
//     const galleryImageRef = document.createElement('img');
//     galleryImageRef.classList.add('gallery__img');
//     galleryImageRef.src = image.url;
//     galleryImageRef.alt = image.alt;
//     galleryImageRef.width = '350';

//     const galleryItemRef = document.createElement('li');
//     galleryItemRef.classList.add('gallery__item');

//     galleryItemRef.appendChild(galleryImageRef);

//     return galleryItemRef;
//   });
// };

// const makeGallery = makeGalleryImages(images);
// console.log(...makeGallery);

// galleryRef.append(...makeGallery);

const makeImagesGallery = image => {
  const { url, alt } = image;

  return `
  <li class="gallery__item">
    <img class="gallery__img" src = ${url} alt = ${alt} width="700"
  </li>
  `;
};

const galleryRef = document.querySelector('.gallery');

const makeGallerys = images.map(makeImagesGallery).join('');
console.log(makeGallerys);

galleryRef.insertAdjacentHTML('afterbegin', makeGallerys);
