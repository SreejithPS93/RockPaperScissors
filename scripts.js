const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

userScore = 0;
compScore = 0;

console.log("Hello world");


var rockBut = document.querySelector("#rock");
var paperBut = document.querySelector("#paper");
var scissorsBut = document.querySelector("#scissors");
rockBut.addEventListener("click",() => GetHumanChoice("rock"));
paperBut.addEventListener("click",() => GetHumanChoice("paper"));
scissorsBut.addEventListener("click",() => GetHumanChoice("scissors"));

var winText = document.querySelector("h1");
var hScore = document.querySelector("#userScore");
var cScore = document.querySelector("#compScore");



function GetComputerChoice(){
    var output = "";
    var choice = Math.random();
    //console.log(choice);

    if(choice < 0.33){
        output = "Rock";
    }
    else if(choice > 0.33 && choice < 0.66){
        output = "Paper";
    }
    else{
        output = "Scissors";
    }

    //console.log(output);

    return output.toLowerCase();

}

function GetHumanChoice(hChoice){

    let cChoice = GetComputerChoice();

    console.log("Your choice:" + hChoice);
    console.log("Computer choice: " + cChoice);
    if(hChoice === cChoice){
        console.log("Draw");
        winText.textContent = "Draw";
    }
    else if(winsAgainst[hChoice] === cChoice ){
        console.log("You Win!");
        userScore++;
        winText.textContent = "You win the round";

    }
    else{
        console.log("You lose");
        winText.textContent = "You lose this round";
        compScore++;
    }

    hScore.textContent = userScore;
    cScore.textContent = compScore;

    console.log("UserScore: " + userScore + " || ComputerScore: " + compScore);

    if(userScore >=5 || compScore >=5){
        if(userScore >=5){

            winText.textContent = "You win the game";
        }
        else{
            winText.textContent = "The computer wins the game";
        }
        rockBut.disabled = true;
        paperBut.disabled = true;
        scissorsBut.disabled = true;

    }
    
}



