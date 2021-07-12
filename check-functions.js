// All check functions return false if there is no win;
// If there is a win - they will return the winner's mark
// ('X' or 'O')

function checkWin() {
  let winner = checkRows() || checkCols() || checkDiagonals();
  if (gTurnsCount === 9) {
    winner = 'DRAW';
  }
  return winner;
}

function checkRows() {
  for (const row of gBoard) {
    if (row[0] && row[0] === row[1] && row[1] === row[2]) {
      return row[0];
    }
  }
  return false;
}

function checkCols() {
  for (let j = 0; j < gBoard[0].length; j++) {
    if (
      gBoard[0][j] &&
      gBoard[0][j] === gBoard[1][j] &&
      gBoard[1][j] === gBoard[2][j]
    ) {
      return gBoard[0][j];
    }
  }
  return false;
}

function checkDiagonals() {
  if (
    gBoard[0][0] &&
    gBoard[0][0] === gBoard[1][1] &&
    gBoard[1][1] === gBoard[2][2]
  ) {
    return gBoard[0][0];
  }
  if (
    gBoard[0][2] &&
    gBoard[0][2] === gBoard[1][1] &&
    gBoard[1][1] === gBoard[2][0]
  ) {
    return gBoard[0][2];
  }
  return false;
}
