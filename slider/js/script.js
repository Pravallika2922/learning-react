/*Initializing variables*/
let currentSelectedImage = 0;
/*Accessing DOM */
const nxtBtn = document.querySelector(".nxt");
const prevBtn = document.querySelector(".prev");
const images = document.querySelectorAll(".gallery-img");
/*Initial loading function */
function init() {
  if (nxtBtn) {
    nxtBtn.addEventListener("click", function () {
      nextImage();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      prevImage();
    });
  }
  prevBtn.classList.add("disp");
}
init();
/*function for nxtBtn */
function nextImage() {
  prevBtn.classList.remove("disp");
  if (currentSelectedImage < images.length - 1) {
    images[currentSelectedImage].classList.remove("active");
    currentSelectedImage++;
    images[currentSelectedImage].classList.add("active");
  }
  if (currentSelectedImage === images.length - 1) {
    nxtBtn.classList.add("disp");
  }
}

/*function for prevBtn */
function prevImage() {
  nxtBtn.classList.remove("disp");
  if (currentSelectedImage > 0 || currentSelectedImage < images.length - 1) {
    images[currentSelectedImage].classList.remove("active");
    currentSelectedImage--;
    images[currentSelectedImage].classList.add("active");
  }
  if (currentSelectedImage === 0) {
    prevBtn.classList.add("disp");
  }
}
