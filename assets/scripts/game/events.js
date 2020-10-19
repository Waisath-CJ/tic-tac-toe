const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = '✕'
let gameOver = false
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

// Got some of the following code for determining a winner from the following website:
// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
// const checkWinner = () => {
//   let roundWon = false
//   for (let i = 0; i <= 7; i++) {
//     const winCondition = winningConditions[i]
//     let a = store.game[winCondition[0]]
//     let b = store.game[winCondition[1]]
//     let c = store.game[winCondition[2]]
//     if (a === '' || b === '' || c === '') {
//       continue
//     }
//     if (a === b && b === c) {
//       roundWon = true
//       break
//     }
//   }
//   if (roundWon) {
//     return 'win'
//   }
//   /* 
//   We will check weather there are any values in our game state array 
//   that are still not populated with a player sign
//   */
//   let roundDraw = !store.game.cells.includes("")
//   if (roundDraw) {
//     return 'draw'
//   }
// }

const onCreateGame = e => {
  e.preventDefault()

  if (currentPlayer === 'O') currentPlayer = '✕'
  if (gameOver === true) gameOver = false

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onBoxClick = e => {
  e.preventDefault()
  const box = $(e.target)

  if (!box.text() && !gameOver) {
    // if (checkWinner()) {
    //   console.log(currentPlayer, ' wins!')
    //   gameOver = true
    // } else if (!store.game.cells.includes('')) {
    //   console.log('It\'s a draw!')
    //   gameOver = true
    // }

    // if (checkWinner() === 'win')

    api.updateGame(box.data('cellIndex'), currentPlayer, gameOver)
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