import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");
const itemGallery = [];
galleryItems.map(element => {
    itemGallery.push(
        `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
    )
},);
const resultGallery = itemGallery.join('');

divGallery.insertAdjacentHTML("beforeend", resultGallery);
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});
console.log(galleryItems);
