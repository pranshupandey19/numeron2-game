// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1Box = document.getElementById("number1")
let number2Box = document.getElementById("number2")

var num1 = Math.round(Math.random()*100)
var num2 = Math.round(Math.random()*100)

number1Box.textContent = num1;
number2Box.textContent = num2;
// Iteration 3: Creating variables required to make the game functional

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")

let score = 0;



// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3");
let num3;

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
  num1 = Math.round(Math.random()*100);
  num2 = Math.round(Math.random()*100);
  
  if(num2>num1){
    let abs = num1
    num1 = num2
    num2 = abs
  }

  let operator = Math.ceil(Math.random()*5)

  switch(operator){
    case 1: num3 = num1 + num2;
    break;
    case 2: num3 = num1 - num2;
    break;
    case 3: num3 = num1 * num2;
    break;
    case 4: num3 = Math.floor(num1/num2);
    break;
    case 5: num3 = num1 % num2;
    break;
    // default: randomise();
  }
  number1Box.textContent = num1;
  number2Box.textContent = num2;
  number3Box.textContent = num3;

}

randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick = () =>{
  if(num1+num2 == num3){
    score++;
    randomise();
    localStorage.setItem("score",score)
    clearInterval(timerInterval)
    timer()

  }
  else{

    gameOver();

  }
}

minus.onclick = () =>{
  if(num1-num2 == num3){
    score++;
    randomise();
    localStorage.setItem("score",score)
    clearInterval(timerInterval)
    timer()


  }
  else{

    gameOver();

  }
}

mul.onclick = () =>{
  if(num1*num2 == num3){
    score++;
    randomise();
    localStorage.setItem("score",score)
    clearInterval(timerInterval)
    timer()

  }
  else{

    gameOver();

  }
}

divide.onclick = () =>{
  if(Math.floor(num1/num2) == num3){
    score++;
    randomise();
    localStorage.setItem("score",score)
    clearInterval(timerInterval)
    timer()

  }
  else{

    gameOver();

  }
}

modulus.onclick = () =>{
  if(num1%num2 == num3){
    score++;
    randomise();
    localStorage.setItem("score",score)
    clearInterval(timerInterval)
    timer()

  }
  else{

    gameOver();

  }
}






function gameOver(){
   window.location.href = "./gameover.html"
}

// Iteration 7: Making Timer functional
let time
let timerInterval
let timer_box = document.querySelector("#timer")

function timer(){
  time = 20
  timer_box.textContent = time
  timerInterval = setInterval(()=>{
    time--
    timer_box.textContent = time
    if (time==0){
      gameOver()
    }
  },1000)
}
timer()
localStorage.setItem("score",0)
// localStorage.clear()