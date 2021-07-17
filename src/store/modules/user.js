export default {
  state: () => ({
    uid: null,
    name: '',
    email: ''
  }),
  getters: {
    firstName: state => state.name.split(' ')[0],
    isSignedIn: state => (state.uid ? true : false)
  },
  mutations: {
    SET_UID(state, payload) {
      state.uid = payload
    },
    SET_NAME(state, payload) {
      state.name = payload
    },
    SET_EMAIL(state, payload) {
      state.email = payload
    }
  },
  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    },
    saveEmail({ commit }, data) {
      commit('SET_EMAIL', data)
    },
    setCurrentUser({ commit }, data) {
      commit('SET_UID', data.uid)
      data.name ? commit('SET_NAME', data.name) : commit('SET_NAME', 'User')
      commit('SET_EMAIL', data.email)
    },
    signOut({ commit }) {
      commit('SET_UID', null)
      commit('SET_NAME', '')
      commit('SET_EMAIL', '')
    }
  }
}
