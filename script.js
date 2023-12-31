function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (randomChoice == 1) {
        computerChoice = "rock";
    } else if (randomChoice == 2) {
        computerChoice = "paper";
    } else if (randomChoice == 3) {
        computerChoice = "scissors";
    }

    return(computerChoice);
}

function getPlayerChoice() {
    let playerChoice = prompt("What is your selection? (rock, paper, scissors - case insensitive)");
    playerChoice = playerChoice.toLowerCase(playerChoice);
    
    return(playerChoice);
}

function playRound(computerChoice, playerChoice, wins) {
    let displayComputerChoice = "The computer picked: " + computerChoice + ".";
    if(computerChoice != playerChoice) {
        if((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") || (computerChoice == "scissors" && playerChoice == "rock")) {
            let message = displayComputerChoice + " You win! " + playerChoice + " beats " + computerChoice;
            wins += 1;
            console.log(message);
        } else if((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
            let message = displayComputerChoice + " You lose! " + computerChoice + " beats " + playerChoice;
            console.log(message);
        }
    } else {
        console.log("It's a tie!");
    }

    return(wins);
}

function game() {
    let wins = 0
    for(let i = 1; i <= 5; i++) {
        console.log("Round #" + i);
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        wins = playRound(computer, player, wins);
        console.log("You have " + wins + " wins!");
    }
    if(wins >= 3) {
        console.log("You beat the computer!");
    } else {
        console.log("You lost against the computer!");
    }
}

game();