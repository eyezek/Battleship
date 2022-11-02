// const makeSquares = (classname) => {
//   let number = 0;
//   let squareofsquares = [];
//   for (let i = 0; i < 10; i++) {
//     let squares = [];
//     for (let j = 0; j < 10; j++) {
//       let square = document.createElement("div");
//       square.className = classname;
//       square.setAttribute("id", "square");
//       square.setAttribute("number", number);
//       squares.push(square);
//       number++;
//     }
//     squareofsquares.push(squares);
//   }
//   return squareofsquares;
// };

instructionsText = document.getElementById("instructions");

const makeSquares = (classname) => {
  let num = 0;
  let row = 0;
  let squareofsquares = [];
  for (let i = 0; i < 10; i++) {
    let squares = [];
    for (let j = 0; j < 10; j++) {
      let square = document.createElement("div");
      square.dataset.number = num;
      num++;
      square.className = classname;
      square.setAttribute("id", "square");
      square.setAttribute("x", j);
      square.setAttribute("y", row);
      squares.push(square);
    }
    row++;
    squareofsquares.push(squares);
  }
  return squareofsquares;
};

const renderSquares = () => {
  const players = [
    { id: "playergameboard", className: "playerSquares" },
    { id: "computergameboard", className: "computerSquares" },
  ];
  for (let i = 0; i < players.length; i++) {
    let gameBoard = players[i];
    const gameSquares = makeSquares(gameBoard.className);
    for (let j = 0; j < gameSquares.length; j++) {
      const squareArray = gameSquares[j];
      for (let e = 0; e < squareArray.length; e++) {
        let square = squareArray[e];
        document.getElementById(gameBoard.id).appendChild(square);
      }
    }
  }
};

renderSquares();

let computerSquares = document.getElementsByClassName("computerSquares");

const shipFactory = (name, length) => {
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
};

let currentShip = "Carrier";
let currentShipLength = 5;

const gameBoard = (() => {
  "use strict";
  const board = [];
  const populateBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push("0");
      }
    }
    return board;
  };

  const placeShip = (x, y, name, length) => {
    document.getElementById("oobpopup").innerHTML = "";
    let ship = shipFactory(name, length);
    if (currentShip === "Carrier") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 4) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds :( Try again! :)";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        (currentShip = "Battleship"), (currentShipLength = 4);
      }
    } else if (currentShip === "Battleship") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 5) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds :( Try again! :)";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        (currentShip = "Cruiser"), (currentShipLength = 3);
      }
    } else if (currentShip === "Cruiser") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 6) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds :( Try again! :)";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        (currentShip = "Submarine"), (currentShipLength = 3);
      }
    } else if (currentShip === "Submarine") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 6) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds :( Try again! :)";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        (currentShip = "Destroyer"), (currentShipLength = 2);
      }
    } else if (currentShip === "Destroyer") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 7) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds :( Try again! :)";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
      }
    }
  };

  const placeShipOnClick = () => {
    let playerSquares = document.querySelectorAll(".playerSquares");
    playerSquares.forEach((square) => {
      square.addEventListener("click", function () {
        const x = square.getAttribute("x"),
          y = square.getAttribute("y");
        console.log(x, y);
        console.log(
          `x: ${x}, y: ${y}, ship: ${currentShip}, length: ${currentShipLength}`
        );
        placeShip(+x, +y, currentShip, currentShipLength);
      });
    });
  };

  let missedAttacks = 0;

  const receiveAttack = (x, y) => {
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

  const displayInstructions = (currentShip) => {
    if (currentShip === "Carrier") {
      document.getElementById("instructions").innerHTML =
        "Place your Carrier, click on a square! :)";
    } else if (currentShip === "Battleship") {
      document.getElementById("instructions").innerHTML =
        "Place your Battleship, click on a square! :)";
    } else if (currentShip === "Cruiser") {
      document.getElementById("instructions").innerHTML =
        "Place your Cruiser, click on a square! :)";
    } else if (currentShip === "Submarine") {
      document.getElementById("instructions").innerHTML =
        "Place your Submarine, click on a square! :)";
    } else if (currentShip === "Destroyer") {
      document.getElementById("instructions").innerHTML =
        "Place your Destroyer, click on a square! :)";
    }
  };

  return {
    displayInstructions,
    populateBoard,
    board,
    placeShip,
    receiveAttack,
    checkIfAllSunk,
    placeShipOnClick,
  };
})();

const playerFactory = ((name) => {
  return name;
})();

const game = () => {};

gameBoard.populateBoard();

gameBoard.displayInstructions();

gameBoard.placeShipOnClick();
