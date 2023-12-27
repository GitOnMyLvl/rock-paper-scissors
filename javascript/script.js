let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(player);
    console.log(computer);
    if (player === computer) {
        return ("Draw! Pick again");
    } else {
        switch (player) {
            case "rock":
                return (computer === "scissors" ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock");
            case "scissors":
                return (computer === "paper" ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors");
            case "paper":
                return (computer === "rock" ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper");
            default:
                return ("Invalide selection! Pick again")
        }
    }
}

function game() {
    while (playerWins < 3 && computerWins < 3) {
        let playerSelection = prompt("Pick Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerWins++;
        }
        else if (result.includes("lose")) {
            computerWins++;
        }
    }

    if (playerWins === 3) {
        return "You win!";
    }
    else {
        return "You lose!";
    }
}



console.log(game());