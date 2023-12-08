const slides = document.querySelectorAll("#slideshow-container img");

slides.forEach(slide => slide.style.display = "block");

document.getElementById("slideshow-title").addEventListener("dblclick", () => {
    slides.forEach((slide, index) => slide.style.display = 0 === index ? "block" : "none");
    setInterval(showNextSlide, 3000)
});

let currentIndex = 0;

const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
};

const showSlide = (index) => {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
};