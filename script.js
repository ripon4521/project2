function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "flex";
    }
}

function closeMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.style.display = "none";
}






const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  currentIndex = index;
  const slideWidth = slides[0].offsetWidth;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  const visibleSlides = Math.floor(carousel.offsetWidth / slideWidth);
  const maxIndex = slides.length - visibleSlides;
  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
  showSlide(currentIndex);
}

window.addEventListener('resize', updateCarousel);

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  showSlide(currentIndex);
});

function startAutoSlide() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 2000); // Auto slide every 2 seconds
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();
updateCarousel();







