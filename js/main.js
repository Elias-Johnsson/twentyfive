let slideIndex = 0;
showSlides();

let layer = document.querySelector(".movieimg");
layer.addEventListener("click",movieTransition)

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);
}

function movieTransition() {
  let layer = document.querySelector(".movie-layer");
  layer.classList.toggle("show");
  let layer2 = document.querySelector(".moviebox");
  layer2.classList.toggle("up");
}