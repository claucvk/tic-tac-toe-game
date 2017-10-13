'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

// Sign Up
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
}

// Sign In
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure)
}

const localStorageSignIn = function (dataLocal) {
  ui.signInSuccess(dataLocal)
}

// Change password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}

// Sign Out
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const gameStorage = window.localStorage
  gameStorage.setItem('userLocal', 'undefined')
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.create(data)
    .done(ui.onCreateSuccess)
    .fail(ui.fail)
}
// event handler to update game states
const onUpdateGame = function (index, value, over) {
  event.preventDefault()
  // let data = getFormFields(this); //event.target
  api.updateMoves(index, value, over)
    .done(ui.onUpdateSuccess)
    .fail(ui.fail)
}

// Games history
const onViewGames = function (event) {
  event.preventDefault();
  let data = getFormFields(this) //event.target
  api.gameView(data)
  .done(ui.onViewSuccess)
  .fail(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#already-user').on('click', ui.oldUser)
  $('#not-user').on('click', ui.newUser)
  $('#start-game').on('submit', onCreateGame)
  $('#update-game').on('submit', onUpdateGame)
  $('#view-games').on('submit', onViewGames)
}

module.exports = {
  addHandlers,
  localStorageSignIn
}
