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
let turn = 1;

let a = [0, 0, 0];
let b = [0, 0, 0];
let c = [0, 0, 0];

let playerXScore = 0;
let playerOScore = 0;
let ties = 0;
let times = 0;

/* let cell1 = $('#a0')
let cell2 = $('#a1')
let cell3 = $('#a2')
let cell4 = $('#b0')
let cell5 = $('#b1')
let cell6 = $('#b2')
let cell7 = $('#c0')
let cell8 = $('#c1')
let cell9 = $('#c2')

function playerClick (event) {
  if (turn === playerX) {
    cell1.html('X')
    cell2.html('X')
    cell3.html('X')
    cell4.html('X')
    cell5.html('X')
    cell6.html('X')
    cell7.html('X')
    cell8.html('X')
    cell9.html('X')
  } else {
    cell1.html('O')
  }
}

$(() => {
  $('#a0, #a1, #a2, #b0, #b1, #b2, #c0, #c1, #c2').click(markerSquare(turn, columnName, columnIndex))
}) */

let cell1 = $('#a0')
let cell2 = $('#a1')
let cell3 = $('#a2')
let cell4 = $('#b0')
let cell5 = $('#b1')
let cell6 = $('#b2')
let cell7 = $('#c0')
let cell8 = $('#c1')
let cell9 = $('#c2')

$( "#a0" ).click(function() {
    if (turn === playerX) {
    cell1.html('X');
    //turn = 2
  } else {
    cell1.html('O');
    //turn = 1
    }
   markerSquare(turn, a, 0);
});

$( "#a1" ).click(function() {
    if (turn === playerX) {
    cell2.html('X');
  } else {
    cell2.html('O');
    }
   markerSquare(turn, a, 1);
});
$( "#a2" ).click(function() {
    if (turn === playerX) {
    cell3.html('X');
  } else {
    cell3.html('O');
    }
   markerSquare(turn, a, 2);
});

const playerTurn = function playerTurn() {
    if (turn === playerX) {
      turn = playerO
      alert('Now is turn' + turn)
      return newturn
    } else {
      turn = playerO
      alert('Now is turn' + turn)
      return newturn
    }
}
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
      case c:
        c[columnIndex] = playerX;
        return checkingResult();
    }

  } else if (turn === playerO) {
    playerClick ()
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
  if (a[0] === a[1] && a[1] === a[2] && a[2] === playerX) {
    playerXScore++;
    console.log('Player X wins ' + playerXScore);
    return;
  } else if (a[0] === a[1] && a[1] === a[2] && a[2] === playerO) {
    playerOScore++;
    console.log('Player O wins ' + playerOScore);
    return;
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerX) {
    playerXScore++;
    console.log('Player X wins ' + playerXScore);
    return;
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerO) {
    playerOScore++;
    console.log('Player O wins ' + playerOScore);
    return;
  } else if (c[0] === c[1] && c[1] === c[2] && c[2] === playerX) {
    playerXScore++;
    console.log('Player X wins');
    return;
  } else if (c[0] === c[1] && c[1] === c[2]  && c[2] === playerO) {
    playerOScore++;
    console.log('Player O wins');
  } else if (times === 9) {
    ties++;
    console.log('It is a tie ' + ties);
    return;
  } else {
    console.log('there is not 3 markers in a row');
  }
};

// Check diagonal starts c[0] for 3 markers in a row.
const diagonalLeftChecking = function diagonalLeftChecking() {
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

// Check diagonal starts a[0] for 3 markers in a row.
const diagonalRightChecking = function diagonalRightChecking() {
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
  times++;
  playerTurn()
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
