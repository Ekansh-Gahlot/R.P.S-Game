const choices = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choosenValue = Math.floor(Math.random()*3);
    // console.log("Computer choose "+choices[choosenValue])
    return choices[choosenValue];
}



function getHumanChoice(){
    let userInput = prompt("Please enter your choice");
    // console.log("Human Choose "+userInput.toUpperCase())
    return userInput.toUpperCase();
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("Human wins!");
        humanScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("Human wins!");
        humanScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("Human wins!");
        humanScore++;
    }
    else{
        console.log("Computer wins!");
        computerScore++;
    }
}


function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore > computerScore){
        console.log("You are the winner of the game!");
        console.log("User score is", +humanScore);
        console.log("Computer score is", +computerScore);
    }
    else if(humanScore === computerScore){
        console.log("It's a tie!")
        console.log("User score is", +humanScore);
        console.log("Computer score is", +computerScore);
    }
    else{
        console.log("You loose! Better luck next time!")
        console.log("User score is", +humanScore);
        console.log("Computer score is", +computerScore);
    }
}

playGame();