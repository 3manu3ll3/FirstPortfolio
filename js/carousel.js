const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const itemsCount = items.length;
const itemWidth = items[0].clientWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
const visibleItemsCount = Math.floor(container.clientWidth / itemWidth);

nextBtn.addEventListener('click', () => {
  const maxIndex = itemsCount - visibleItemsCount;
  if (currentIndex < maxIndex) {
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});
