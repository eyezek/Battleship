const shipFactory = ((length) => {
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
    shipLength,
    hitCount,
    hit,
    isSunk,
  };
})();

const gameBoard = (() => {
  "use strict";
  const m = 10;
  const board = new Array(m);
  const populateBoard = () => {
    const n = 10;
    for (var i = 0; i < m; i++) {
      board[i] = new Array(n);
    }
    return board;
  };

  const placeShip = (length, location, hitbox) => {
    shipFactory(length);
  };

  return { populateBoard, board, placeShip };
})();

const playerFactory = (name) => {
  return name;
};

gameBoard.populateBoard;
