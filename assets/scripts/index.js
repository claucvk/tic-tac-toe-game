'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./games/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  events.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
let win = false
$(function newGame() {
  $('.play-again').on('click', function(event) {
    $('.boardGame').find('.box').html('').on('')
    win = false
    a = [0, 0, 0]
    b = [0, 0, 0]
    c = [0, 0, 0]
    $(document).ready(function() {
      a0()
      a1()
      a2()
      b0()
      b1()
      b2()
      c0()
      c1()
      c2()
    })
  })
})


// Identify Who is the turn, switch turns and place the marker in the square chosen
const playerX = 1
const playerO = 2
let turn = playerX

let a = [0, 0, 0]
let b = [0, 0, 0]
let c = [0, 0, 0]

const mark = function(selector, column, columnIndex) {
  $(selector).click(function() {
    if (win === true) {
      return
    }
    if ($(this).html() !== '') {
      return
    }
    if (turn === playerX) {
      $(this).html('X').off('')
    } else {
      $(this).html('O').off('')
    }
    markerSquare(turn, column, columnIndex)
  })
}

const a0 = () => mark('#a0', a, 0)
const a1 = () => mark('#a1', a, 1)
const a2 = () => mark('#a2', a, 2)
const b0 = () => mark('#b0', b, 0)
const b1 = () => mark('#b1', b, 1)
const b2 = () => mark('#b2', b, 2)
const c0 = () => mark('#c0', c, 0)
const c1 = () => mark('#c1', c, 1)
const c2 = () => mark('#c2', c, 2)

const playersTurn = $('.whosTurn')
$(document).ready(function() {
  a0()
  a1()
  a2()
  b0()
  b1()
  b2()
  c0()
  c1()
  c2()
})

const playerTurn = function playerTurn() {
  if (turn === playerX) {
    turn = playerO
    playersTurn.html("It's Player O's Turn")
    return turn
  } else {
    turn = playerX
    playersTurn.html("It's Player X's Turn")
    return turn
  }
}
const markerSquare = function markerSquare (turn, columnName, columnIndex) {
  columnName[columnIndex] = turn
  checkingResult()
}

const playerXResults = $('#playerX')
const tiesResults = $('#ties')
const playerOResults = $('#playerO')
const results = $('.results')

let playerXScore = 0
let playerOScore = 0
let ties = 0
let times = 0

// Check winner
const onWin = (player) => {
  if (player === 'X') {
    playerXScore++
    playerXResults.html(playerXScore)
    results.html('Player X wins ')
  } else if (player === 'O') {
    playerOScore++
    playerOResults.html(playerOScore)
    results.html('Player O wins ')
  }
  win = true
}

// Check each vertical for 3 markers in a row.
const verticalChecking = function verticalChecking () {
  for (let i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerX) {
      onWin('X')
    }
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerO) {
      onWin('O')
    } else if (times === 9 && win === false) {
      ties++
      tiesResults.html(ties)
      win = true
      results.html("It's a tie")
      return
    } else {
      console.log('there is not 3 markers in a row')
    }
  }
}

// Check each horizontal for 3 markers in a row.
const horizontalChecking = function horizontalChecking () {
  if (a[0] === a[1] && a[1] === a[2] && a[2] === playerX) {
    onWin('X')
  }
  if (a[0] === a[1] && a[1] === a[2] && a[2] === playerO) {
    onWin('O')
  }
  if (b[0] === b[1] && b[1] === b[2] && b[2] === playerX) {
    onWin('X')
  }
  if (b[0] === b[1] && b[1] === b[2] && b[2] === playerO) {
    onWin('O')
  }
  if (c[0] === c[1] && c[1] === c[2] && c[2] === playerX) {
    onWin('X')
  }
  if (c[0] === c[1] && c[1] === c[2] && c[2] === playerO) {
    onWin('O')
  }
  if (times === 9 && win === false) {
    ties++
    tiesResults.html(ties)
    win = true
    results.html("It's a tie")
    return
  } else {
    console.log('there is not 3 markers in a row')
  }
}

// Check diagonal starts c[0] for 3 markers in a row.
const diagonalLeftChecking = function diagonalLeftChecking () {
  if (c[0] === b[1] && b[1] === a[2] && a[2] === playerX) {
    onWin('X')
  }
  if (c[0] === b[1] && b[1] === a[2] && a[2] === playerO) {
    onWin('O')
  } else if (times === 9 && win === false) {
    ties++
    tiesResults.html(ties)
    win = true
    results.html("It's a tie")
    return
  } else {
    console.log('there is not 3 markers in a row')
  }
}

// Check diagonal starts a[0] for 3 markers in a row.
const diagonalRightChecking = function diagonalRightChecking () {
  if (a[0] === b[1] && b[1] === c[2] && c[2] === playerX) {
    onWin('X')
    return
  if (a[0] === b[1] && b[1] === c[2] && c[2] === playerO) {
    onWin('O')
  } else if (times === 9 && win === false) {
    ties++
    tiesResults.html(ties)
    win = true
    results.html("It's a tie")
    return
  } else {
    console.log('there is not 3 markers in a row')
  }
}

function checkingResult() {
  console.log(times)
  console.log(win)
  console.log(turn)
  console.log(ties)
  times++
  verticalChecking()
  horizontalChecking()
  diagonalLeftChecking()
  diagonalRightChecking()
  playerTurn()
  if (win === true) {
    console.log('hola')
    times = 0
  }
  console.log(a)
  console.log(b)
  console.log(c)
}
