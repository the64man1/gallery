const newPieceFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const details = document.querySelector('#details').value.trim();
  const price = document.querySelector('#price').value.trim();
  const image = document.querySelector('#image').files[0];

  let fd = new FormData();
  fd.append('title', title);
  fd.append('details', details);
  fd.append('price', price);
  fd.append('image_data', image, `${image.name}`);
  
  if (title && details && image && price) {
    const response = await fetch(`/api/paintings`, {
      method: 'POST',
      body: fd,
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile/listed');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.new-piece-form')
  .addEventListener('submit', newPieceFormHandler);
