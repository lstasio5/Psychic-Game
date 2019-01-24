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

// Store computer choice in a variable.  Create a function that sets the computer choice. 
var compChoice = function() {
  return computerArray[Math.floor(Math.random()*computerArray.length)];
}

// call function to set a computer Choice
compChoice();

// console log result (it worked!)
console.log(compChoice(computerArray));

// Starting Score

var wins = 0;
var losses= 0;
var guessesLeft = 9;
var userGuesses = [];

// Functions:

//Update guesses left

var updateGuessesLeft= function() {
  document.querySelector("#guesses-left").innerHTML= "Guesses Left:" + guessesLeft;
}

//Function to display wins

var updateWins= function() {
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
}

// Display user guesses so far

var guessesSoFar = function() {
  document.querySelector("#guesses-sofar").innerHTML= "Your Guesses so far:" + userGuesses.join(', ');

}

// Function to run when users selects a letter 
    
    document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userGuesses.push(userGuess);

    console.log(userGuess)
    
    if (userGuess == compChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar();
        
      }

    else if (guessesLeft == 0) {
      losses++;
      guessesLeft= 9;
    }

    else if (userGuess !== compChoice){
      guessesLeft--; 
  }  
  

  // Logic to determine which functions to run 

     //if (guessesLeft <1) {     
     //   if (userGuess === compChoice) {
     //   wins++;
     //   updateWins();
     //   }

      }

     //   else if (userGuess != compChoice){
     //   guessesLeft--;
    



