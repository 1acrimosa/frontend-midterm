//                   CAROUSEL JS                   //

let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const navButtons = document.querySelectorAll('.slider-nav a');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startAutoplay() {
    setInterval(nextSlide, 2090);
}

showSlide(currentIndex);
startAutoplay();


