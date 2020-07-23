
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import User from './Modules/user.js'

export default new Vuex.Store({

  modules: {
    'user': User,
  },
  
})
