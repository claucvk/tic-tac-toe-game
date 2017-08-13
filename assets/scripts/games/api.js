'use strict'
const app = require('../app');
// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);
// data -> viene  del evento form submit
const signUp = function(data){
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  });
};

const signIn = function(data){
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function(data){
  console.log(data)
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function(data){
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  });
};

const create = function (data) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

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

const gameView = function () {
  //console.log(app.user.token)
  alert('test')
  return $.ajax({
   method: 'GET',
   url: app.host + 'games/',
   headers: {
     Authorization: 'Token token=' + app.user.token,
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
  gameView,
};
