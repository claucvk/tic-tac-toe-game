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

const markerSquare = function markerSquare(turn, columnName, columnIndex) {
  if (turn === playerX) {
    console.log("It's Player X's Turn");
    switch (columnName) {
      case a:
        a[columnIndex] = playerX;
        break;
      case b:
        b[columnIndex] = playerX;
        break;
      case c[i]:
        c[columnIndex] = playerX;
    }

    // return;
  } else if (turn === playerO) {
    console.log("It's Player O's Turn");
    switch (columnName) {
      case a:
        a[columnIndex] = playerO;
        break;
      case b:
        b[columnIndex] = playerO;
        break;
      case c:
        c[columnIndex] = playerO;
    }

    //return;
  };
};

// Display a notification message when there is a three markers in a row (horizontal, vertical or diagonal).

// Check each vertical for 3 markers in a row.
const verticalChecking = function verticalChecking() {
  for (i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i]) {
      console.log(a[i]);
    };
  };
};

// Check each horizontal for 3 markers in a row.
const horizontalChecking = function horizontalChecking() {
  if (a[0] === a[1] && a[1] === a[2]) {
    console.log(a[0]);
  } else if (b[0] === b[1] && b[1] === b[2]) {
    console.log(b[0]);
  } else if (c[0] === c[1] && c[1] === c[2]) {
    console.log(c[0]);
  }
};

// Check each diagonal up for 3 markers in a row.

/*
const markerInSquare = function markerInSquare(column) {
  switch (column) {
    case 'a':
      duplicatedArray = a.slice();
      break;
    case 'b':
      duplicatedArray = b.slice();
      break;
    case 'c':
      duplicatedArray = c.slice();
      break;
    default:
      let duplicatedArray = [];
  }
  for (let i = 0; i < 2; i++) {
    if (duplicatedArray[i] === 0) {
      if (turn === 'playerX') {
        document.getElementById(column + i).innerHTML = "<img src='../images/x.png'>";
        duplicatedArray[i] = 1;
        turn = 'playerO';
        document.getElementByClass('whosTurn').innerHTML = ("It's Player O's Turn");
        document.getElementByClass('whosTurn').style.color = '#933EC5';
      } else {
        document.getElementById(column + i).innerHTML = "<img src='../images/o.png'>";
        duplicatedArray[i] = playerO;
        turn = 'playerX';
        document.getElementByClass('whosTurn').innerHTML = ("It's Player X's Turn");
        document.getElementByClass('whosTurn').style.color = '#006DF0';
      };

      break;
    }

    switch (column) {
      case 'a':
        a = duplicatedArray.slice();
        break;
      case 'b':
        b = duplicatedArray.slice();
        break;
      case 'c':
        c = duplicatedArray.slice();
        break;
      default:
        let duplicatedArray = [];
    }
  }
};
*/
/* let copyColumns = new Array();

for (let i = 0; i < 3; i++) {
  var copy = JSON.parse(JSON.stringify(column1));
  copy.column1 = [1, 0, 0];
  copyColumns.push(copy);
}

console.log(copyColumns); */

/*
let column1 = [0, 0, 0];
let column2 = [0, 0, 0];
let column3 = [0, 0, 0];

const squareChosen = function (turn, columnCopy) {
  if (turn === playerX) {
    for (let index = 0; index < column1.length; index++) {
      columnCopy.slice();
      return columnCopy;
    }
  }
};
*/

// Display and update the score game and the number of ties.

// Display the user total lost games.

// Display the user total won games.

// Display the user total ties.

// Change the password.

// Log out of the game.

function restartGame() {
  document.location.href = '';
};
