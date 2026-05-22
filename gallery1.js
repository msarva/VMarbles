const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

const pages = document.querySelectorAll(".showcase-box");

let currentIndex = 0;

pages[currentIndex].classList.add("active");

nextBtn.addEventListener("click", () => {

    if(currentIndex >= pages.length - 1) return;

    const currentPage = pages[currentIndex];
    const nextPage = pages[currentIndex + 1];

    const currentRight =
        currentPage.querySelector(".right-panel");

    const currentLeft =
        currentPage.querySelector(".left-panel");

    /* reveal next page underneath */
    nextPage.classList.add("active");
    nextPage.style.zIndex = 1;

    currentPage.style.zIndex = 10;

    /* blur current left */
    currentLeft.classList.add("blur");

    /* flip current right page */
    currentRight.classList.add("turn-next");
    setTimeout(() => {

        currentPage.classList.remove("active");
        currentRight.classList.remove("turn-next");
        currentLeft.classList.remove("blur");

        currentPage.style.zIndex = 1;
        nextPage.style.zIndex = 5;

        currentIndex++;

    },500);

});

prevBtn.addEventListener("click", () => {

    if(currentIndex <= 0) return;

    const currentPage = pages[currentIndex];
    const prevPage = pages[currentIndex - 1];

    const currentLeft =
        currentPage.querySelector(".left-panel");

    /* reveal previous page underneath */
    prevPage.classList.add("active");
    prevPage.style.zIndex = 1;

    currentPage.style.zIndex = 10;

    /* blur + 3D flip LEFT page */

    currentLeft.classList.add("blur");
    const currentRight = currentPage.querySelector(".right-panel");
    currentRight.classList.add("blur");

    currentLeft.classList.add("turn-prev");

    setTimeout(() => {

        currentPage.classList.remove("active");

        currentLeft.classList.remove("turn-prev");
        currentLeft.classList.remove("blur");
        currentRight.classList.remove("blur");

        currentPage.style.zIndex = 1;
        prevPage.style.zIndex = 5;

        currentIndex--;

    },500);

});