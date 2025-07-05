let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");

function makeMove(cell, index) {
  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      statusDisplay.textContent = currentPlayer + " wins!";
      gameActive = false;
    } else if (!board.includes("")) {
      statusDisplay.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusDisplay.textContent = currentPlayer + "'s turn";
    }
  }
}

function checkWinner() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  return winCombos.some(combo => {
    return combo.every(i => board[i] === currentPlayer);
  });
}

function resetGame() {
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = "");
  statusDisplay.textContent = currentPlayer + "'s turn";
}

// Initialize game status
statusDisplay.textContent = currentPlayer + "'s turn";
