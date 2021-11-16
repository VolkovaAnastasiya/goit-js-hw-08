import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const newImgArray = ({ preview, original, description }) => {
  return `
  <div><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      alt = "${description}"/>
  </a></div>
  `;
};

const imageMarkup = galleryItems.map(newImgArray).join('');
galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
