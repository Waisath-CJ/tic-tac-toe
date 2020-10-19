const config = require('../config')
const store = require('../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      body: {}
    }
  })
}

const updateGame = (index, player, isOver) => {
  return $.ajax({
    url: config.apiUrl + (`/games/${store.game._id}`),
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: isOver
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}