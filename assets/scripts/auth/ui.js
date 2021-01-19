'use strict'

const store = require('../store')

const signUpSuccess = res => {
  $("#toast-message").text('Thanks for signing up ' + res.user.email)
  $('#notification-toast').toast('show')
  $('#sign-up-form').trigger('reset')
  signInSwitch()
}
const signUpFailure = err => {
  $("#err-message").text('Sign up failed, try again')
  $('#err-alert').show()
}

const signInSuccess = res => {
  $("#toast-message").text('Successfully signed in ' + res.user.email)
  $('#notification-toast').toast('show')
  store.user = res.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-section').hide()
  $('#change-password-section').show()
  $('#game-controls-section').show()
  $('#user-controls').show()
}
const signInFailure = err => {
  $("#err-message").text('Sign in failed, try again')
  $('#err-alert').show()
}

const changePasswordSuccess = () => {
  $("#toast-message").text('Successfully changed password for ' + store.user.email)
  $('#notification-toast').toast('show')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = err => {
  $("#err-message").text('Password change failed, try again')
  $('#err-alert').show()
}

const signOutSuccess = () => {
  $("#toast-message").text('Successfully signed out ' + store.user.email)
  $('#notification-toast').toast('show')
  delete store.user
  delete store.game
  $('#user-controls').hide()
  $('#game-board-section').hide()
  $('#game-controls-section').hide()
  $('#sign-in-section').show()
  $('.box').text('')
  $('#games-played').text('')
}

const signOutFailure = err => {
  $("#err-message").text('Sign out failed, try again')
  $('#err-alert').show()
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
