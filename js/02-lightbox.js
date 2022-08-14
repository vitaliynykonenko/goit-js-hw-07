import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");
const imgGallery = createImagesMarkup(galleryItems);
imgContainer.insertAdjacentHTML("beforeend", imgGallery);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>;

    </li>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


