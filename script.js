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

// obtain the human's choice. The human's choice is converted to lower case so as to ensure the game accepts both "rock" and "RoCk"
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors? Type your answer in all lowercase!");

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    }
    else {
        return getHumanChoice();
    }
}

// play a round of rock paper scissors! The computer compares the choices and returns the result
function playRound(computerChoice, humanChoice) {

    let result;

    if (computerChoice == humanChoice) {
        console.log("Draw! Nobody gets a point!");
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win! Paper defeats rock!");
        result = "humanVictory";
        return result;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose! Rock defeats scissors!");
        result = "computerVictory";
        return result;
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper defeats rock!");
        result = "computerVictory";
        return result;
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("You win! Scissors defeats paper!");
        result = "humanVictory";
        return result;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("You win! Rock defeats scissors!");
        result = "humanVictory";
        return result;
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors defeats paper!");
        result = "computerVictory";
        return result;
    }
}

// play the game!
function playGame() {
    console.log("Get ready to play Rock Paper Scissor's against the world's most ingenius computer!")

    let humanScore = 0;
    let computerScore = 0;
    
    for (let i=0; i<=4; i++) {
        result = playRound(getComputerChoice(), getHumanChoice());

        if (result == "computerVictory") {
            computerScore++;
            console.log("The computer's score is now " + computerScore + " and your score remains at " + humanScore);
        }
        else if (result == "humanVictory") {
            humanScore++;
            console.log("Your score is now " + humanScore + " and the computer's score remains at " + computerScore);
        }
        else {
            console.log("The scores remain the same!");
        }
    }

    if (humanScore == computerScore) {
        console.log("You and the computer tied the game! Try again!");
    }
    else if (humanScore > computerScore) {
        console.log("You defeated the computer by a score of " + humanScore + " to " + computerScore + "! Congratulations!");
    }
    else if (humanScore < computerScore) {
        console.log("The computer has defeated you by a score of " + computerScore + " to " + humanScore + "! Try again!")
    }
}

startButton = document.getElementById("startButton");
startButton.addEventListener("click", playGame);

// if you're seeing this... hola!