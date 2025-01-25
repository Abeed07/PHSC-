// Slider Logic
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Initialize first slide
showSlide(currentIndex);


// Affiliates Section Logo Animation
let logos = document.querySelectorAll('.affiliate-logo');
let logoCount = 0;
let isScrolling = false;
const affiliatesSection = document.querySelector('.affiliates-section');

// Add no-scroll class initially to only affiliates section
affiliatesSection.classList.add('no-scroll');

// Scroll event listener for logo animation
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    let viewportHeight = window.innerHeight;
    let scrollY = window.scrollY;

    // Show logo when it's in view
    logos.forEach((logo, index) => {
      if (logo.getBoundingClientRect().top < viewportHeight - 50) {
        if (logoCount <= index) {
          logo.classList.add('show-logo');
          logoCount++;
        }
      }
    });

    // When all logos are shown, enable scrolling again for entire page
    if (logoCount === logos.length) {
      isScrolling = true;
      affiliatesSection.classList.remove('no-scroll'); // Allow scrolling on affiliates section again
    }
  }
});



