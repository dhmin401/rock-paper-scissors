let count = 0
let userScore = 0;
let computerScore = 0;
let rps = ['rock', 'paper', 'scissors']

function playRound(id) {
    inActiveBtn()
    count++;
    if(count <= 5) {
        activeBtn(id)
        let playerSelection = userPlay(id)
        let computerSelection = computerPlay()
        activeBtn("computer-" + rps[computerSelection])
        if(playerSelection === computerSelection) {
            document.getElementById("status").textContent = "Tie!"
        }
        else if(Math.abs(playerSelection - computerSelection) === 1) {
            if(playerSelection > computerSelection) {
                userScore++
                document.getElementById("status").textContent = "You Win! " + rps[playerSelection] + " beats " + rps[computerSelection]
            }
            else {
                computerScore++
                 document.getElementById("status").textContent = "You Lose! " + rps[computerSelection] + " beats " + rps[playerSelection]
            }
        }
        else if(Math.abs(playerSelection - computerSelection) === 2) {
            if(playerSelection < computerSelection) {
                userScore++
                document.getElementById("status").textContent = "You Win! " + rps[computerSelection] + " beats " + rps[playerSelection]
            }
            else {
                computerScore++
                document.getElementById("status").textContent = "You Lose! " + rps[playerSelection] + " beats " + rps[computerSelection]
            }
        }

        document.getElementById("score").textContent = userScore + " : " + computerScore
    }
    if(count === 5) {
        if(userScore > computerScore)
            document.getElementById("status").textContent = "You Win!"
        else if(computerScore > userScore)
            document.getElementById("status").textContent = "You Lose!"
        else
            document.getElementById("status").textContent = "You Tie!"
        document.getElementById("play-again").textContent = "Play Again"
        
    }
}

function activeBtn(id) {
    document.getElementById(id).style.border = "5px solid #00b0ff"
}

function inActiveBtn() {
    for(let i = 0; i < 3; i++)
        document.getElementById("user-" + rps[i]).style.border = "1px solid white"
    for(let i = 0; i < 3; i++)
        document.getElementById("computer-" + rps[i]).style.border = "1px solid white"
}

function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    return num
}

function userPlay(id) {
    let num;
    for(let i = 0; i < 3; i++) {
        if (id.slice(5) === rps[i])
            num = i;
    }
    console.log(num);
    return num;
}

function playAgain() {
    count = 0;
    userScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML = userScore + " : " + computerScore
    document.getElementById("play-again").innerHTML = ""
    document.getElementById("status").innerHTML = ""
    inActiveBtn() 
}