
    
    // Variable for the game
    var letters = ["a", "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 6;
    var guessesSoFar =[]; 
    var showletters= null; 
    var userChoice =[];
    var computerChoice = letters[Math.floor(Math.random()*letters.length)];

    // A set of tasks for the computer behaviour in the game

    document.getElementById ("keyPress").onkeypress =function (event){
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    var computerChoice = letters[Math.floor(Math.random()*letters.length)];
    guessesSoFar.push(userChoice);
    console.log(computerChoice); 
    }
    
    
    if (userChoice ===  computerChoice){
         wins++;
         alert("CONGRATULATIONS!You gessed it right!"
               + wins + "Wins "); 
         document.getElementById("wins").innerHTML = "Wins: " + wins;
         guessesLeft=6;
         guessesSoFar.length = 0;
         startAgain();
         console.log("you won!"); 
     }
     else if (guessesLeft == 0) { 
         losses++;
         alert("OOPS SORRY!! TRY AGAIN!");
         document.getElementById("lose").innerHTML = "Losses: " + losses;
         guessesLeft=6;
         guessesSoFar.length = 0;
         startAgain();
         console.log("try again!")
    }

      else if (userChoice !== computerChoice) {
          guessesLeft --;
         
      }
    
        
         
     
     
     
    
    
    
