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
  if (localStorage.getItem('userLocal') && localStorage.getItem('userLocal') !== 'undefined') {
    console.log('dataLocal', JSON.parse(localStorage.getItem('userLocal')))
    events.localStorageSignIn(JSON.parse(localStorage.getItem('userLocal')))
  }
})

// Identify Who is the turn, switch turns and place the marker in the square chosen
const playerX = 1
const playerO = 2
let turn = playerX

let a = [0, 0, 0]
let b = [0, 0, 0]
let c = [0, 0, 0]

let win = false
let tie = false

const playerXResults = $('#playerX')
const tiesResults = $('#ties')
const playerOResults = $('#playerO')
const results = $('.results')

let playerXScore = 0
let playerOScore = 0
let ties = 0
let times = 0

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$('.play-again').on('click', newGame)
function newGame () {
  $('.boardGame').find('.box').html('').on('')
  win = false
  tie = false
  times = 0
  turn = playerX
  a = [0, 0, 0]
  b = [0, 0, 0]
  c = [0, 0, 0]
  // $(document).ready(function () {
  a0()
  a1()
  a2()
  b0()
  b1()
  b2()
  c0()
  c1()
  c2()
  // })
}

const mark = function (selector, column, columnIndex) {
  $(selector).click(function () {
    if (win === true) {
      return
    }
    if ($(this).html() !== '') {
      return
    }
    if (turn === playerX) {
      $(this).html('X').css('color', 'magenta').off('')
    } else {
      $(this).html('O').css('color', 'blue').off('')
    }
    markerSquare(turn, column, columnIndex)
  })
}

const a0 = () => mark('#a0', 'a', 0)
const a1 = () => mark('#a1', 'a', 1)
const a2 = () => mark('#a2', 'a', 2)
const b0 = () => mark('#b0', 'b', 0)
const b1 = () => mark('#b1', 'b', 1)
const b2 = () => mark('#b2', 'b', 2)
const c0 = () => mark('#c0', 'c', 0)
const c1 = () => mark('#c1', 'c', 1)
const c2 = () => mark('#c2', 'c', 2)

const playersTurn = $('.whosTurn')
$(document).ready(function () {
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

const playerTurn = function playerTurn () {
  if (turn === playerX) {
    turn = playerO
    playersTurn.html("It's Player O's Turn").css('color', 'blue')
    return turn
  } else {
    turn = playerX
    playersTurn.html("It's Player X's Turn").css('color', 'magenta')
    return turn
  }
}
const markerSquare = function markerSquare (turn, columnName, columnIndex) {
  if (columnName === 'a') {
    a[columnIndex] = turn
  } else if (columnName === 'b') {
    b[columnIndex] = turn
  } else if (columnName === 'c') {
    c[columnIndex] = turn
  }
  console.log('markerSquare', turn, columnName, columnIndex)
  checkingResult()
}

// Declare winner X or O
const onWin = (player) => {
  console.log('checking win')
  if (tie !== true) {
    if (player === 'X') {
      playerXScore++
      playerXResults.html(playerXScore)
      results.html('Player X wins ')
      setTimeout(function () {
        $('.results').html('')
      }, 2000)
    } else if (player === 'O') {
      playerOScore++
      playerOResults.html(playerOScore)
      results.html('Player O wins ')
      setTimeout(function () {
        $('.results').html('')
      }, 2000)
    }
    win = true
  }
}

// Declare a tie
const onTie = () => {
  console.log('checking tie')
  if (win !== true) {
    ties++
    tiesResults.html(ties)
    win = true
    results.html("It's a tie")
    setTimeout(function () {
      $('.results').html('')
    }, 2000)
    tie = true
  }
}

// Check each vertical for 3 markers in a row.
const verticalChecking = function verticalChecking () {
  for (let i = 0; i < 3; i++) {
    if (a[i] === b[i] && b[i] === c[i] && c[i] === playerX) {
      onWin('X')
    } else if (a[i] === b[i] && b[i] === c[i] && c[i] === playerO) {
      onWin('O')
    } else if (times === 9 && win === false) {
      onTie()
    }
  }
}

// Check each horizontal for 3 markers in a row.
const horizontalChecking = function horizontalChecking () {
  if (a[0] === a[1] && a[1] === a[2] && a[2] === playerX) {
    onWin('X')
  } else if (a[0] === a[1] && a[1] === a[2] && a[2] === playerO) {
    onWin('O')
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerX) {
    onWin('X')
  } else if (b[0] === b[1] && b[1] === b[2] && b[2] === playerO) {
    onWin('O')
  } else if (c[0] === c[1] && c[1] === c[2] && c[2] === playerX) {
    onWin('X')
  } else if (c[0] === c[1] && c[1] === c[2] && c[2] === playerO) {
    onWin('O')
  } else if (times === 9 && win === false) {
    onTie()
  }
}

// Check diagonal starts c[0] for 3 markers in a row.
const diagonalLeftChecking = function diagonalLeftChecking () {
  if (c[0] === b[1] && b[1] === a[2] && a[2] === playerX) {
    onWin('X')
  } else if (c[0] === b[1] && b[1] === a[2] && a[2] === playerO) {
    onWin('O')
  } else if (times === 9 && win === false) {
    onTie()
  }
}

// Check diagonal starts a[0] for 3 markers in a row.
const diagonalRightChecking = function diagonalRightChecking () {
  console.log(a[0], b[1], c[2], turn)
  if (a[0] === b[1] && b[1] === c[2] && c[2] === playerX) {
    onWin('X')
  } else if (a[0] === b[1] && b[1] === c[2] && c[2] === playerO) {
    onWin('O')
  } else if (times === 9 && win === false) {
    onTie()
  }
}
function checkingResult () {
  console.log('times ', times)
  console.log('win ', win)
  console.log('turn ', turn)
  console.log('ties ', ties)
  times++
  verticalChecking()
  horizontalChecking()
  diagonalLeftChecking()
  diagonalRightChecking()
  playerTurn()
  if (win === true) {
    console.log('checking if won')
    times = 0
  }
  console.log(a)
  console.log(b)
  console.log(c)
}
