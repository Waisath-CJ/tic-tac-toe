const store = require('../store')

const createGameSuccess = res => {
  store.game = res.game
  $('.box').text('')
  $('#game-board-section').show()
}

const createGameFailure = err => {
  alert('Failure!')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}