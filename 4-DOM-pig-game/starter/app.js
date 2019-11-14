/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previous;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var dice1DOM = document.getElementById("dice-1");
    var dice2DOM = document.getElementById("dice-2");
    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";
    dice1DOM.src = "dice-" + dice1 + ".png ";
    dice2DOM.src = "dice-" + dice2 + ".png ";

    if (dice1 != 1 && dice2 != 1) {
      roundScore += dice1 + dice2;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }

    // Update the round score if the rolled number was NOT a 1
    // if (dice !== 1) {
    //   // Restart score if the player rolls two 6 in a row
    //   if (previous === 6 && dice === 6) {
    //     scores[activePlayer] = 0;
    //     document.getElementById("score-" + activePlayer).textContent = "0";
    //     nextPlayer();
    //   } else {
    //     roundScore += dice;
    //     document.getElementById(
    //       "current-" + activePlayer
    //     ).textContent = roundScore;
    //     previous = dice;
    //   }
    // } else {
    //   nextPlayer();
    // }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  previous = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add current score to total score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    var input = document.querySelector(".final-score").value;

    if (input) {
      var winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";

      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

// document.getElementById("max-score").addEventListener("keypress", function(e) {
//   var key = e.which || e.keyCode;
//   if (key === 13) {
//     maxScore = parseInt(document.getElementById("max-score").value);
//     document.getElementById("max-score").style.display = "none";
//     document.querySelector("#score-label").textContent =
//       "Max score: " + maxScore;
//     console.log(score);
//   }
// });

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  previous = 0;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  // Set all initial scores to 0
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  // document.getElementById("max-score").style.display = "block";
}
