function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        console.log("Rock");
        return "Rock";
    }
    else if (num == 1) {
        console.log("Paper");
        return "Paper";
    }
    else {
        console.log("Scissors");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("This round was a draw.");
            return 0;
        }
        else if (computerSelection == "scissors") {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
        else {
            console.log("You lose! Paper beats Rock");
            return -1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        }
        else {
            console.log("This round was a draw.");
            return 0;
        }
    }
    else {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
        else if (computerSelection == "scissors") {
            console.log("This round was a draw.");
            return 0;
        }
        else {
            console.log("You win! Scissors beats Paper");
            return 1;
        }
    }
}

function game() {
    let finished = false;
    let playerWins = 0;
    let computerWins = 0;
    let result = 0;
    while (!finished) {
        let playerSelection = prompt("Enter your choice here");
        playerSelection = playerSelection.toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = prompt("Invalid Choice. Please enter your choice here");
            playerSelection = playerSelection.toLowerCase();
        }
        let computerSelection = computerPlay();
        computerSelection = computerSelection.toLowerCase();
        result = playRound(playerSelection, computerSelection);
        if (result > 0) {
            playerWins++;
        }
        else if (result < 0) {
            computerWins++;
        }
        if (computerWins > 2 || playerWins > 2) {
            finished = true;
        }
        console.log("Player has " + playerWins + " wins.");
        console.log("Computer has " + computerWins + " wins.");
    }
    if (playerWins > 2) {
        console.log("Congratulations you won!!!");
    }
    else {
        console.log("You lost and the world will be destroyed.");
    }
    
}

game();

