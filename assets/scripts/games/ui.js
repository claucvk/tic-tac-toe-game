'use strict'
// remove signIn and signOut
const app = require('../app.js')

// Sign Up
const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Sign up successful')
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-in input').not('.submits-btn').val('')
  $('#sign-up input').not('.submit-btn').val('')
  $('#already-user').addClass('hidden')
  const signUpFail = $('#signUpFail')
  signUpFail.html('').css('color', 'red')
  $('.whosTurn').addClass('hidden')
}
const signUpFailure = (error) => {
  console.log(error)
  console.log('Sign Up failed. Verify your email or password!')
  const signUpFail = $('#signUpFail')
  signUpFail.html('Sign Up failed. Verify your email or password!').css('color', 'red')
}

// Sign In
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Sign in successful')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#view-games').removeClass('hidden')
  $('#start-game').removeClass('hidden')
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Sign In failed. Verify your email or password!')
  const signInFail = $('#signInFail')
  signInFail.html('Sign Up failed. Verify your email or password!').css('color', 'red')
}

// Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('Sign out successful')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#already-user').removeClass('hidden')
  $('#view-games').addClass('hidden')
  $('#start-game').addClass('hidden')
}

const signOutFailure = (error) => {
  console.log(error)
}

// Change password
const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('Password Successfully Changed.').css('color', 'green')
  $('#old-password').val('')
  $('#new-password').val('')
}
const changePasswordFailure = (error) => {
  console.log(error)
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('Change password failed. Verify your passwords!').css('color', 'red')
  $('#old-password').val('')
  $('#new-password').val('')
}

// Already a user button
const oldUser = function () {
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#already-user').addClass('hidden')
  $('#not-user').removeClass('hidden')
}
// Need to sign up button
const newUser = function () {
  $('#sign-up').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#already-user').removeClass('hidden')
  $('#not-user').addClass('hidden')
}

// Start a new game.
const onCreateSuccess = () => {
  console.log('New game created')
  $('.boardGame').removeClass('hidden')
  $('.scoreGame').removeClass('hidden')
  $('.play-again').removeClass('hidden')
  $('#start-game').addClass('hidden')
  $('.whosTurn').removeClass('hidden')
}

const onUpdateSuccess = function (data) {
  console.log(data)
  console.log('Esto es onUpdateSuccess')
}

const failure = (error) => {
  console.error(error)
}

// Games history
const onViewSuccess = function (data) {
  $('#data-games').empty()
  const hideGamesView = $('#hideGamesView')
  hideGamesView.html('Click here to display and hide this info').css('blue')
  console.log(data)
  const games = data.games
  for (let i = 0; i < games.length; i++) {
    $('#data-games').append('<p>ID Game' + games[i].id + '</p>').toggle()
    // $('#data-games').append('<p>ID Game' + games[i].id + '</p>')
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  oldUser,
  newUser,
  failure,
  onCreateSuccess,
  onUpdateSuccess,
  onViewSuccess
}
