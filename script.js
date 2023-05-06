const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const images = container.children;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

function moveToImage(index) {
  container.style.transform = `translateX(-${index * imageWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex === totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  moveToImage(currentIndex);
});

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex--;
  }
  moveToImage(currentIndex);
});