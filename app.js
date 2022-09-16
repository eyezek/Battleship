const shipFactory = (length) => {
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
};

const gameBoard = () => {
  const board = [];
  for (let i = 0; i < 100; i++) {
    board.push("");
  }

  const placeShip = (length, coord) => {
    shipFactory(length);
  };
};
