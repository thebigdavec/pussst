import { createStore } from 'vuex'
import alert from './modules/alert.js'
import app from './modules/app.js'
import user from './modules/user.js'

const store = createStore({
  modules: {
    alert,
    app,
    user
  }
})

export default store
