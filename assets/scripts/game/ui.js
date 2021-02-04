const store = require('../store')

const createGameSuccess = res => {
  store.game = res.game
  $('.box').text('')
  $('#game-board-section').show()
  $('#games-played').text('')
  $('#game-results').text('').hide()
  $('#player-turn').text("X's turn")
}

const createGameFailure = err => {
  $('#err-message').text(err)
  $('#err-alert').show()
}

const updateGameSuccess = (res, currentPlayer) => {
  store.game = res.game
  // console.log(store.game)
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
  $('#player-turn').text(`${currentPlayer === 'O' ? 'X' : 'O'}'s turn`)
}

const updateGameFailure = err => {
  $('#err-message').text(err)
  $('#err-alert').show()
}

const winGame = winner => {
  $('#game-results').text(`${winner} wins!`).show()
  $('#game-board-section').hide()
}

const drawGame = () => {
  $('#game-results').text('It\'s a tie!').show()
  $('#game-board-section').hide()
}

const getGamesSuccess = res => {
  let message = ''
  if (res.games.length === 0)
    message = `You haven't played any games yet!`
  else {
    message = 'You have played '
    message += res.games.length === 1 ? '1 game!' : `${res.games.length} games!`
  }
  $('#games-played').text(message).show()
}

const getGamesFailure = err => {
  $('#err-message').text(err)
  $('#err-alert').show()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure,
  winGame,
  drawGame
}