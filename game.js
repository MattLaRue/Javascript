//create secret number 
var secretNumber = Math.floor((Math.random() * 10) + 1);;
// ask user for guess

// check guess


var guess = prompt("What is your guess (number between 1-10) ?");
while (Number(guess) != secretNumber)
{
	guess = prompt("Sorry, that's not correct. Please try again");
	
}

alert("Correct, you got it right!");