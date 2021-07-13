import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'

const store = createStore({
  modules: {
    user,
    app
  }
})

export default store
