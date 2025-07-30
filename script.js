let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".img");
let resultPera = document.querySelector(".result-pera");
let userWinNum = document.querySelector(".user-score");
let comWinNum = document.querySelector(".comp-score");



const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];
};

const drawGame = () => {
    resultPera.style.backgroundColor = "rgb(12, 12, 47)";
    resultPera.innerText = "Game was draw. Please try again";
};

const showWinner = (userWin, userchoice, comChoice) => {
    if (userWin) {
        userScore++;
        userWinNum.innerText = userScore;
        resultPera.style.backgroundColor = "green";
        resultPera.innerText = `You Win! Your ${userchoice} beats computer ${comChoice}`;
    } else {
        compScore++;
        comWinNum.innerText = compScore;
        resultPera.style.backgroundColor = "red";
        resultPera.innerText = `You lost! Computer ${comChoice} beats your ${userchoice}`;
    };
};

const playGame = (userchoice) => {
    console.log("user =", userchoice);
    const comChoice = genComChoice();
    console.log("comp =", comChoice);

    if (userchoice == comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = comChoice === "rock" ? true : false;
        } else {
            userWin = comChoice === "rock" ? false : true;
        };

        showWinner(userWin, userchoice, comChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});