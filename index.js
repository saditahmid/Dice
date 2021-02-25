
var randomNumber1 = Math.floor(Math.random() * 9) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
	if (randomNumber1===1) {
		document.querySelector("h1").innerHTML = "🚩 Ayeet Wins!";
	}
	else if (randomNumber1 === 2) {
		  document.querySelector("h1").innerHTML = "🚩 Faiza Wins!";
	}
	else if (randomNumber1===3) {
		document.querySelector("h1").innerHTML = "🚩 Istiaq Wins!";
	}
	else if (randomNumber1===4) {
		document.querySelector("h1").innerHTML = "🚩 Kohon Wins!";
	}
	else if (randomNumber1===5) {
		document.querySelector("h1").innerHTML = "🚩 Labib Wins!";
	}
	else if (randomNumber1===6) {
		document.querySelector("h1").innerHTML = "🚩 Meth Wins!";
	}
	else if (randomNumber1===7) {
		document.querySelector("h1").innerHTML = "🚩 Rio Wins!";
	}
	else if (randomNumber1===8) {
		document.querySelector("h1").innerHTML = "🚩 Sayed Wins!";
	}
	else{
		document.querySelector("h1").innerHTML = "🚩 Surem Wins!";
	}
}
else if (randomNumber2 > randomNumber1) {
	if (randomNumber1===1) {
		document.querySelector("h1").innerHTML = "🚩 Ayeet Wins!";
	}
	else if (randomNumber1 === 2) {
		  document.querySelector("h1").innerHTML = "🚩 Faiza Wins!";
	}
	else if (randomNumber1===3) {
		document.querySelector("h1").innerHTML = "🚩 Istiaq Wins!";
	}
	else if (randomNumber1===4) {
		document.querySelector("h1").innerHTML = "🚩 Kohon Wins!";
	}
	else if (randomNumber1===5) {
		document.querySelector("h1").innerHTML = "🚩 Labib Wins!";
	}
	else if (randomNumber1===6) {
		document.querySelector("h1").innerHTML = "🚩 Meth Wins!";
	}
	else if (randomNumber1===7) {
		document.querySelector("h1").innerHTML = "🚩 Rio Wins!";
	}
	else if (randomNumber1===8) {
		document.querySelector("h1").innerHTML = "🚩 Sayed Wins!";
	}
	else{
		document.querySelector("h1").innerHTML = "🚩 Surem Wins!";
	}
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
