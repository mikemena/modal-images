document.addEventListener('DOMContentLoaded', event => {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById('img01');
  var captionText = document.getElementById('imageHeader');

  // Get all the images in the gallery
  var images = document.querySelectorAll('.gallery-item img');

  // Loop through all the images
  images.forEach(img => {
    img.onclick = function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt; // Using "alt" attribute as the caption here
    };
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
});
