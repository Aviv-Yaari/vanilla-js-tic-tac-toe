// Init and Clear Functions:

function initGame() {
  const winnerElement = document.querySelector('#winner');
  const playAgainButton = document.querySelector('#playagain');
  initBoard();
  initBoardElement();
  gTurnsCount = 0;
  gMark = 'X';
  gWinner = null;
  winnerElement.hidden = true;
  playAgainButton.hidden = true;
}

function initBoard() {
  gBoard = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(null);
    }
    gBoard.push(row);
  }
}

function clearCellElements() {
  const cellsElements = document.querySelectorAll('td');
  for (const cell of cellsElements) {
    if (cell.innerText) {
      cell.innerText = '';
    }
  }
}

function initBoardElement() {
  const boardElement = document.querySelector('#board');
  if (document.querySelector('td')) {
    // if we already created the cells, just empty them
    clearCellElements();
    return;
  }
  for (let i = 0; i < 3; i++) {
    const rowElement = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
      const cellElement = document.createElement('td');
      cellElement.setAttribute('rowIndex', i);
      cellElement.setAttribute('colIndex', j);
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
}
