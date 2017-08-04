'use strict'

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example');

function restartGame() {
  document.location.href = '';
}

// Sign up/ sign in to play the game.

// Identify Who is the turn, switch turns and place the marker in the square chosen
const playerX = 1;
const playerO = 2;
let turn;

let a = [0, 0, 0];
let b = [0, 0, 0];
let c = [0, 0, 0];

let playerXScore = 0;
let playerOScore = 0;

/*$(document).ready(function () {
  $('#c1').on('click', function (event) {
    markerSquare(turn, columnName, columnIndex); // como introducir los parametros de abajo.
  });
});*/

/*document.getElementByTagName(td).addEventListener('click', function () {
  document.getElementById(td).innerHTML = "<img src='../images/x.png'>";
});*/

const markerSquare = function markerSquare(turn, columnName, columnIndex) {
  if (turn === playerX) {
    console.log("It's Player X's Turn");
    switch (columnName) {
      case a:
        a[columnIndex] = playerX;
        return checkingResult();
        break;
      case b:
        b[columnIndex] = playerX;
        return checkingResult();
        break;
      case c[i]:
        c[columnIndex] = playerX;
        return checkingResult();
    }

  } else if (turn === playerO) {
    console.log("It's Player O's Turn");
    switch (columnName) {
      case a:
        a[columnIndex] = playerO;
        return checkingResult();
        break;
      case b:
        b[columnIndex] = playerO;
        return checkingResult();
        break;
      case c:
        c[columnIndex] = playerO;
        return checkingResult();
    }

  };
};

// Display a notification message when there is a three markers in a row (horizontal, vertical or diagonal).

// Check each vertical for 3 markers in a row.
const verticalChecking = function verticalChecking() {
  for (i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerX) {
      playerXScore++;
      console.log('Player X wins');
    } else if (a[i] === b[i] && b[i] === c[i] && c[i] === playerO)
      playerOScore++;
    console.log('Player O wins');
  };
};

// Check each horizontal for 3 markers in a row.

const horizontalChecking = function horizontalChecking() {
  if (a[0] != 0 || a[0] === a[1] && a[1] === a[2] === playerX) {
    playerXScore++;
    console.log('Player X wins');
  } else if (a[0] != 0 || a[0] === a[1] && a[1] === a[2] === playerO) {
    playerOScore++;
    console.log('Player O wins');
  } else if (b[0] != 0 || b[0] === b[1] && b[1] === b[2] === playerX) {
    playerXScore++;
    console.log('Player X wins');
  } else if (b[0] != 0 || b[0] === b[1] && b[1] === b[2] === playerX === playerO) {
    playerOScore++;
    console.log('Player O wins');
  } else if (c[0] != 0 || c[0] === c[1] && c[1] === c[2] === playerX) {
    console.log(c[0]);
    playerXScore++;
    console.log('Player X wins');
  } else if (c[0] != 0 || c[0] === c[1] && c[1] === c[2] === playerO) {
    playerOScore++;
    console.log('Player O wins');
  }
};

// Check diagonal up for 3 markers in a row.
const diagonalupChecking = function diagonalupChecking() {
  if (c[0] === b[1] && b[1] === a[2] === playerX) {
    console.log('Player X wins');
  } else if (c[0] === b[1] && b[1] === a[2] === playerO)
    playerOScore++;
  console.log('Player O wins');
};

// Check diagonal down for 3 markers in a row.
const diagonaldownChecking = function diagonaldownChecking() {
  if (a[0] === b[1] && b[1] === c[2] === playerX) {
    console.log('Player X wins');
  } else if (a[0] === b[1] && b[1] === c[2] === playerO)
    playerOScore++;
  console.log('Player O wins');
};

function checkingResult() {
  verticalChecking();
  horizontalChecking();
  diagonalupChecking();
  diagonaldownChecking();
};

// Display and update the score game and the number of ties.

// Display the user total lost games.

// Display the user total won games.

// Display the user total ties.

// Change the password.

// Log out of the game.

function restartGame() {
  document.location.href = '';
};
