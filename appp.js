let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const getCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("The game was draw.");
    msg.innerText = "Game was draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true) {
        userScore++
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else if (userWin == false) {
        compScore++
        compscorePara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `you lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    else if(userWin == null) {
        msg.innerText = "Game was a draw. Play again."
        msg.style.backgroundColor = "#081b31";
    }
    
};
const playGame = (userChoice) => {
console.log("user choice =", userChoice);
const compChoice = getCompChoice();
console.log("comp choice =", compChoice);

let userWin;

if(userChoice == compChoice) {
    //Draw Game
    userWin = null;
    drawGame();

}
else{
    
    if(userChoice == "rock") {
        //scissors, paper
       userWin = compChoice == "paper" ? false : true;
    }
    else if(userChoice == "paper") {
        //rock,scissors
        userWin = compChoice == "scissors" ? false : true;
    }
    else if(userChoice == "scisscrs") {
        //rock,paper
        userWin = compChoice == "rock" ? false : true;
    }
}
showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
    console.log(choice);
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
console.log("choice was clicked", userChoice);
playGame(userChoice);
});
});

