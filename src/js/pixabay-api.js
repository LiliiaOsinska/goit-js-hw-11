export function pixabayCreate(query) {
  const API_KEY = '47491197-d7346e1a6b6c8bc0fb7fb6a4d';
  const URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
   return fetch(`${URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    
}
