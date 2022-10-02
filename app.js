playerSquares = document.getElementsByClassName("playersquares");
computerSquares = document.getElementsByClassName("computersquares");

const generatePlayerSquares = () => {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.className = "playerSquares";
    square.setAttribute("id", "square");

    document.getElementById("playergameboard").appendChild(square);
  }
};

const generateComputerSquares = () => {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.className = "computerSquares";
    square.setAttribute("id", "square");

    document.getElementById("computergameboard").appendChild(square);
  }
};

const shipFactory = ((name, length) => {
  const shipLength = length;
  let hitCount = 0;
  const hit = () => {
    hitCount++;
  };
  const isSunk = () => {
    if (hitCount >= shipLength) {
      return true;
    }
    return false;
  };

  return {
    name,
    shipLength,
    hitCount,
    hit,
    isSunk,
  };
})();

const gameBoard = (() => {
  "use strict";
  const m = 10;
  const board = [];
  const populateBoard = () => {
    for (var i = 0; i < 10; i++) {
      board[i] = []
      for (let j = 0; j < 10; j++){
        board[i].push(0)
      }
    }
    return board;
  };

  const placeShip = (length, name, board) => {
    shipFactory(name, length);
    if (shipLength < 1) {
      return;
    } else
      for (let i = 0; i <= shipLength; i++) {
        board.splice(x, shipLength, "1");
      }
    return board;
  };

  let missedAttacks = 0;

  const receiveAttack = (board) => {
    if (board[x][y] === "0") {
      board[x][y];
      return missedAttacks + 1;
    } else {
      shipFactory.hit();
    }
  };

  const checkIfAllSunk = (board) => {
    for (let i = 0; i <= board.length; i++) {
      if (board[x] === "0" && board[y] === "0") {
        return true;
      } else {
        return false;
      }
    }
  };

  return { populateBoard, board, placeShip, receiveAttack, checkIfAllSunk };
})();

const playerFactory = ((name) => {
  return name;
})();

const game = () => {};

generatePlayerSquares();

generateComputerSquares();

gameBoard.populateBoard;
