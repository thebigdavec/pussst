export default {
  state: () => ({
    name: 'Dave Collison',
    email: 'dave@davecollison.dev'
  }),
  getters: {
    firstName: state => {
      firstName = state.name.trim(' ').split(' ')[0]
      return firstName
    }
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    }
  },
  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    }
  }
}
