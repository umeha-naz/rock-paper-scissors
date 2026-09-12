const hands = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

let won = 0;
let lost = 0;
let draw = 0;

function playGame(player) {
  const choices = Object.keys(hands);
  const computer = choices[Math.floor(Math.random() * choices.length)];
  const playerHand = document.getElementById("playerHand");
  const computerHand = document.getElementById("computerHand");

  playerHand.classList.remove("animate");
  computerHand.classList.remove("animate");
  void playerHand.offsetWidth; // animation restart
  playerHand.classList.add("animate");
  computerHand.classList.add("animate");

  setTimeout(() => {
    playerHand.textContent = hands[player];
    computerHand.textContent = hands[computer];
    document.getElementById("playerChoice").textContent = `You chose ${capitalize(player)}`;
    document.getElementById("computerChoice").textContent = `Computer chose ${capitalize(computer)}`;

    let message;
    if (player === computer) {
      draw++;
      message = "It's a Draw!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      won++;
      message = "You Won! 🎉";
    } else {
      lost++;
      message = "Computer Won!";
    }

    document.getElementById("result").textContent = message;
    document.getElementById("wonScore").textContent = won;
    document.getElementById("lostScore").textContent = lost;
    document.getElementById("drawScore").textContent = draw;
  }, 900);
}

function resetGame() {
  won = lost = draw = 0;
  document.getElementById("wonScore").textContent = 0;
  document.getElementById("lostScore").textContent = 0;
  document.getElementById("drawScore").textContent = 0;
  document.getElementById("result").textContent = "Choose Rock, Paper or Scissors";
  document.getElementById("playerChoice").textContent = "Choose below";
  document.getElementById("computerChoice").textContent = "Waiting...";
  document.getElementById("playerHand").textContent = "✊";
  document.getElementById("computerHand").textContent = "✊";
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
