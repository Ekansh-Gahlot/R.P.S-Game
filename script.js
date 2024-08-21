const choices = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choosenValue = Math.floor(Math.random()*3);
    // console.log("Computer choose "+choices[choosenValue])
    return choices[choosenValue];
}

let round_counter = 0;

function playRound(humanChoice, computerChoice){
    round_counter++;
    const live_stats = document.querySelector('.live-stats')
    const user_score = document.querySelector('.user-score-tracker')
    const computer_score = document.querySelector('.computer-score-tracker')
    const container_one = document.querySelector('.container-one');
    live_stats.style.display = "block";

    console.log("HUMAN CHOOSES "+humanChoice);
    console.log("COMPUTER CHOOSE "+computerChoice);
    //Count the scores
    if((humanChoice === "ROCK" && computerChoice === "ROCK") ||(humanChoice === "SCISSORS" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "PAPER"))
    {
        console.log("it's a tie");
    }
    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        humanScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore++;
    }
    else{
        computerScore++;
    }
    user_score.innerHTML = humanScore;
    computer_score.innerHTML = computerScore;

    //Display the winner
    if(round_counter === 5)
    {   const display = document.createElement('div');
        display.setAttribute('style',' color:white; text-align:center; font-size:24px; font-style:italic;')
        
        if(humanScore > computerScore){
            display.textContent = `The winner is HUMAN! WELL DONE. As it is said, One machine can do the 
            work of fifty ordinary men. No machine can do the work of one extraordinary man`
        }
        else{
            display.textContent = `The winner is MACHINE. I am not easy to beat bro!
             I visualise a time when humans will be to robots 
            what dogs are to humans, and I'm rooting for the machines.`
        }
        container_one.appendChild(display);
    }
}


function playGame(){
    // for(let i = 0; i < 5; i++){
        const humanSelection = null;
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    // }
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

// playGame();


const btn_menu = document.querySelector(".btn-container");

btn_menu.addEventListener('click', (event)=>{
    let target = event.target;
    if(round_counter < 5){
        switch(target.id){
            case 'rock': playRound((target.id).toUpperCase(),getComputerChoice()); break;
            case 'paper': playRound((target.id).toUpperCase(),getComputerChoice()); break;
            case 'scissors': playRound((target.id).toUpperCase(),getComputerChoice()); break;
            default: console.log("Not suitable click registered");
        }
    }
    else{
        displayExitMessage();
    }
})


function displayExitMessage(){
    // const new_message = document.createElement('div');
    // new_message.setAttribute('style','font-size:100px; text-align:center; color:white; font-weight:bolder;')
    // new_message.textContent = "GO AWAY I PLAY NO MORE!"
    // document.body.appendChild(new_message);
    alert("Go Away, I play no more.")
}