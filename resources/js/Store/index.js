
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import Driver from './Modules/driver.js'
import Restaurant from './Modules/restaurant.js'
import Promo from './Modules/promo.js'
import SubAdmin from './Modules/subAdmin.js'
import Report from './Modules/report.js'
import Admin from './Modules/admin.js'
import Config from './Modules/config.js'
import Menu from './Modules/menu.js'
import SettingBasic from './Modules/settingBasic.js'
import SettingTermPolicy from './Modules/settingTermPolicy.js'

export default new Vuex.Store({

  modules: {
  	'restaurant': Restaurant, 
    'driver': Driver,
    'promo': Promo,
    'sub-admin': SubAdmin, 
    'report': Report,
    'admin': Admin,
    'config': Config,
    'menu': Menu,
    'setting-basic': SettingBasic,
    'setting-term-policy': SettingTermPolicy
  },
  
})
