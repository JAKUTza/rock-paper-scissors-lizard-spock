// constant array with possible choises from NodeList
const choises = Array.from(document.querySelectorAll('.choise'));
let playerChoise = '';
let roundResult = [];
let playerScore = 0;
let computerScore = 0;
// function to get random int obviously :-)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  
// function to make computer's choise with Math.random
// It takes random int from 0 to 4 to take element of choise array by index
// It will be much easier if JS devs created built-in random int method
function getComputerChoise() {
    return choises[getRandomInt(5)].getAttribute('id')
}
function gameRestart(winner) {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.game-reset').textContent = `${winner} won a set! 
        Click on weapon to start new set!`;
}
function playerWin() {
    playerScore +=1;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;
    document.querySelector('.game-reset').textContent = '1st to 5 is a winner!';
}
function computerWin() {
    computerScore +=1;
    document.querySelector('#computer-score').textContent = computerScore;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('.game-reset').textContent = '1st to 5 is a winner!';

}
// function of single round
// takes 2 arguments player choise and computer choise
function gameRound(player, computer) {
    console.log("Initialize single round");
    message = `WIN! You beat Shelbot's ${computer} with ${player}`;
    if (player === computer) {
        message = `It's a tie you both choose ${player}`;
        document.querySelector('.game-message').textContent = message;
    } else if (player === "rock" && (computer === 'lizard' || computer === 'scissors')) {
        document.querySelector('#computer-score').textContent = computerScore;
        playerWin();
        document.querySelector('.game-message').textContent = message;
    } else if (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) {
        playerWin();
        document.querySelector('.game-message').textContent = message;
    } else if (player === 'paper' && (computer === 'rock' || computer === 'spock')) {
        playerWin();
        document.querySelector('.game-message').textContent = message;
    } else if (player === 'lizard' && (computer === 'paper' || computer === 'spock')) {
        playerWin();
        document.querySelector('.game-message').textContent = message;
    } else if (player === 'spock' && (computer === 'scissors' || computer === 'rock')) {
        playerWin();
        document.querySelector('.game-message').textContent = message;
    } else {
        message = `LOSS :-( Shelbot beats your ${player} with ${computer}`
        computerWin();
        document.querySelector('.game-message').textContent = message;
    }
    console.log("checking score...");
    if (playerScore === 5) {
        gameRestart("You've");
    } else if (computerScore === 5) {
        gameRestart("Shelbot has");
    }
}
// function to get player choise from DOM and run gameRound function
function playRound() {
    playerChoise = this.getAttribute('id');
    let computerChoise = getComputerChoise();
    gameRound(playerChoise, computerChoise);
    document.querySelector('.game-player-card-image').id = `player-card-${playerChoise}`;
    document.querySelector('.game-shelbot-card-image').id = `shelbot-card-${computerChoise}`;
}
choises.forEach(choise => choise.addEventListener(('click'), playRound));