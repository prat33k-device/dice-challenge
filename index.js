var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");
var heading = document.querySelector("h1");

var rndm1 = Math.floor(Math.random()*6) + 1;  // 1 - 6
var rndm2 = Math.floor(Math.random()*6) + 1;  // 1 - 6

player1.setAttribute("src", "images/dice" + rndm1 + ".png");
player2.setAttribute("src", "images/dice" + rndm2 + ".png");

if(rndm1 > rndm2) {
    heading.innerHTML = "Player 1 Wins ⛳";
} else if(rndm1 < rndm2) {
    heading.innerHTML = "Player 2 Wins ⛳";
}
else {
    heading.innerHTML = "Its a Tie 🤷‍♀️";
}