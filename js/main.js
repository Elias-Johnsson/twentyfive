let slideIndex = 0;
let animation = document.querySelector(".MOTWimage");
animation.addEventListener("click",movieTransition)
let animation2 = document.querySelector(".movieimg")
animation2.addEventListener("click",movieTransition)
let animation3 = document.querySelector(".albumimg")
animation3.addEventListener("click", musicTransition)
let animation4 = document.querySelector(".albumimg2")
animation4.addEventListener("click", musicTransition2)


showSlides();

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
  layer2.classList.toggle("show2");
  let part1 = document.querySelector(".movie_of_week");
  part1.classList.toggle("animation1");
  let part2 = document.querySelector(".movie_review");
  part2.classList.toggle("animation2");
  let part3 = document.querySelector(".MOTWreview");
  part3.classList.toggle("animation3");
}

function musicTransition(){
  let layer = document.querySelector(".music_reviewdiv1");
  layer.classList.toggle("show_music_background1");
  let layer2 = document.querySelector(".music_reviewdivider");
  layer2.classList.toggle("show_music_divider"); 
  let layer3 = document.querySelector(".music_review_text1");
  layer3.classList.toggle("show_music_text1");
}
function musicTransition2(){
  let layer = document.querySelector(".music_reviewdiv2");
  layer.classList.toggle("show_music_background2");
  let layer2 = document.querySelector(".music_reviewdivider2");
  layer2.classList.toggle("show_music_divider2"); 
  let layer3 = document.querySelector(".music_review_text2");
  layer3.classList.toggle("show_music_text2");
}