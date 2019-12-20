//First Image

var randomNumber1 = Math.floor(Math.random()*6)+1;

var image1Selection = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",image1Selection);

//Second Image

var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2Selection = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2Selection);

// Changing title

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}








//First Image
// if (randomNumber1===1){
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1===2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber1===3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber1===4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber1===5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber1===6){
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }


// Second image
//
// var randomNumber2 = Math.floor(Math.random()*6)+1;
//
// if (randomNumber2===1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2===2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber2===3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber2===4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber2===5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber2===6){
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
