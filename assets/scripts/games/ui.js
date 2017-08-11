'use strict';
//remove signIn and signOut
const app = require('../app.js');

//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  alert('Sign In succesful')
  // Mostrar un mensaje al usuario de que fue un signin succesful. Buscar el lugar en html y poner el código aqui.
};

//remove me before code-along
const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  alert('Sign Out succesful')
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
  alert('Password Successfully Changed.')
};
// This is onSignUp (events)
const success = (data) => {
  console.log(data);
  alert('Sign Out succesful')
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
