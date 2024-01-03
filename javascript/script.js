let playerScore = 0;
let computerScore = 0;
const buttons = document.getElementsByTagName('button');
const result = document.querySelector('.result');

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function updateScore() {
    document.querySelector('.player-score').innerText = playerScore + " - ";
    document.querySelector('.computer-score').innerText = computerScore;

}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
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


function roundWin(round) {
    if (round.includes("win")) {
        playerScore++;
    } else if (round.includes("lose")) {
        computerScore++;
    }
    updateScore();
    if (playerScore === 5) {
        setTimeout(() => {
            alert("You win! Congratulations!");
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }, 100);
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert("You lose! Try again!");
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }, 100);
    }
}



Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', () => {
        const round = playRound(button.textContent, getComputerChoice());
        result.innerText = round;
        roundWin(round);
    });
});