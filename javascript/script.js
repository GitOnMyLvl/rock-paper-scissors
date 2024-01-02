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

const buttons = document.getElementsByTagName('button');

Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function () {
        const result = playRound(this.textContent, getComputerChoice());
        console.log(result);
    });
});