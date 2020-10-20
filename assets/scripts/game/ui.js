const store = require('../store')

const createGameSuccess = res => {
  store.game = res.game
  $('.box').text('')
  $('#game-board-section').show()
  $('#games-played').hide()
}

const createGameFailure = err => {
  alert('Failure!')
}

const updateGameSuccess = res => {
  store.game = res.game
  // console.log(store.game)
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
}

const updateGameFailure = err => {
  alert('Failure!')
}

const winGame = winner => {
  console.log(`${winner} wins!`)
}

const drawGame = () => {
  console.log('It\'s a tie!')
}

const getGamesSuccess = res => {
  $('#games-played').show().text(`You have played ${res.games.length} games!`)
}

const getGamesFailure = err => {
  alert('Failure!')
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