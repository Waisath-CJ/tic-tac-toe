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
  $('#sign-up-form').trigger('reset')
  $('.signed-out').hide()
  $('.signed-in').show()
}
const signInFailure = err => {
  $("#err-message").text('Sign in failed, try again')
  $('#err-alert').show()
}

const changePasswordSuccess = () => {
  $("#toast-message").text('Successfully changed password for ' + store.user.email)
  $('#notification-toast').toast('show')
  $('#change-password-form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#change-password-err-alert').hide()
}

const changePasswordFailure = err => {
  $("#change-password-err-message").text('Password change failed, try again')
  $('#change-password-err-alert').show()
}

const signOutSuccess = () => {
  $("#toast-message").text('Successfully signed out ' + store.user.email)
  $('#notification-toast').toast('show')
  delete store.user
  delete store.game
  $('.signed-in').hide()
  $('#game-board-section').hide()
  $('.signed-out').show()
  $('.box').text('')
  $('#games-played').text('').hide()
  $('#game-results').hide()
}

const signOutFailure = err => {
  $("#err-message").text('Sign out failed, try again')
  $('#err-alert').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
