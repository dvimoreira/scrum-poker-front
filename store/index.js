export const state = () => ({
  players: [],
  socket: {}
})

export const mutations = {
  SET_PLAYERS (state, players) {
    state.players = players
  },

  SET_SOCKET (state, socket) {
    state.socket = socket
  }
}

export const actions = {
  setPlayers ({ commit }, players) {
    commit('SET_PLAYERS', players)
  },

  setSocket ({ commit }, socket) {
    commit('SET_SOCKET', socket)
  }
}
