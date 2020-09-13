import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {

	configNotification: null,
	configProgress: null,
	configLoader: null,
	restaurantConfig: null,


}; // State calibrace close

const getters = {

	loadConfigProgress: (state) => state.configProgress,
	loadConfigNotification: (state) => state.configNotification,
	loadRestaurantConfig: (state) => state.restaurantConfig,
	loadConfigLoader: (state) => state.configLoader,

}; //Getters calibrace close

const actions = {

	async restaurantConfigSetting({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		let api = '/api/restaurant-config/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			//app.$router.push({name: 'list-restaurant'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setProgress', false)
		})

	},

	async fetchRestaurantConfig({commit}, id) {
		commit('setLoader', true)
		let api = '/api/restaurant-config/' + id
		const response = await axios.get(api);
		commit('setRestaurantConfig', response.data)
		commit('setLoader', false)
	},


}; //Actions calibrace close

const mutations = {

	setNotification: (state, notification) => state.configNotification = notification,
	unsetNotification: (state, notification) => state.configNotification = notification,
	setProgress: (state, progress) => state.configProgress = progress,
	setLoader: (state, loader) => state.configLoader = loader,
	setRestaurantConfig: (state, config) => state.restaurantConfig = config,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

