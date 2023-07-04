var player1Name = prompt("Type the player1 name :");
var player2Name = prompt("Type the player2 name :");
var name1 = document.querySelectorAll("p")[0];
var name2 = document.querySelectorAll("p")[1];
name1.innerHTML = player1Name;
name2.innerHTML = player2Name;


function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

function randomImageSource(value) {
    var randomDiceImage = "dice" + value + ".png";
    var randomImageSource = "images/" + randomDiceImage; 
    return randomImageSource;
}
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource(randomNumber1));

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource(randomNumber2))

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1Name + " Wins !";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2Name + " Wins !";
} else {
    document.querySelector("h1").innerHTML = "It is a draw !"
}
var h6 = document.querySelector("#again");
h6.innerHTML = "If you want to play again, refresh the page."