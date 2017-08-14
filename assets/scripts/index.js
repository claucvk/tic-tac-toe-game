'use strict'

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const events = require('./games/events.js')

$(() => {
  setAPIOrigin(location, config);
});

// On document ready
$(() => {
  events.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example');

$(function newGame () {
    $('.play-again').on('click', function (event) {

    cell1.html('').on('')
    cell2.html('').on('')
    cell3.html('').on('')
    cell4.html('').on('')
    cell5.html('').on('')
    cell6.html('').on('')
    cell7.html('').on('')
    cell8.html('').on('')
    cell9.html('').on('')
    win = false
    a = [0, 0, 0];
    b = [0, 0, 0];
    c = [0, 0, 0];
    $( document ).ready(function() {
        a0();
        a1();
        a2();
        b0()
        b1()
        b2()
        c0()
        c1()
        c2()
    });
  })

})

// Identify Who is the turn, switch turns and place the marker in the square chosen
const playerX = 1;
const playerO = 2;
let turn = playerX;


let a = [0, 0, 0];
let b = [0, 0, 0];
let c = [0, 0, 0];

let cell1 = $('#a0')
let cell2 = $('#a1')
let cell3 = $('#a2')
let cell4 = $('#b0')
let cell5 = $('#b1')
let cell6 = $('#b2')
let cell7 = $('#c0')
let cell8 = $('#c1')
let cell9 = $('#c2')

let a0 = function(){
$( "#a0" ).click(function() {
    if (turn === playerX) {
    cell1.html('X').off();
  } else {
    cell1.html('O').off();
    }
   markerSquare(turn, a, 0);
});
}

let a1 = function(){
$( "#a1" ).click(function() {
    if (turn === playerX) {
    cell2.html('X').off();
  } else {
    cell2.html('O').off();
    }
   markerSquare(turn, a, 1);
});
}

let a2 = function(){
$( "#a2" ).click(function() {
    if (turn === playerX) {
    cell3.html('X').off();
  } else {
    cell3.html('O').off();
    }
   markerSquare(turn, a, 2);
});
}

let b0 = function(){

$( "#b0" ).click(function() {
    if (turn === playerX) {
    cell4.html('X').off();
    //turn = 2
  } else {
    cell4.html('O').off();
    //turn = 1
    }
   markerSquare(turn, b, 0);
});
}

let b1 = function(){
$( "#b1" ).click(function() {
    if (turn === playerX) {
    cell5.html('X').off();
    //turn = 2
  } else {
    cell5.html('O').off();
    //turn = 1
    }
   markerSquare(turn, b, 1);
});
}

let b2 = function(){
$( "#b2" ).click(function() {
    if (turn === playerX) {
    cell6.html('X').off();
    //turn = 2
  } else {
    cell6.html('O').off();
    //turn = 1
    }
   markerSquare(turn, b, 2);
});
}

let c0 = function(){
$( "#c0" ).click(function() {
    if (turn === playerX) {
    cell7.html('X').off();
    //turn = 2
  } else {
    cell7.html('O').off();
    //turn = 1
    }
   markerSquare(turn, c, 0);
});
}

let c1 = function(){
$( "#c1" ).click(function() {
    if (turn === playerX) {
    cell8.html('X').off();
    //turn = 2
  } else {
    cell8.html('O').off();
    //turn = 1
    }
   markerSquare(turn, c, 1);
});
}

let c2 = function(){
$( "#c2" ).click(function() {
    if (turn === playerX) {
    cell9.html('X').off();
    //turn = 2
  } else {
    cell9.html('O').off();
    //turn = 1
    }
   markerSquare(turn, c, 2);
});
}

let playersTurn = $('.whosTurn')
$( document ).ready(function() {
    a0();
    a1();
    a2();
    b0()
    b1()
    b2()
    c0()
    c1()
    c2()
});


const playerTurn = function playerTurn() {
    if (turn === playerX) {
      turn = playerO
      playersTurn.html("It's Player X's Turn")
      return turn
    } else {
      turn = playerX
      playersTurn.html("It's Player O's Turn")
      return turn
    }
}
const markerSquare = function markerSquare(turn, columnName, columnIndex) {
  columnName[columnIndex] = turn;
  checkingResult();
};

let playerXResults = $('#playerX')
let tiesResults = $('#ties')
let playerOResults = $('#playerO')
let results = $('.results')

let playerXScore = 0;
let playerOScore = 0;
let ties = 0;
let times = 0;
let win = false
// Check each vertical for 3 markers in a row.
const verticalChecking = function verticalChecking() {
  for (let i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerX) {
      playerXScore++;
      playerXResults.html(playerXScore)
      results.html('Player X wins ');
      win = true
      return;
    } else if (a[i] === b[i] && b[i] === c[i] && c[i] === playerO) {
      playerOScore++;
      playerOResults.html(playerOScore)
      results.html('Player O wins ');
      win = true
      return;
    }  else if (times === 9) {
      ties++;
      tiesResults.html(ties)
      results.html("It's a tie");
      win = true
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
    playerXResults.html(playerXScore)
    results.html('Player X wins ');
    win = true
    return;
  } else if (a[0] === a[1] && a[1] === a[2] && a[2] === playerO) {
    playerOScore++;
    playerOResults.html(playerOScore)
    results.html('Player O wins ');
    win = true
    return;
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerX) {
    playerXScore++;
    playerXResults.html(playerXScore)
    results.html('Player X wins ');
    win = true
    return;
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerO) {
    playerOScore++;
    playerOResults.html(playerOScore)
    results.html('Player O wins ');
    win = true
    return;
  } else if (c[0] === c[1] && c[1] === c[2] && c[2] === playerX) {
    playerXScore++;
    playerXResults.html(playerXScore)
    results.html('Player X wins ');
    win = true
    return;
  } else if (c[0] === c[1] && c[1] === c[2]  && c[2] === playerO) {
    playerOScore++;
    playerOResults.html(playerOScore)
    results.html('Player O wins ');
    win = true
  } else if (times === 9) {
    ties++;
    tiesResults.html(ties)
    results.html("It's a tie");
    win = true
    return;
  } else {
    console.log('there is not 3 markers in a row');
  }
};

// Check diagonal starts c[0] for 3 markers in a row.
const diagonalLeftChecking = function diagonalLeftChecking() {
    if (c[0] === b[1] && b[1] === a[2] && a[2] === playerX) {
      playerXScore++;
      playerXResults.html(playerXScore)
      results.html('Player X wins ');
      win = true
      return;
    } else if (c[0] === b[1] && b[1] === a[2] && a[2] === playerO) {
      playerOScore++;
      playerOResults.html(playerOScore)
      results.html('Player O wins ');
      win = true
      return;
    } else if (times === 9) {
      ties++;
      tiesResults.html(ties)
      results.html("It's a tie");
      win = true
      return;
    } else {
      console.log('there is not 3 markers in a row');
    }
  };

// Check diagonal starts a[0] for 3 markers in a row.
const diagonalRightChecking = function diagonalRightChecking() {
    if (a[0] === b[1] && b[1] === c[2] && c[2] === playerX) {
      playerXScore++;
      playerXResults.html(playerXScore)
      results.html('Player X wins ');
      win = true
      return;
    } else if (a[0] === b[1] && b[1] === c[2] && c[2] === playerO) {
      playerOScore++;
      playerOResults.html(playerOScore)
      results.html('Player O wins ');
      win = true
      return;
    } else if (times === 9) {
      ties++;
      tiesResults.html(ties)
      results.html("It's a tie");
      win = true
      return;
    } else {
      console.log('there is not 3 markers in a row');
    }
  };

function checkingResult() {
  times++;
  verticalChecking();
  horizontalChecking();
  diagonalLeftChecking();
  diagonalRightChecking();
  playerTurn();
  console.log(a);
  console.log(b);
  console.log(c);
  if (win === true) {
  console.log('hola')
  }
};
