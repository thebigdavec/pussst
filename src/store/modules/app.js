export default {
  state: () => ({
    name: 'Pussst...',
    author: 'Dave Collison',
    version: [
      {
        number: '0.1.0',
        date: '13 July 2021'
      }
    ]
  }),
  getters: {},
  mutations: {
    SET_VERSION(state, payload) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      let date = new Date()
      const year = date.getFullYear()
      const month = months[date.getMonth()]
      const day = date.getDate + ''
      date = `${day} ${month} ${year}`
      state.version.push = { payload, date }
    }
  },
  actions: {
    saveVersion({ commit }, data) {
      commit('SET_VERSION', data)
    }
  }
}
