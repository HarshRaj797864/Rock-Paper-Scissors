console.log("Execution begins.....");
// 2 global variables to count the scores for yhe game for both sides
let humanScore = 0
let computerScore = 0


// Take the human answer for rock-paper-scissors
function getInputfromUser() {
    let str = prompt("Rock-Paper-Scissor Shoot!!!!!");
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
            return "scissor";
    }
}


// To play a single round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        // If user chooses rock
        case "rock":
            if (computerChoice == "scissor") {
                
                humanScore ++;
                alert(`You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            else if (computerChoice == "rock") {
                humanScore ++;
                computerScore ++;
                alert(`Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
                
            }
            else {
                computerScore ++;
                alert(`You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            break;
        // If user chooses paper
        case "paper":
            if (computerChoice == "paper") {
                
                humanScore ++;
                computerScore ++;
                alert(`Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
                
            }
            else if (computerChoice == "rock") {
                humanScore ++;
                alert(`You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            else {
                computerScore ++;
                alert(`You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            break;
        // If user chooses scissors
        case "scissor":
            if (computerChoice == "paper") {
                humanScore ++;
                alert(`You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            else if (computerChoice == "rock") {
                
                computerScore ++;
                alert(`You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
                
            }
            else {
                humanScore ++;
                computerScore ++;
                alert(`Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`);
            }
            break;
    
        default:
            break;
    }

}

// Final function to play the complete game consisting of 5 rounds
function playGame() {
    // Number of rounds
    round = 1;
    // Loop to play 5 rounds
    while (round <= 5) {
        console.log(`Round Number: ${round}`);
        // Input from user
        const humanChoice = getInputfromUser();
        // Random choice from computer 
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        round ++;
    }
    // console.log();
    // Final result
    alert(`Final Score:-\nYour Score = ${humanScore}\nMy Score = ${computerScore}`);
    
    if (humanScore > computerScore) {
        alert(`Hooray!!!! You won`);
    }
    else if (computerScore > humanScore) {
        alert(`Noooooo!!! You lost!`);
    }
    else {
        alert(`Boooooo! It was a Draw!!`);
    }

}

// Verification
playGame();
console.log(humanScore);
console.log(computerScore);


