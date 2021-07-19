export default {
  state: () => ({
    type: '',
    message: '',
    time: 3
  }),
  getters: {},
  mutations: {
    SHOW_ALERT(state, alert) {
      state.type = alert.type
      state.message = alert.message
      state.time = alert.time
    },
    CLEAR_ALERT(state) {
      state.type = ''
      state.message = ''
      state.time = 3
    }
  },
  actions: {
    showAlert({ commit, state }, { time = 3, type, message }) {
      commit('SHOW_ALERT', { time, type, message })
      setTimeout(() => {
        commit('CLEAR_ALERT')
      }, state.time * 1000)
    },
    clearAlert({ commit }) {
      commit('CLEAR_ALERT')
    }
  }
}
