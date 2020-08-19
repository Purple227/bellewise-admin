
import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {

}; // State calibrace close


export default {
	state,
	getters,
	actions,
	mutations
};

