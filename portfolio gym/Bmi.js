const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navlist");
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("burgerActive");
  navList.classList.toggle("showMenu");
});
document.querySelectorAll(".navlinks").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("burgerActive");
  navList.classList.remove("showMenu");
}));
/////////////////////////////////////////////////////////////
function calculateBody(){
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if(isNaN(weight) || isNaN(height) || height === 0){
    alert("please enter your weight and height");
    return;
  }
  let bmi = weight / (height * height);
  let result = "your bmi is: " +  bmi.toFixed(2);
  if (bmi < 18.5){
    result += " (Underweight)";
  } else if (bmi >= 18.5 && bmi < 25){
    result += " (Normal weight)";
  } else if (bmi >= 25 && bmi < 30){
    result += " (Overweight)";
  } else{
    result += " (Obese)";
  }

  document.getElementById("result").innerHTML = result;
}
