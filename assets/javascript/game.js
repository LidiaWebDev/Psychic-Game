
    
    var letters = ["a", "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var computerChoice = letters[Math.floor(Math.random()*letters.length)];
        console.log(computerChoice);
    var guessesleft = 6;
    var wins = 5;
    var losses = 5;
    var results;

    
    document.onkeyup = function(){
        var userChoice = String.fromCharCode(event.keyCode). 
        toLowerCase();
        console.log(userChoice);


     if (userChoice ===  computerChoice){
         wins++;
     }
     else{
         guessesLeft  --;
     }
     if (guesses == 0){
         losses++
     }
     }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guessesleft: " + guesses;

    
    
