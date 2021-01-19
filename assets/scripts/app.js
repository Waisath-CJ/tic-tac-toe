'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // AUTH Event Listeners
  // POST sign-up
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  // POST sign-in
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  // PATCH change-password
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // DELETE sign-out
  $('#sign-out').on('click', authEvents.onSignOut)

  // GAME Event Listeners
  // CREATE games
  $('#create-game-button').on('click', gameEvents.onCreateGame)

  // UPDATE game
  $('.box').on('click', gameEvents.onBoxClick)

  // GET games
  $('#get-games').on('click', gameEvents.onGetGames)

  // MISC Event Listeners
  // Switch from sign in to sign up
  $('#sign-up-switch').on('click', authEvents.signUpSwitch)

  // Switch from sign up to sign in
  $('#sign-in-switch').on('click', authEvents.signInSwitch)
})
