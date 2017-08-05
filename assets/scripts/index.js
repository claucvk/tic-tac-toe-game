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

let a = [11, 22, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];

let playerXScore = 0;
let playerOScore = 0;
let ties = 0;
let times = 0;

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

/*if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}*/

/*if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}*/
const verticalChecking = function verticalChecking() {
  for (i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerX) {
      playerXScore++;
      console.log('Player X wins ' + playerXScore);
      return;
    } else if (a[i] === b[i] && b[i] === c[i] && c[i] === playerO) {
      playerOScore++;
      console.log('Player O wins ' + playerOScore);
      return;
    }  else if (times === 9) {
      ties++;
      console.log('It is a tie ' + ties);
      return;
    }  else {
      console.log('there is not 3 markers in a row');
    }
  };
};

// Check each horizontal for 3 markers in a row.
const horizontalChecking = function horizontalChecking() {
  times++;
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

// Check diagonal starts c[0] for 3 markers in a row.
const diagonalLeftChecking = function diagonalLeftChecking() {
    times++;
    if (c[0] === b[1] && b[1] === a[2] && a[2] === playerX) {
      playerXScore++;
      console.log('Player X wins ' + playerXScore);
      return;
    } else if (c[0] === b[1] && b[1] === a[2] && a[2] === playerO) {
      playerOScore++;
      console.log('Player O wins ' + playerOScore);
      return;
    } else if (times === 9) {
      ties++;
      console.log('It is a tie ' + ties);
      return;
    } else {
      console.log('there is not 3 markers in a row');
    }
  };

/*if (condition1) {
      block of code to be executed if condition1 is true
  } else if (condition2) {
      block of code to be executed if the condition1 is false and condition2 is true
  } else {
      block of code to be executed if the condition1 is false and condition2 is false
  }*/

// Check diagonal starts a[0] for 3 markers in a row.
const diagonalRightChecking = function diagonalRightChecking() {
    times++;
    if (a[0] === b[1] && b[1] === c[2] && c[2] === playerX) {
      playerXScore++;
      console.log('Player X wins ' + playerXScore);
      return;
    } else if (a[0] === b[1] && b[1] === c[2] && c[2] === playerO) {
      playerOScore++;
      console.log('Player O wins ' + playerOScore);
      return;
    } else if (times === 9) {
      ties++;
      console.log('It is a tie ' + ties);
      return;
    } else {
      console.log('there is not 3 markers in a row');
    }
  };

function checkingResult() {
  verticalChecking();
  horizontalChecking();
  diagonalLeftChecking();
  diagonalRightChecking();
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
