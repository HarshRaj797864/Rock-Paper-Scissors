console.log("Execution begins.....");
// 2 global variables to count the scores for yhe game for both sides
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;




function getComputerChoice() {
    // Choose a random number between 1 and 3 to pick the three options
    let result = Math.floor((Math.random() * 3)) + 1;
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

const header = document.querySelector(".header");



const scoreDisplay = document.createElement("div");
scoreDisplay.id = "scoreDisplay";
scoreDisplay.style.cssText = `
    font-size: 24px;
    margin: 20px 0;
    text-align: center;
    font-weight: bold;
`;
header.appendChild(scoreDisplay);

const resultDisplay = document.createElement("div");
resultDisplay.id = "resultDisplay";
resultDisplay.style.cssText = `
    font-size: 28px;
    margin: 20px 0;
    text-align: center;
    font-weight: bold;
    color: white;
`;
header.appendChild(resultDisplay);



// To play a single round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {
    if (roundsPlayed >= totalRounds) {
        return;
    }
    roundsPlayed ++;
    switch (humanChoice) {
        // If user chooses rock
        case "rock":
            if (computerChoice == "scissor") {

                humanScore++;
                scoreDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            else if (computerChoice == "rock") {
                humanScore++;
                computerScore++;
                scoreDisplay.textContent = `Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;

            }
            else {
                computerScore++;
                scoreDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            break;
        // If user chooses paper
        case "paper":
            if (computerChoice == "paper") {

                humanScore++;
                computerScore++;
                scoreDisplay.textContent = `Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;

            }
            else if (computerChoice == "rock") {
                humanScore++;
                scoreDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            else {
                computerScore++;
                scoreDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            break;
        // If user chooses scissors
        case "scissor":
            if (computerChoice == "paper") {
                humanScore++;
                scoreDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            else if (computerChoice == "rock") {

                computerScore++;
                scoreDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;

            }
            else {
                humanScore++;
                computerScore++;
                scoreDisplay.textContent = `Bore draw!!!! you both choose same!\nYour Score:- ${humanScore}\nComputer Score:- ${computerScore}`;
            }
            break;

        default:
            break;
    }
    

}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


function updateDisplay() {
    

    if (roundsPlayed >= totalRounds) {
        if (humanScore > computerScore) {
            resultDisplay.textContent = `Hooray!!!!!!! You win the game! Final Score: ${humanScore}-${computerScore}`;
        } else if (computerScore > humanScore) {
            resultDisplay.textContent = `No!!!!!!! Computer wins the game! Final Score: ${humanScore}-${computerScore}`;
        } else {
            resultDisplay.textContent = `Booooo!!!!! It's a tie! Final Score: ${humanScore}-${computerScore}`;
        }
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;

        // Clear both displays
        scoreDisplay.textContent = "";
        // (clear the result as well after a short delay)
        setTimeout(() => {
            resultDisplay.textContent = "";
        }, 3000);

        
    }
    

}



// Event listeners
rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
    updateDisplay();
});
paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    updateDisplay();
});
scissor.addEventListener("click", () => {
    playRound('scissor', getComputerChoice());
    updateDisplay();
});










