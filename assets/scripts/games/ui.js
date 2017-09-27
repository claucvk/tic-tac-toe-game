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
  $('#already-user').addClass('hidden')
  const signUpFail = $('#signUpFail')
  signUpFail.html('').css('color', 'red')
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
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Sign In failed. Verify your email or password!')
}

// Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('Sign out successful')
}

const signOutFailure = (error) => {
  console.log(error)
}

// Change password
const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}
const changePasswordFailure = (error) => {
  console.log(error)
}

// Start a new game.
const onCreateSuccess = () => {
  console.log('New game created')
  alert('New game created')
}

const onUpdateSuccess = function (data) {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const onViewSuccess = function (data) {
  console.log(data)
  alert('You have played before')
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
  failure,
  onCreateSuccess,
  onUpdateSuccess,
  onViewSuccess
}
