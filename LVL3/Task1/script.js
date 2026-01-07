// Gallery Modal Functions
function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const img = element.querySelector('img');
    
    modal.classList.add('active');
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Slideshow Functions
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function goToSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
    slideInterval = setInterval(nextSlide, 3000);
}

// Auto-advance slideshow every 3 seconds
slideInterval = setInterval(nextSlide, 3000);