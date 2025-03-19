console.log("Script loaded.");

// obtain the computer's choice. This is done by getting a random number between 0 and 1, multiplying it by 3, then rounding down to get
// either 0, 1, or 2. The number is then converted to either "rock", "paper", or "scissors", respectively
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);

    let computerChoice;
    
    if (randomNumber == 0) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (randomNumber == 1) {
        computerChoice = "paper";
        return computerChoice;
    }
    else if (randomNumber == 2) {
        computerChoice = "scissors";
        return computerChoice;
    }
}

// play a round of rock paper scissors! The computer compares the choices and returns the result
function playRound(computerChoice, humanChoice) {

    displayResult = document.querySelector("#result");

    if (computerChoice == humanChoice) {
        displayResult.textContent = "Draw! Nobody gets a point!";
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
        displayResult.textContent = "You win! Paper beats rock!";
        return true; // true = player wins the round
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        displayResult.textContent = "You lose! Rock beats scissors!";
        return false; // false = computer wins the round
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        displayResult.textContent = "You lose! Paper beats rock!";
        return false; // false = computer wins the round
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        displayResult.textContent = "You win! Scissors beats paper!";
        return true; // true = player wins the round
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        displayResult.textContent = "You win! Rock beats scissors!";
        return true; // true = player wins the round
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        displayResult.textContent = "You lose! Scissors beats paper!";
        return false; // false = computer wins the round
    }
}

displayPlayerScore = document.querySelector("#playerScore");
displayComputerScore = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    result = playRound(getComputerChoice(), "rock");
    if (result == false) {
        displayComputerScore.textContent = ++computerScore;

        if (computerScore == 5) {
            displayResult.textContent = "You lose! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
    else if (result == true) {
        displayPlayerScore.textContent = ++playerScore;

        if (playerScore == 5) {
            displayResult.textContent = "You win! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
});

let paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
    result = playRound(getComputerChoice(), "paper");
    if (result == false) {
        displayComputerScore.textContent = ++computerScore;

        if (computerScore == 5) {
            displayResult.textContent = "You lose! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
    else if (result == true) {
        displayPlayerScore.textContent = ++playerScore;

        if (playerScore == 5) {
            displayResult.textContent = "You win! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
});

let scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
    result = playRound(getComputerChoice(), "scissors");
    if (result == false) {
        displayComputerScore.textContent = ++computerScore;

        if (computerScore == 5) {
            displayResult.textContent = "You lose! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
    else if (result == true) {
        displayPlayerScore.textContent = ++playerScore;

        if (playerScore == 5) {
            displayResult.textContent = "You win! Scores are reset to 0.";
            playerScore = 0;
            computerScore = 0;
            displayPlayerScore.textContent = playerScore;
            displayComputerScore.textContent = computerScore;
        }
    }
});