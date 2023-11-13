import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>      
    `
    )
    .join("");
}

galleryEl.addEventListener("click", onGalleryElClick);
function onGalleryElClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) return;
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
