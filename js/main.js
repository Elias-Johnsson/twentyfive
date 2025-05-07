let slideIndex = 0;
let animation = document.querySelector(".MOTWimage");
animation.addEventListener("click",movieTransition)
let animation1 = document.querySelector(".menu-button")
animation1.addEventListener("click",navbarShow)
let animation2 = document.querySelector(".movieimg")
animation2.addEventListener("click",movieTransition)
let animation3 = document.querySelector(".albumimg")
animation3.addEventListener("click", musicTransition)
let animation4 = document.querySelector(".albumimg2")
animation4.addEventListener("click", musicTransition2)
let animation5 = document.querySelector(".albumimg3")
animation5.addEventListener("click", musicTransition3)
let animation6 = document.querySelector(".albumimg4")
animation6.addEventListener("click", musicTransition4)
let animation7 = document.querySelector(".albumimg5")
animation7.addEventListener("click", musicTransition5)

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

function navbarShow(){
  document.querySelectorAll('.nav_part').forEach(el => {
    el.classList.add('show_nav_part');
  });
  let layer2 = document.querySelector(".nav_bar");
  layer2.classList.toggle("show_navbar");
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
  let part4 = document.querySelector(".review_text");
  part4.classList.toggle("change_reviewtext");
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
function musicTransition3(){
  let layer = document.querySelector(".music_reviewdiv3");
  layer.classList.toggle("show_music_background3");
  let layer2 = document.querySelector(".music_reviewdivider3");
  layer2.classList.toggle("show_music_divider3"); 
  let layer3 = document.querySelector(".music_review_text3");
  layer3.classList.toggle("show_music_text3");
}
function musicTransition4(){
  let layer = document.querySelector(".music_reviewdiv4");
  layer.classList.toggle("show_music_background4");
  let layer2 = document.querySelector(".music_reviewdivider4");
  layer2.classList.toggle("show_music_divider4"); 
  let layer3 = document.querySelector(".music_review_text4");
  layer3.classList.toggle("show_music_text4");
}
function musicTransition5(){
  let layer = document.querySelector(".music_reviewdiv5");
  layer.classList.toggle("show_music_background5");
  let layer2 = document.querySelector(".music_reviewdivider5");
  layer2.classList.toggle("show_music_divider5"); 
  let layer3 = document.querySelector(".music_review_text5");
  layer3.classList.toggle("show_music_text5");
}