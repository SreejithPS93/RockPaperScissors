const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

userScore = 0;
compScore = 0;

console.log("Hello world");
while(true){

    PlayRound();
}



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

function GetHumanChoice(){

    let humanChoice = prompt("Enter Rock, Paper or Scissors");

    return humanChoice.toLowerCase();
    
}

function PlayRound(){
    let hChoice = GetHumanChoice();
    let cChoice = GetComputerChoice();

    console.log("Your choice:" + hChoice);
    console.log("Computer choice: " + cChoice);
    if(hChoice === cChoice){
        console.log("Draw");
    }
    else if(winsAgainst[hChoice] === cChoice ){
        console.log("You Win!");
        userScore++;

    }
    else{
        console.log("You lose");
        compScore++;
    }

    console.log("UserScore: " + userScore + " || ComputerScore: " + compScore);

}

