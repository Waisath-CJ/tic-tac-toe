const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = '✕'

const checkWinner = () => {
  return false
}

const onCreateGame = e => {
  e.preventDefault()

  if (currentPlayer === 'O') currentPlayer = '✕'

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onBoxClick = e => {
  e.preventDefault()
  const box = $(e.target)

  if (!box.text()) {
    api.updateGame(box.data('cellIndex'), currentPlayer, checkWinner())
      .then(ui.updateGameSuccess)
      .then(() => currentPlayer = currentPlayer === 'O' ? '✕' : 'O')
      .catch(ui.updateGameFailure)
  }
}

module.exports = {
  onCreateGame,
  onBoxClick
}