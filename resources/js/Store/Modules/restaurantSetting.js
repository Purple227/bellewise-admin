import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {

	configNotification: null,
	configProgress: null,
	configLoader: null,
	restaurantConfig: {},


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
		let api = '/api/restaurant-setting/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			history.go();
		}).catch(error=>{
			let failure = error.response.data
			commit('setProgress', false)
		})

	},

	async fetchRestaurantConfig({commit}, id) {
		commit('setLoader', true)
		let api = '/api/restaurant-setting/' + id
		const response = await axios.get(api);
		commit('setRestaurantConfig', response.data)
		commit('setLoader', false)
	},


	async editRestaurantConfig({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		console.log(id)
		let api = '/api/restaurant-setting/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

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
