//home slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeDot";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
//hamburger and list item
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navlist");
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("burgerActive");
  navList.classList.toggle("showMenu");
});
document.querySelectorAll(".navlinks").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("burgerActive");
  navList.classList.remove("showMenu");
}))