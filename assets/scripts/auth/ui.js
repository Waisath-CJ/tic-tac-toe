'use strict'

const store = require('../store')

const signUpSuccess = res => {
  $("#message").text('Thanks for signing up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
  signInSwitch()
}
const signUpFailure = err => {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = res => {
  $("#message").text('Successfully signed in ' + res.user.email)
  store.user = res.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-section').hide()
  $('#change-password-section').show()
  $('#sign-out-section').show()
}
const signInFailure = err => {
  $("#message").text('Sign in failed, try again')
}

const changePasswordSuccess = () => {
  $("#message").text('Successfully changed password for ' + store.user.email)
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = err => {
  $("#message").text('Password change failed, try again')
}

const signOutSuccess = () => {
  $("#message").text('Successfully signed out ' + store.user.email)
  delete store.user
  $('#change-password-section').hide()
  $('#sign-out-section').hide()
  $('#sign-in-section').show()
}

const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const signUpSwitch = () => {
  $('#sign-up-section').show()
  $('#sign-in-section').hide()
}

const signInSwitch = () => {
  $('#sign-up-section').hide()
  $('#sign-in-section').show()
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
  signUpSwitch,
  signInSwitch
}
