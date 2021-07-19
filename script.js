let finished = false;
let playerWins = 0;
let computerWins = 0;
let result = 0;

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        cpuHand = computerPlay();
        result = playRound(button.id, cpuHand);
        roundEnd(result);
    });
});

const resultsContainer = document.querySelector('#results');

const playerHand = document.createElement('p');
resultsContainer.appendChild(playerHand);
const computerHand = document.createElement('p');
resultsContainer.appendChild(computerHand);
const roundResult = document.createElement('h4');
resultsContainer.appendChild(roundResult);
const playerWinCount = document.createElement('p');
resultsContainer.appendChild(playerWinCount);
const computerWinCount = document.createElement('p');
resultsContainer.appendChild(computerWinCount);
const finalResult = document.createElement('h2');
resultsContainer.appendChild(finalResult);


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerHand.textContent = ("You played " + playerSelection);
    computerHand.textContent = ("The CPU played " + computerSelection);
    finalResult.textContent = "";
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            roundResult.textContent = "This round was a draw.";
            return 0;
        }
        else if (computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats Scissors";
            return 1;
        }
        else {
            roundResult.textContent = "You Lose! Paper beats Rock";
            return -1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats Rock";
            return 1;
        }
        else if (computerSelection == "scissors") {
            roundResult.textContent = "You Lose! Scissors beats Paper";
            return -1;
        }
        else {
            roundResult.textContent = "This round was a draw.";
            return 0;
        }
    }
    else {
        if (computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats Scissors";
            return -1;
        }
        else if (computerSelection == "scissors") {
            roundResult.textContent = "This round was a draw.";
            return 0;
        }
        else {
            roundResult.textContent = "You win! Scissors beats Paper";
            return 1;
        }
    }
}

function roundEnd (result) {
    if (result > 0) {
        playerWins++;
    }
    else if (result < 0) {
        computerWins++;
    }
    if (computerWins > 2 || playerWins > 2) {
        finished = true;
    }
    if (!finished) {
        playerWinCount.textContent = ("You currently have " + playerWins + " wins.");
        computerWinCount.textContent = ("The CPU currently has " + computerWins + " wins.");
    }
    else {
        if (playerWins > 2) {
            finalResult.textContent = "Congratulations you won!!!";
        }
        else {
            finalResult.textContent = "You lost and the world will be destroyed.";
        }
        playerWins = 0;
        computerWins = 0;
        finished = false;
    }
}





