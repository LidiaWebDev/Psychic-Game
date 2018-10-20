// Variable for the game
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var guesses = 6;
var userChoice = " ";
var computerChoice = " ";

var guessesSoFar = [];

// A main function for the game

printOnTheScreen();

function keyPress(event) {
  userChoice = String.fromCharCode(event.keyCode).toLowerCase();
  computerChoice = letters[Math.floor(Math.random() * letters.length)];

  guessesSoFar.push(userChoice);

  if (userChoice === computerChoice) {
    userWins();
  } else {
    guesses--;

    // document.getElementById("guessesLeft").innerHTML =
    //   "Guesses-left: " + guesses;
    // document.getElementById("yourGuessesSoFar").append +=(" " + userChoice + ", ");
  }
  if (guesses === 0) {
    userLoses();
  }

  if (wins === 5 || losses === 5) {
    var restart = confirm("Game Over! " + "Do you want to play again?");
    if (restart === true) {
      restartTheGame()
    };
    
  }

  printOnTheScreen();

  //var textOnTheScreen = yourGuessesSoFar.textContent;
  //yourGuessesSoFar.innerHTML = textOnTheScreen + ", " + userChoice;

  //alreadyGuesses = document.getElementById("yourGuessesSoFar").textContent;


  // document.getElementById("yourGuessesSoFar").append  + userChoice +  ", ";



  //   element.removeEventListener( "event.keyCode",stopGame);

  //var x = document.getElementById("keyPress(event)");
  // console.log(
  //   "userChoice: " + userChoice + "Computer choice :" + computerChoice
  // );
}

function userWins() {
  // console.log ("Good Job! you won!");
  wins++;
  // console.log ("Wins:"+ wins);
  alert("GOOD JOB!");
  startAgain();
}
function userLoses() {
  losses++;
  alert("Try again!");
  startAgain();
}

function startAgain() {
  guesses = 6;
  guessesSoFar = [];
}

function restartTheGame() {
  wins = 0;
  losses = 0;
  startAgain();
}

function printOnTheScreen () {
  document.getElementById("yourGuessesSoFar").innerHTML =
  "Your Guesses So Far: " + guessesSoFar;
  document.getElementById("guessesLeft").innerHTML = "Guesses-left: " + guesses;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("wins").innerHTML = "Wins: " + wins;
}
