import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");
const itemGallery = [];
galleryItems.map(element => {
    itemGallery.push(
        `<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
    )
},);
const resultGallery = itemGallery.join('');

divGallery.insertAdjacentHTML("beforeend", resultGallery);

divGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    document.removeEventListener("keydown", onEscDown);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`,
        {
            onClose: (instance) => {
                document.removeEventListener("keydown", onEscDown);
            }
        }
    );

    instance.show();
    
    document.addEventListener("keydown", onEscDown);
    
    function onEscDown(event) {

        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onEscDown);
        }
    };
}

console.log(galleryItems);
