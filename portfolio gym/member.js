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