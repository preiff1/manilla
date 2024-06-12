let slideIndex = 0;
let slideTimer;

showSlide(slideIndex);
autoNextSlide();

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[n].style.opacity = 1;
}

function changeSlide() {
  slideIndex++;
  if (slideIndex >= document.getElementsByClassName("slide").length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function autoNextSlide() {
  slideTimer = setInterval(changeSlide, 20000); // Change slide every 20 seconds
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  autoNextSlide();
}

document.querySelector(".prev").addEventListener("click", function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("slide").length - 1;
  }
  showSlide(slideIndex);
  resetSlideTimer();
});

document.querySelector(".next").addEventListener("click", function() {
  changeSlide();
  resetSlideTimer();
});