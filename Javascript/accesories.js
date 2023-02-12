const slides = document.querySelectorAll('.slide');
let index = 0;

function changeSlide() {
  slides[index].style.display = 'none';
  index = (index + 1) % slides.length;
  slides[index].style.display = 'flex';
}

setInterval(changeSlide, 2000);

