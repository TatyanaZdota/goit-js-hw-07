import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarup(galleryItems)
);

galleryEl.addEventListener("click", onGalleryElClick);

function createGalleryItemsMarup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
       <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>     
    `
    )
    .join("");
}

function onGalleryElClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) return;
  const modalImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
   <img src="${modalImg}"  width="800" height="600">
  `);
  instance.show();

  document.addEventListener("keydown", onDocumentKeydown);
  function onDocumentKeydown(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onDocumentKeydown);
    }
  }
}
