function playGame(playerPick) {
    var playSelectionMap = {
      1:"Rock",
      2:"Paper",
      3:"Scissors"
    };
    document.getElementById("player-pick").innerHTML = "You selected: " + playSelectionMap[playerPick];
    var bot = new Bot();
    var botPick = bot.randomResult(playSelectionMap);
    var winner = declareWinner(playerPick, botPick);
    var score = trackScore(winner);
    document.getElementById("game-result").innerHTML = "Winner:  " + winner;
}

function declareWinner(playerPick, botPick) {
  var declareWinner = winMatrix(playerPick, botPick);

  if (declareWinner == 0){
    winner = "Tie";
  }
  if (declareWinner == 1) {
    winner = "Human";
  }
  if (declareWinner == -1) {
    winner = "Bot";
  }
  return winner;
}

function trackScore(winner) {
  console.log("Winner :" + winner);
  if(winner === "Human") {
    playerScore++;
    document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
  }
  if(winner === "Bot") {
    botScore++;
    document.getElementById("botScore").innerHTML = "Bot Score: " + botScore;
  }
  if(winner === "Tie") {
    tieScore++;
    document.getElementById("tieScore").innerHTML = "Tie Score: " + tieScore;
  }
}

function winMatrix(playerPick, botPick) {
  var winMatrix = new Array(3);

  for (i = 1; i < 4; i++) {
    winMatrix[i] = new Array(3);
  }
  winMatrix[1][1] = 0;
  winMatrix[1][2] = 1;
  winMatrix[1][3] = -1;
  winMatrix[1][4] = -1;
  winMatrix[1][5] = 1;

  winMatrix[2][1] = -1;
  winMatrix[2][2] = 0;
  winMatrix[2][3] = 1;
  winMatrix[2][4] = 1;
  winMatrix[2][5] = -1;

  winMatrix[3][1] = 1;
  winMatrix[3][2] = -1;
  winMatrix[3][3] = 0;
  winMatrix[3][4] = -1;
  winMatrix[3][5] = 1;

  return winMatrix[playerPick][botPick];
}
