// Main Variables
var wins = 0;
var losses = 0;
var gussesLeft = 9;
var YourguessesSoFar = [];
var compGuess = [];
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Computer pick
window.onload = function () {
    var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    compGuess.push(computerPick);
    console.log(compGuess[0]);
    document.getElementById("winstxt").innerHTML =
        "wins: " + wins;
    document.getElementById("lossestxt").innerHTML =
        "losses: " + losses;
    document.getElementById("gussesLefttxt").innerHTML =
        "Guesses Left: " + gussesLeft;
    document.getElementById("YourguessesSoFartxt").innerHTML =
        "Your guesses so far: " + YourguessesSoFar;
    document.getElementById("compGuesstxt").innerHTML =
        "Computer Guess: " + compGuess;

}

// User Pick starts game
document.onkeyup = function(event) {
    var userGuess = event.key;
    YourguessesSoFar.push(userGuess);
    console.log(compGuess[0]);
    document.getElementById("YourguessesSoFartxt").innerHTML =
        "Your guesses so far: " + YourguessesSoFar;

    // conditions for wins, losses, and how numbers are logged
    if ((userGuess === compGuess[0]) && (gussesLeft > 0)) {
        wins++;
        gussesLeft = 9;
        compGuess.length = 0;
        YourguessesSoFar.length = 0;
        var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        compGuess.push(computerPick);
        console.log(compGuess[0]);
        document.getElementById("winstxt").innerHTML =
        "wins: " + wins;
        document.getElementById("compGuesstxt").innerHTML =
        "Computer Guess: " + compGuess;
        document.getElementById("YourguessesSoFartxt").innerHTML =
        "Your guesses so far: " + YourguessesSoFar;
    } 
    else if ((YourguessesSoFar = compGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("gussesLefttxt").innerHTML =
            "Guesses Left: " + gussesLeft;
    } 
    // else {
    //     losses++;
    //     gussesLeft = gussesLeft - 1;
    //     compGuess.length = 0;
    //     YourguessesSoFar.length = 0;
    //     var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    //     compGuess.push(computerPick);
    //     console.log(compGuess[0]);
        
    }


