const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn-right');
const prevButton = document.querySelector('.btn-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

// Update slide position, active class, and active dot indicator
const updateCarousel = (index) => {
  // Move the track by shifting it left based on index
  track.style.transform = `translateX(-${index * 100}%)`;
  
  // Manage active slide state
  document.querySelector('.carousel-slide.active').classList.remove('active');
  slides[index].classList.add('active');

  // Manage active dot state
  document.querySelector('.indicator.active').classList.remove('active');
  dots[index].classList.add('active');
};

// Handle Right Button Click (Next)
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel(currentIndex);
});

// Handle Left Button Click (Previous)
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
});

// Handle Dot Indicator Click
dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;

  currentIndex = dots.indexOf(targetDot);
  updateCarousel(currentIndex);
});

// Optional: Autoplay Functionality
let autoplay = setInterval(() => nextButton.click(), 5000);

// Pause autoplay when hovering over the carousel
document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(autoplay));
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
  autoplay = setInterval(() => nextButton.click(), 5000);
});