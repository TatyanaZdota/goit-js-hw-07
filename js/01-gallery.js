import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarup(galleryItems)
);

function createGalleryItemsMarup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
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
    `;
    })
    .join("");
}

/*galleryEl.addEventListener("click", onGalleryElClick);*/
