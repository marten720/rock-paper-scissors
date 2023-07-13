const playerText = document.querySelector(".playerScore");
const compText = document.querySelector(".compScore");
const resultText = document.querySelector(".result");
const buttons = document.querySelectorAll(".options");

let playerScore = 0;
let compScore = 0;

// gets random command from computer
const choices = ["Rock", "Paper", "Scissors"]
function getCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// disables buttons after the game has ended
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// playing a round after every click
buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.textContent);    
}));

// plays a round
function playRound(playerSelection) {
    let compSelection = getCompChoice();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerSelection === compSelection)
        resultText.textContent = `Tie! You both picked ${playerSelection}.`;
    else if ((playerSelection === "Rock" && compSelection === "Scissors") ||
             (playerSelection === "Paper" && compSelection === "Rock") ||
             (playerSelection === "Scissors" && compSelection === "Paper")) {
        
        playerScore++;
        resultText.textContent = `You win! ${playerSelection} beats ${compSelection}.`;

        if (playerScore >= 5) {1
            resultText.textContent += " Hurray, you won! Reload the page to play again.";
            disableButtons();
        }
    }

    else {
        compScore++;
        resultText.textContent = `You lose! ${compSelection} beats ${playerSelection}.`;

        if (compScore >= 5) {
            resultText.textContent += " Sadly, you lost. Reload the page to play again.";
            disableButtons();
        }
    }

    playerText.textContent = `Player: ${playerScore}`;
    compText.textContent = `Computer: ${compScore}`;
}