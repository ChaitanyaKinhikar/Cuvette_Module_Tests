const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScoreValue = document.querySelector("#userScore");
const computerScoreValue = document.querySelector("#computerScore");
const playSection = document.querySelector("#playSection");
const resultScreen = document.querySelector(".result-screen");
const ruleButton = document.querySelector(".rule-btn");
const ruleContainer = document.querySelector(".rule-container");
const ruleBoxCloseButton = document.querySelector(".close-btn");
const playAgain = document.querySelector("#play-again");
const nextButton = document.querySelector("#next-btn");
const userPick = document.querySelector("#user");
const computerPick = document.querySelector("#pc");
const resultText = document.querySelector("#winner");
const userChoiceImage = document.querySelector("#userChoiceImage");
const computerChoiceImage = document.querySelector("#pcChoiceImage");
const userWinAnimation = document.querySelector("#user");
const pcWinAnimation = document.querySelector("#pc");

var userChoice;
var computerChoice;

let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;

userScoreValue.textContent = userScore;
computerScoreValue.textContent = computerScore;

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

window.onload = function () {
    resultScreen.style.display = "none";
    playSection.style.display = "flex";

    userPick.classList.remove(`${userChoice}`);
    userChoiceImage.src = "";

    computerChoiceImage.src = "";
    computerPick.classList.remove(`${computerChoice}`);

    playAgain.textContent = "PLAY AGAIN";
    userChoice = "";
    computerChoice = "";

    userWinAnimation.classList.remove("win-animation");
    pcWinAnimation.classList.remove("win-animation");
};

playAgain.addEventListener("click", () => {
    resultScreen.style.display = "none";
    playSection.style.display = "flex";

    userPick.classList.remove(`${userChoice}`);
    userChoiceImage.src = "";

    computerChoiceImage.src = "";
    computerPick.classList.remove(`${computerChoice}`);

    playAgain.textContent = "PLAY AGAIN";
    userChoice = "";
    computerChoice = "";

    userWinAnimation.classList.remove("win-animation");
    pcWinAnimation.classList.remove("win-animation");
});

let isRuleBoxOpen = true;
ruleButton.addEventListener("click", () => {
    if (!isRuleBoxOpen) {
        ruleContainer.style.display = "flex";
    }
});

ruleBoxCloseButton.addEventListener("click", () => {
    ruleContainer.style.display = "none";
    isRuleBoxOpen = false;
});

rock.addEventListener("click", () => {
    userChoice = rock.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `Images/${userChoice}.png`;

    playSection.style.display = "none";
    resultScreen.style.display = "flex";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `Images/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++;
        localStorage.setItem("userScore", `${userScore}`);
        userScoreValue.textContent = userScore;
        nextButton.style.display = "flex";
        resultText.textContent = "YOU WIN";
        userWinAnimation.classList.add("win-animation");  //

    } else if (userChoice === computerChoice) {
        resultText.textContent = "TIE UP";
        playAgain.textContent = "REPLAY";
    }
    else {
        computerScore++;
        localStorage.setItem("computerScore", `${computerScore}`);
        computerScoreValue.textContent = computerScore;
        nextButton.style.display = "none";
        resultText.textContent = "YOU LOST";
        pcWinAnimation.classList.add("win-animation");
    }
});

paper.addEventListener("click", () => {
    userChoice = paper.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `Images/${userChoice}.png`;

    playSection.style.display = "none";
    resultScreen.style.display = "flex";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `Images/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        localStorage.setItem("userScore", `${userScore}`);
        userScoreValue.textContent = userScore;
        nextButton.style.display = "flex";
        resultText.textContent = "YOU WIN";
        userWinAnimation.classList.add("win-animation");
    } else if (userChoice === computerChoice) {
        resultText.textContent = "TIE UP";
        playAgain.textContent = "REPLAY";
    }
    else {
        computerScore++;
        localStorage.setItem("computerScore", `${computerScore}`);
        computerScoreValue.textContent = computerScore;
        nextButton.style.display = "none";
        resultText.textContent = "YOU LOST";
        pcWinAnimation.classList.add("win-animation")
    }
});

scissors.addEventListener("click", () => {
    userChoice = scissors.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `Images/${userChoice}.png`;

    playSection.style.display = "none";
    resultScreen.style.display = "flex";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `Images/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
        localStorage.setItem("userScore", `${userScore}`);
        userScoreValue.textContent = userScore;
        nextButton.style.display = "flex";
        resultText.textContent = "YOU WIN";
        userWinAnimation.classList.add("win-animation");
    } else if (userChoice === computerChoice) {
        resultText.textContent = "TIE UP";
        playAgain.textContent = "REPLAY";
    } else {
        computerScore++;
        localStorage.setItem("computerScore", `${computerScore}`);
        computerScoreValue.textContent = computerScore;
        nextButton.style.display = "none";
        resultText.textContent = "YOU LOST";
        pcWinAnimation.classList.add("win-animation");
    }
});
