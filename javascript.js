console.log("Execution begins.....");
// 2 global variables to count the scores for yhe game for both sides
let humanScore = 0
let computerScore = 0


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


// To play a single round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        // If user chooses rock
        case "rock":
            if (computerChoice == "scissors") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore ++;
            }
            else if (computerChoice == "rock") {
                console.log(`Bore draw!!!! you both choose same!`);
                
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore ++;
            }
            break;
        // If user chooses paper
        case "paper":
            if (computerChoice == "paper") {
                console.log(`Bore draw!!!! you both choose same!`);
                
            }
            else if (computerChoice == "rock") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore ++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore ++;
            }
            break;
        // If user chooses scissors
        case "scissors":
            if (computerChoice == "paper") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore ++;
            }
            else if (computerChoice == "rock") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore ++;
                
            }
            else {
                console.log(`Bore draw!!!! you both choose same!`);
            }
            break;
    
        default:
            break;
    }

}




