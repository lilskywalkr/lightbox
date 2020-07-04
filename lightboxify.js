const box = document.createElement('div');
const boxImage = document.createElement('img');
box.className = 'lightbox';
box.appendChild(boxImage);

function lightboxify(parentElement) {
  parentElement.addEventListener('click', function(e) {
    if (e.target.className === 'lightbox-image') {
      boxImage.src = e.target.src;
      document.body.appendChild(box);
      document.querySelector('.lightbox-container').style.filter = 'blur(5px)';
    } else {
        if (document.querySelector('.lightbox')) {
        document.querySelector('.lightbox').remove();
        document.querySelector('.lightbox-container').style.filter = 'none';
      };
    };
  });
};

exports.lightboxify = lightboxify;
