const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");

const title = document.getElementById("feature-title");
const text = document.getElementById("feature-text");

let active = 0;
let isAnimating = false;

function setupSlides() {

    slides.forEach(slide => {
        slide.classList.remove(
            "active",
            "prev",
            "next",
            "moving"
        );
    });

    const prevIndex =
        (active - 1 + slides.length) % slides.length;

    const nextIndex =
        (active + 1) % slides.length;

    slides[active].classList.add("active");

    slides[prevIndex].classList.add("prev");

    slides[nextIndex].classList.add("next");
}

nextBtn.addEventListener("click", () => {

    if(isAnimating) return;

    isAnimating = true;

    const prevIndex =
        (active - 1 + slides.length) % slides.length;

    const currentActive = slides[active];
    const prevSlide = slides[prevIndex];

    // clear all states first
    slides.forEach(slide => {
        slide.classList.remove(
            "active",
            "prev",
            "next",
            "animate-to-active"
        );
    });

    // force previous slide to LEFT blurred position
    prevSlide.classList.add("prev");

    // browser repaint
    void prevSlide.offsetWidth;

    // ONLY animate prev -> active
    prevSlide.classList.add("animate-to-active");

    // instantly hide current active
    currentActive.style.opacity = "0";

    setTimeout(() => {

        currentActive.removeAttribute("style");

        active = prevIndex;

        setupSlides();

        const activeSlide = slides[active];

        title.innerHTML =
            activeSlide.dataset.title;

        text.innerHTML =
            activeSlide.dataset.text;

        isAnimating = false;

    }, 200);

});

const popup =
    document.getElementById("projectPopup");

const closePopup =
    document.getElementById("closePopup");

const galleryItems =
    document.querySelectorAll(".gallery-grid img");

const popupImage =
    document.getElementById("popupImage");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        popup.classList.add("active");

        popupImage.src = item.src;

    });

});

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});