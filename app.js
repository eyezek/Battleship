playerSquares = document.getElementsByClassName("playersquares");
computerSquares = document.getElementsByClassName("computersquares");


const makeSquares = (classname) => {
  let squareofsquares = [];
  for (let i = 0; i < 10; i++) {
    let squares = [];
    for (let j = 0; j < 10; j++) {
      let square = document.createElement("div");
      square.className = classname;
      square.setAttribute("id", "square");
      squares.push(square);
    }
    squareofsquares.push(squares);
  }
  return squareofsquares;
};

const renderSquares = () => {
  const players = [{id: "playergameboard", className: "playerSquares"}, {id: "computergameboard", className: "computerSquares"}];
  for (let i = 0; i < players.length; i++) {
    let gameBoard = players[i]
    const gameSquares = makeSquares(gameBoard.className)
    for ( let j = 0; j < gameSquares.length; j++){
      const squareArray = gameSquares[j]
      for (let e = 0; e < squareArray.length; e++){
        let square = squareArray[e]
        document.getElementById(gameBoard.id).appendChild(square);
      }
    }
  }


}

const ships = {Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2}



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
  const board = [];
  const populateBoard = () => {
    for (let i = 0; i < 10; i++) {
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

renderSquares()
