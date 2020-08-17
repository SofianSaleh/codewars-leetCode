// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

let validation = {
  BattleShip: false,
  Cruisers: false,
  Destroyers: false,
  Submarines: false,
};

let counts = {
  4: false,
  3: false,
  2: false,
  1: false,
};

function validateBattlefield(field) {
  // write your magic here
  let count = 0;
  let arr = field.flat();
  let columns = [];

  for (let j = 0; j < field.length; j++) {
    columns.push(field[0][j]);
    for (let k = 0; k < 10; k++) {
      columns.push(field[k][j]);
    }
  }

  for (let i = 0; i < 10; i++) {
    count = checkRow(arr, columns);
    console.log(counts[String(count)]);
    if (!counts[String(count)]) {
      counts[String(count)] = true;
    } else {
      return false;
    }
  }
  return true;
}

function checkRow(array, columns) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
    } else if (array[i] !== 1 && count < 2) {
      var coulmnCount = checkColumns(columns);
    }
  }
  return Math.max(coulmnCount, count);
}

function checkColumns(columns) {
  let count = 0;
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] === 1) {
      count++;
    }
  }
  return count;
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
