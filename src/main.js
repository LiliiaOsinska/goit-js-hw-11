import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGallery } from './js/render-functions.js';
import { pixabayCreate } from './js/pixabay-api.js';

const form = document.querySelector('.gallery-form');
export const galleryImages = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

form.addEventListener('submit', getPhoto);

function getPhoto(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a correct query' });
    return;
  }

  galleryImages.innerHTML = '';
  loader.classList.remove('hidden');

  pixabayCreate(query)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          title: '',
          backgroundColor: 'red',
          messageColor: 'white',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(data.hits);
      form.reset();
    })
    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        message: error.message,
      });
    })
    .finally(() => loader.classList.add('hidden'));
}
