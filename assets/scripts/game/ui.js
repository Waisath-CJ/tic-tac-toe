const store = require('../store')
const events = require('./events')

const createGameSuccess = res => {
  store.game = res.game
  $('.box').text('')
  $('#game-board-section').show()
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

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}