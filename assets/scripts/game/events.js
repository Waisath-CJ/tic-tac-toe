const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = '✕'
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

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

const onGetGames = e => {
  e.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

module.exports = {
  onCreateGame,
  onBoxClick,
  onGetGames
}