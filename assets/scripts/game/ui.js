const store = require('../store')

const createGameSuccess = res => {
  store.game = res.game
  $('.box').text('')
  $('#game-board-section').show()
  $('#games-played').hide()
}

const createGameFailure = err => {
  $('#message').text(err)
}

const updateGameSuccess = res => {
  store.game = res.game
  // console.log(store.game)
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
}

const updateGameFailure = err => {
  $('#message').text(err)
}

const winGame = winner => {
  $('#message').text(`${winner} wins!`)
}

const drawGame = () => {
  $('#message').text('It\'s a tie!')
}

const getGamesSuccess = res => {
  $('#games-played').show().text(`You have played ${res.games.length} games!`)
}

const getGamesFailure = err => {
  $('#message').text(err)
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