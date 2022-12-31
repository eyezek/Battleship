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

let playerSquares = document.querySelectorAll(".playerSquares");

let computerSquares = document.querySelectorAll(".computerSquares");

// make squares that are to be rendered later
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
      square.setAttribute("x", j);
      square.setAttribute("y", row);
      squares.push(square);
    }
    row++;
    squareofsquares.push(squares);
  }
  return squareofsquares;
};

// render squares on page
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

class Ship {
  constructor(name, length) {
    this.name = name;
    this.shipLength = length;
    this.hitCount = 0;
  }
  hit = () => {
    if (this.isSunk()) {
      console.log("already sank");
      return;
    } else {
      this.hitCount++;
    }
  };
  isSunk = () => {
    if (this.hitCount == this.shipLength) {
      return true;
    } else {
      return false;
    }
  };
}

let currentShip = "Carrier";
let currentShipLength = 5;

const gameBoard = (() => {
  "use strict";
  const playerBoard = [];
  // populate player board array
  const populatePlayerBoard = () => {
    for (let i = 0; i < 10; i++) {
      playerBoard[i] = [];
      for (let j = 0; j < 10; j++) {
        playerBoard[i].push("0");
      }
    }
    return playerBoard;
  };

  const computerBoard = [];
  // populate computer board array
  const populateComputerBoard = () => {
    for (let i = 0; i < 10; i++) {
      computerBoard[i] = [];
      for (let j = 0; j < 10; j++) {
        computerBoard[i].push("0");
      }
    }
    return computerBoard;
  };
  // display "place x ship" instructions on page
  const displayInstructions = () => {
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

  // fill board array with ship and fill the correct squares in dom
  const placeShipForClick = (x, y, name, length, board, cl) => {
    document.getElementById("oobpopup").innerHTML = "";
    let ship = new Ship(name, length);
    if (currentShip === "Carrier") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 4) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds 😐 Try again! 😁";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`${cl}[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        console.log(document.querySelector(`[x='${x}'][y='${y}']`));
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        console.log(document.querySelector(`[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        console.log(document.querySelector(`[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        console.log(document.querySelector(`[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        console.log(document.querySelector(`[x='${x + i}'][y='${y}']`));
        gameBoard.displayInstructions();
        (currentShip = "Battleship"), (currentShipLength = 4);
      }
    } else if (currentShip === "Battleship") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 5) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds 😐 Try again! 😁";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`${cl}[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        gameBoard.displayInstructions();
        (currentShip = "Cruiser"), (currentShipLength = 3);
      }
    } else if (currentShip === "Cruiser") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 6) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds 😐 Try again! 😁";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`${cl}[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        gameBoard.displayInstructions();
        (currentShip = "Submarine"), (currentShipLength = 3);
      }
    } else if (currentShip === "Submarine") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 6) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds 😐 Try again! 😁";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`${cl}[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        gameBoard.displayInstructions();
        (currentShip = "Destroyer"), (currentShipLength = 2);
      }
    } else if (currentShip === "Destroyer") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (x > 7) {
          console.log("Ship placed out of bounds...");
          document.getElementById("oobpopup").innerHTML =
            "Ship placed out of bounds 😐 Try again! 😁";
          return;
        }
        board[x][y] = ship;
        document
          .querySelector(`${cl}[x='${x}'][y='${y}']`)
          .classList.add("placedShip");
        board[x + i][y] = ship;
        document
          .querySelector(`${cl}[x='${x + i}'][y='${y}']`)
          .classList.add("placedShip");
        document.getElementById("instructions").innerHTML = "";
      }
      return (currentShip = "");
    }
  };
  // on click, run place ship for click function and place from clicked square onward... horizontally for now
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
        placeShipForClick(
          +x,
          +y,
          currentShip,
          currentShipLength,
          playerBoard,
          ".playerSquares"
        );
      });
    });
  };

  const placeShipForGeneration = (
    x,
    y,
    currentShip,
    currentShipLength,
    board,
    cl
  ) => {
    let ship = new Ship(currentShip, currentShipLength);
    if (currentShip === "Carrier") {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y] = ship;
        console.log(document.querySelector(`${cl}[x='${x}'][y='${y}']`));
        board[x + i][y] = ship;
        console.log(document.querySelector(`${cl}[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        console.log(document.querySelector(`${cl}[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        console.log(document.querySelector(`${cl}[x='${x + i}'][y='${y}']`));
        board[x + i][y] = ship;
        console.log(document.querySelector(`${cl}[x='${x + i}'][y='${y}']`));
        gameBoard.displayInstructions();
        (currentShip = "Battleship"), (currentShipLength = 4);
      }
    } else if (currentShip === "Battleship") {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y] = ship;
        board[x + i][y] = ship;
        board[x + i][y] = ship;
        board[x + i][y] = ship;
        gameBoard.displayInstructions();
        (currentShip = "Cruiser"), (currentShipLength = 3);
      }
    } else if (currentShip === "Cruiser") {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y] = ship;
        board[x + i][y] = ship;
        board[x + i][y] = ship;
        gameBoard.displayInstructions();
        (currentShip = "Submarine"), (currentShipLength = 3);
      }
    } else if (currentShip === "Submarine") {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y] = ship;
        board[x + i][y] = ship;
        board[x + i][y] = ship;
        gameBoard.displayInstructions();
        (currentShip = "Destroyer"), (currentShipLength = 2);
      }
    } else if (currentShip === "Destroyer") {
      for (let i = 0; i < ship.shipLength; i++) {
        board[x][y] = ship;
        board[x + i][y] = ship;
        document.getElementById("instructions").innerHTML = "";
      }
      return currentShip;
    }
  };

  const generateComputerCarrierShip = () => {
    let randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    let Carrier = new Ship("Carrier", 5);
    let freeSpaceCheck;
    for (let i = 0; i <= Carrier.shipLength; i++) {
      if (typeof computerBoard[randomNum1 + i][randomNum2] !== "string") {
        freeSpaceCheck = false;
      }
    }
    if (freeSpaceCheck == false) {
      randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
      randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Carrier",
        Carrier.shipLength,
        computerBoard,
        ".computerSquares"
      );
    } else {
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Carrier",
        Carrier.shipLength,
        computerBoard,
        ".computerSquares"
      );
    }
  };

  const generateComputerBattleship = () => {
    let randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    let Battleship = new Ship("Battkeship", 4);
    let freeSpaceCheck;
    for (let i = 0; i <= Battleship.shipLength; i++) {
      if (typeof computerBoard[randomNum1 + i][randomNum2] !== "string") {
        freeSpaceCheck = false;
      }
    }
    if (freeSpaceCheck == false) {
      randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
      randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Battleship",
        Battleship.shipLength,
        computerBoard,
        ".computerSquares"
      );
    } else {
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Battleship",
        Battleship.shipLength,
        computerBoard,
        ".computerSquares"
      );
    }
  };

  const generateComputerCruiserShip = () => {
    let randomNum1 = Math.floor(Math.random() * (6 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    let Cruiser = new Ship("Cruiser", 3);
    let freeSpaceCheck;
    for (let i = 0; i <= Cruiser.shipLength; i++) {
      if (typeof computerBoard[randomNum1 + i][randomNum2] !== "string") {
        freeSpaceCheck = false;
      }
    }
    if (freeSpaceCheck == false) {
      randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
      randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Cruiser",
        Cruiser.shipLength,
        computerBoard,
        ".computerSquares"
      );
    } else {
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Cruiser",
        Cruiser.shipLength,
        computerBoard,
        ".computerSquares"
      );
    }
  };

  const generateComputerSubmarineShip = () => {
    let randomNum1 = Math.floor(Math.random() * (6 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    let Submarine = new Ship("Submarine", 3);
    let freeSpaceCheck;
    for (let i = 0; i <= Submarine.shipLength; i++) {
      if (typeof computerBoard[randomNum1 + i][randomNum2] !== "string") {
        freeSpaceCheck = false;
      }
    }
    if (freeSpaceCheck == false) {
      randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
      randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Submarine",
        Submarine.shipLength,
        computerBoard,
        ".computerSquares"
      );
    } else {
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Submarine",
        Submarine.shipLength,
        computerBoard,
        ".computerSquares"
      );
    }
  };

  const generateComputerDestroyerShip = () => {
    let randomNum1 = Math.floor(Math.random() * (7 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    let Destroyer = new Ship("Destroyer", 2);
    let freeSpaceCheck;
    for (let i = 0; i <= Destroyer.shipLength; i++) {
      if (typeof computerBoard[randomNum1 + i][randomNum2] !== "string") {
        freeSpaceCheck = false;
      }
    }
    if (freeSpaceCheck == false) {
      randomNum1 = Math.floor(Math.random() * (4 - 0) + 0);
      randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Destroyer",
        Destroyer.shipLength,
        computerBoard,
        ".computerSquares"
      );
    } else {
      placeShipForGeneration(
        randomNum1,
        randomNum2,
        "Destroyer",
        Destroyer.shipLength,
        computerBoard,
        ".computerSquares"
      );
    }
  };

  let missedAttacks = 0;

  // go through board array and mark ship as being hit if available. change css class to reflect that
  const receiveAttack = (x, y, board, cl) => {
    if (board[x][y] == "0") {
      board[x][y];
      document
        .querySelector(`${cl}[x='${x}'][y='${y}']`)
        .classList.add("missed");
      return missedAttacks + 1;
    } else if (typeof board[x][y] !== "string") {
      board[x][y].hit();
      document.querySelector(`${cl}[x='${x}'][y='${y}']`).classList.add("hit");
    }
  };

  const renderSunkPlayerShips = () => {
    let cl = ".playerSquares";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (
          typeof gameBoard.playerBoard[i][j] !== "string" &&
          gameBoard.playerBoard[i][j].isSunk()
        ) {
          console.log(gameBoard.playerBoard[i][j]);
          document
            .querySelector(`${cl}[x='${i}'][y='${j}']`)
            .classList.add("sunk");
        }
      }
    }
  };

  let computerSquares = document.querySelectorAll(".computerSquares");

  const renderSunkComputerShips = () => {
    let cl = ".computerSquares";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (
          typeof computerBoard[i][j] !== "string" &&
          computerBoard[i][j].isSunk()
        ) {
          document
            .querySelector(`${cl}[x='${i}'][y='${j}']`)
            .classList.add("sunk");
        }
      }
    }
  };

  const sendComputerAttack = () => {
    let randomNum1 = Math.floor(Math.random() * (10 - 0) + 0);
    let randomNum2 = Math.floor(Math.random() * (10 - 0) + 0);
    receiveAttack(randomNum1, randomNum2, playerBoard, ".playerSquares");
  };

  const attackComputerBoardOnClick = () => {
    let computerSquares = document.querySelectorAll(".computerSquares");
    computerSquares.forEach((square) => {
      square.addEventListener("click", function () {
        const x = square.getAttribute("x"),
          y = square.getAttribute("y");
        receiveAttack(x, y, computerBoard, ".computerSquares");
      });
    });
  };

  // check if all ships have been sunk in array
  const checkIfAllSunk = (board) => {
    let foundShipsArray = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof board[i][j] !== "string") {
          foundShipsArray.push(board[i][j]);
        }
      }
    }
    for (let i = 0; i < foundShipsArray.length; i++) {
      if (foundShipsArray[i].hitCount < foundShipsArray[i].shipLength) {
        return false;
      }
    }
    return true;
  };

  const turn = () => {
    computerSquares.forEach((square) => {
      square.addEventListener("click", () => {
        if (
          checkIfAllSunk(playerBoard) === false &&
          checkIfAllSunk(computerBoard) === false
        ) {
          renderSunkComputerShips();
          sendComputerAttack();
          renderSunkPlayerShips();
        } else if (checkIfAllSunk(playerBoard) === true) {
          renderSunkComputerShips();
          square.removeEventListener;
          document.getElementById("instructions").innerHTML = "CPU Won... 🤕";
        } else if (checkIfAllSunk(computerBoard) === true) {
          renderSunkComputerShips();
          square.removeEventListener;
          document.getElementById("instructions").innerHTML = "You Won! 🥳 ";
        }
      });
    });
  };

  return {
    displayInstructions,
    populatePlayerBoard,
    populateComputerBoard,
    playerBoard,
    computerBoard,
    placeShipForClick,
    placeShipForGeneration,
    generateComputerCarrierShip,
    generateComputerBattleship,
    generateComputerCruiserShip,
    generateComputerSubmarineShip,
    generateComputerDestroyerShip,
    receiveAttack,
    sendComputerAttack,
    attackComputerBoardOnClick,
    checkIfAllSunk,
    placeShipOnClick,
    renderSunkPlayerShips,
    renderSunkComputerShips,
    turn,
  };
})();

const playerFactory = ((name) => {
  return name;
})();

const game = () => {
  gameBoard.populatePlayerBoard();

  gameBoard.populateComputerBoard();

  gameBoard.placeShipOnClick();

  gameBoard.generateComputerCarrierShip();

  gameBoard.generateComputerBattleship();

  gameBoard.generateComputerCruiserShip();

  gameBoard.generateComputerSubmarineShip();

  gameBoard.generateComputerDestroyerShip();

  gameBoard.attackComputerBoardOnClick();

  gameBoard.displayInstructions();

  gameBoard.turn();
};
game();
