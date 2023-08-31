// constant array with possible choises
const choise = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// function to get random int obviously :-)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

// function to make computer's choise with Math.random
// It takes random int from 0 to 4 to take element of choise array by index
// It will be much easier if JS devs created built-in random int method
function computerChoise() {
    return choise[getRandomInt(5)]
}

// function of single round
// takes 2 arguments player choise and computer choise
function gameRound(playerChoise, computerChoise) {
    console.log("Initialize single round")
    message = `WIN! You beat computer's ${computerChoise} with ${playerChoise}`
    if (playerChoise === computerChoise) {
        message = `It's a tie you both choose ${playerChoise}`
        return ['tie', message]
    } else if (playerChoise === "rock" && (computerChoise === 'lizard' || computerChoise === 'scissors')) {
        return ['player-win', message]
    } else if (playerChoise === 'scissors' && (computerChoise === 'paper' || computerChoise === 'lizard')) {
        return ['player-win', message]
    } else if (playerChoise === 'paper' && (computerChoise === 'rock' || computerChoise === 'spock')) {
        return ['player-win', message]
    } else if (playerChoise === 'lizard' && (computerChoise === 'paper' || computerChoise === 'spock')) {
        return ['player-win', message]
    } else if (playerChoise === 'spock' && (computerChoise === 'scissors' || computerChoise === 'rock')) {
        return ['player-win', message]
    } else {
        message = `LOSS :-( computer's beat your ${playerChoise} with ${computerChoise}`
        return ['computer-win', message]
    }
}
// gameRound(playerChoise.toLowerCase(), computerChoise())
// As assigmnets says we need to play first to 5 wins

function gameLoop() {
    alert('Rock Paper Scissor Lizard Spock game starts! 1st to 5 is a winner!')
    let playerScore = 0
    let computerScore = 0

    while (true){
        let playerChoise = prompt('Choose beetwen rock, paper, scissors, lizard, spock', 'your choise')
        let game = gameRound(playerChoise.toLowerCase(), computerChoise())
        if (game[0] === 'player-win') {
            playerScore++
            console.log(game[1])
        } else if (game[0] === 'computer-win') {
            computerScore++
            console.log(game[1])
        } else {
            console.log(game[1])
        }
        console.log(`${playerScore} - ${computerScore}`)
        if (playerScore === 5 || computerScore === 5) {
            break
        }
    }
}

gameLoop()