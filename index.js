function rollsDice () {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "diceImages/dice" + randomNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];

 var lastImage1 =  image1.setAttribute("src", randomImage1);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var radomImage2 = "diceImages/dice" + randomNumber2 + ".png"
  var image2 = document.querySelectorAll("img")[1];
  
 var lastImage2 =  image2.setAttribute("src", radomImage2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

}