const buttons = document.querySelectorAll("button");
const result = ["가위", "바위", "보"];
let message = "";

const show = (user, computer, message) => {
  let userChoice = document.querySelector(".you-choice");
  let computerChoice = document.querySelector(".computer-choice");
  let winner = document.querySelector(".result");

  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) message = "무승부";
  else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "내가 이김";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 이김";
        break;
    }
  }

  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const computer = result[Math.floor(Math.random() * 3)];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
