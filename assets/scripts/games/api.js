'use strict'
const app = require('../app')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);
// data -> viene  del evento form submit

// Sign Up
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

// Sign In
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}

// Change Password
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

// Sign Out
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const create = function (data) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const updateMoves = function (index, value, over) {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': data.index,
          'value': data.value
        },
        'over': data.over
      }
    }
  })
}
// Games history
const gameView = function () {
  // console.log(app.user.token)
  // alert('test')
  return $.ajax({
    method: 'GET',
    url: app.host + 'games/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  create,
  updateMoves,
  gameView
}
