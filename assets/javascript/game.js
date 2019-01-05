//Psuedo Code

// Need to set computer Guess to a random letter of the alphabet

// Need to set the start count with 0 wins, 0 losses, guesses left 9, and guesses so far-none

// Need to allow user to input a guess by clicking on the keyboard

// Need to compare user guess with computer guess

// If user guess is the same as computer guess Wins increases and losses stays at zero and reset

// If user guess is not the same as computer guess:

// display user guess, decreases Guesses left, keep checking user key value until user guess equals
// computer guess or until Guesses left is less than 1


var computerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "g", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// store computer choice in a variable.  Create a function that sets the computer choice. 
var compChoice = function() {
  return computerArray[Math.floor(Math.random()*computerArray.length)];
}

// call function
compChoice();

// console log result (it worked!)
console.log(compChoice(computerArray));

// Create a function to get the counts

// Call the function to get the counts after each user try