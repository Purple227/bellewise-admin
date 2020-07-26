
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import Driver from './Modules/driver.js'

export default new Vuex.Store({

  modules: {
    'driver': Driver,
  },
  
})
