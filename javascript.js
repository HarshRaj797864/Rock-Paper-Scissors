console.log("Execution begins.....");
// 2 global variables to count the scores for yhe game for both sides
let humanChoice = 0
let computerChoice = 0


// Take the human answer for rock-paper-scissors
function getInputfromUser() {
    let str = prompt("Rock-Paper-Scissors Shoot!!!!!");
    // To verify str
    console.log(`You entered ${str} `);
    // Convert all characters to lowercase for comparison in the future
    return str.toLowerCase(); 
}

function getComputerChoice() {
    // Choose a random number between 1 and 3 to pick the three options
    let result = Math.floor((Math.random()*3)) + 1;
    // Based on the random result choosing either rock , paper or scissor
    switch (result) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}



