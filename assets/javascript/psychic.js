// Main Variables
var wins = 0;
var losses = 0;
var gussesLeft = 9;
var yourguessesSoFar = [];
var compGuess = [];
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userGuess = [];

// Computer pick
window.onload = function () {
    var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    compGuess.push(computerPick);
    console.log(compGuess[0]);


}

// User Pick starts game
document.onkeyup = function (event) {
    var userGuess = event.key;
    yourguessesSoFar.push(userGuess);
    console.log(yourguessesSoFar);


    // conditions for wins, losses, and how numbers are logged
    if ((userGuess === compGuess[0]) && (gussesLeft > 0)) {
        wins++;
        gussesLeft = 9;
        yourguessesSoFar = [];
        compGuess = [];
        var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        compGuess.push(computerPick);
        console.log(compGuess[0]);
    } else if ((yourguessesSoFar !== compGuess[0]) && (gussesLeft > 0)) {
        gussesLeft = gussesLeft - 1;


    } else {
        losses++;
        gussesLeft = 9;
        yourguessesSoFar = [];
        compGuess = [];
        var computerPick = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        compGuess.push(computerPick);
        console.log(compGuess[0]);
    }



// poplulates HTML on Page

document.getElementById("winstxt").innerHTML = "Wins: " + wins;
document.getElementById("lossestxt").innerHTML = "Losses: " + losses;
document.getElementById("gussesLefttxt").innerHTML = "Guesses left: " + gussesLeft;
document.getElementById("YourguessesSoFartxt").innerHTML = "Your guesses so far: " + yourguessesSoFar;
}

// document.write("wins: " + wins);
// document.write("losses: " + losses);
// document.write("Guesses Left: " + gussesLeft);
// document.write("Your guesses so far: " + YourguessesSoFar);
// document.write("computer picks:" + compGuess);






// Psudocode
// 1. Assign variables that will be kept tracked of on the HTML page
// 2. Write script for the computer to randomly guess a variable
// 3. Script for user choice and to keep track of what they chose
// 4. if statments to compare the user and computer variables
// 5. script to log number of losses and wins