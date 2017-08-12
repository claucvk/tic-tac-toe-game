'use strict';
//remove signIn and signOut
const app = require('../app.js');

//SignIn
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  alert('Sign In succesful')
  // Mostrar un mensaje al usuario de que fue un signin succesful.
};

// Start a new game.
const onCreateSuccess = () => {
  console.log("New game created");
  alert('New game created')
};

//Sign Out
const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  alert('Sign Out succesful')
};

// Change password
const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
  alert('Password Successfully Changed.')
};
// This is onSignUp (events)
const success = (data) => {
  console.log(data);
  alert('Sign Out succesful')
};

const onUpdateSuccess = function (data) {
  console.log(data)
}

const failure = (error) => {
  console.error(error);
};

const onViewSuccess = function (data) {
console.log(data)
// I need to put the code to feedback here.
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onCreateSuccess,
  onUpdateSuccess,
  onViewSuccess,
};
