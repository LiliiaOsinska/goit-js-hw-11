const API_KEY = '47491197-d7346e1a6b6c8bc0fb7fb6a4d';
const URL = 'https://pixabay.com/api/?key=' + API_KEY;

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    galleryImages.insertAdjacentHTML('afterbegin', createGallery(data));
  })
  .catch(() => {});
