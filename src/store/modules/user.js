export default {
  state: () => ({
    name: '',
    email: ''
  }),
  getters: {
    firstName: state => state.name.split(' ')[0],
    isSignedIn: state => (state.email !== '' ? true : false)
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
      console.log('Changed name to', payload)
    },
    SET_EMAIL(state, payload) {
      state.email = payload
      console.log('Changed email to', payload)
    }
  },
  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    },
    saveEmail({ commit }, data) {
      commit('SET_EMAIL', data)
    },
    signOut({ commit }) {
      commit('SET_NAME', '')
      commit('SET_EMAIL', '')
    }
  }
}
