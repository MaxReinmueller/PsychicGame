// Main Variables
var wins = 0;
var losses = 0;
var gussesLeft = 9;
var YourguessesSoFar = [];
var compGuess = [];
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userGuess = [];

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
   
}

// User Pick starts game
document.onkeyup = function (event) {
    var userGuess = event.key;
    YourguessesSoFar.push(userGuess);
    console.log(YourguessesSoFar);
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
        document.getElementById("YourguessesSoFartxt").innerHTML =
            "Your guesses so far: " + YourguessesSoFar;
    } 
    else if ((YourguessesSoFar = compGuess[0]) && (gussesLeft > 0)) {
        gussesLeft = gussesLeft - 1;
        document.getElementById("gussesLefttxt").innerHTML =
            "Guesses Left: " + gussesLeft;
    } 
    else {
        losses++;
        gussesLeft = 9;
        compGuess.length = 0;
        YourguessesSoFar.length = 0;
        var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        compGuess.push(computerPick);
        console.log(compGuess[0]);
        document.getElementById("YourguessesSoFartxt").innerHTML =
            "Your guesses so far: " + YourguessesSoFar;
        document.getElementById("lossestxt").innerHTML =
            "losses: " + losses;
    }

}

// poplulates HTML on Page






// Psudocode
// 1. Assign variables that will be kept tracked of on the HTML page
// 2. Write script for the computer to randomly guess a variable
// 3. Script for user choice and to keep track of what they chose
// 4. if statments to compare the user and computer variables
// 5. script to log number of losses and wins