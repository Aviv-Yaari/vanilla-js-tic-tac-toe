let gWinner,
  gTurnsCount = 0,
  gMark,
  gBoard = [];
initGame();
addHandlers();

function addHandlers() {
  const cellsElements = document.querySelectorAll('td');
  const playAgainButton = document.querySelector('#playagain');
  for (const cell of cellsElements) {
    cell.addEventListener('click', cellClickHandler);
  }

  playAgainButton.addEventListener('click', initGame);
}

// main logic of the game:
// cellClickHandler => activated on every click on the board
// gameOverOperations => check if game is over and act accordingly.
// Other helper functions in seperate files.

function cellClickHandler() {
  if (this.textContent) {
    return;
  }
  gTurnsCount++;
  const rowIndex = this.getAttribute('rowIndex');
  const colIndex = this.getAttribute('colIndex');
  this.textContent = gMark;
  gBoard[rowIndex][colIndex] = gMark;
  gWinner = checkWin();
  gWinner && gameOverOperations();
  // Next turn:
  gMark = gMark === 'X' ? 'O' : 'X';
}

function gameOverOperations() {
  const winnerElement = document.querySelector('#winner');
  const playAgainButton = document.querySelector('#playagain');
  winnerElement.hidden = false;
  playAgainButton.hidden = false;
  winnerElement.textContent =
    gWinner === 'X' ? 'PLAYER 1 WON' : 'PLAYER 2  WON';

  if (gWinner === 'X') {
    winnerElement.textContent = 'PLAYER 1 WON';
  } else if (gWinner === 'O') {
    winnerElement.textContent = 'PLAYER 2 WON';
  } else {
    winnerElement.textContent = 'DRAW!';
  }
}
