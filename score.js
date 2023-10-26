// Iteration 8: Making scoreboard functional
let play_again = document.querySelector("#play-again-button")
play_again.onclick = ()=>{
  window.open("game.html","_self")
}
let value = localStorage.getItem("score")
let scoreValue = document.querySelector("#score-board")
scoreValue.textContent = value;


// window.onload = ()=>{
//   location.href = "./index.html"
// }