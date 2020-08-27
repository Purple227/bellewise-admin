
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import Driver from './Modules/driver.js'
import Restaurant from './Modules/restaurant.js'
import Promo from './Modules/promo.js'


export default new Vuex.Store({

  modules: {
  	'restaurant': Restaurant, 
    'driver': Driver,
    'promo': Promo,
  },
  
})
