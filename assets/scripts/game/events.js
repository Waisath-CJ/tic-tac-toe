const api = require('./api')
const ui = require('./ui')

let currentPlayer = '✕'

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

    // Then set the text to the current player
    box.text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
}

module.exports = {
  onCreateGame,
  onBoxClick
}