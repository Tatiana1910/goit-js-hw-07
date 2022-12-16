import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  let instance = basicLightbox.create(
    `
  <img
    class="gallery__image"
    src="${evt.target.dataset.source}"
    alt="${evt.target.alt}"
  />
`
  );

  instance.show();

  galleryEl.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
}
