import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


const state = {
	drivers: [],
	driver: null,
	notification: false,
	loading: true,
	progress: null,
	errors: null,
	succeeded: null
}; // State calibrace close

const getters = {

	loadDrivers: (state) => state.drivers,
	loadDriver: (state) => state.driver,
	loadLoading: (state) => state.loading,
	loadProgress: (state) => state.progress,
	loadNotification: (state) => state.notification,
	loadErrors: (state) => state.errors,
	loadSucceeded: (state) => state.succeeded,

}; //Getters calibrace close

const actions = {

	async fetchDrivers({commit}) {
		const response = await axios.get('/api/driver');
		commit('setDrivers', response.data)
		commit('setLoading', false)
	},


	async fetchDriver({commit}, driver_id) {
		commit('setLoading', true)
		let api = '/api/driver/' + driver_id
		const response = await axios.get(api);
		commit('setDriver', response.data)
		commit('setLoading', false)
	},


	async createDriver({ commit }, driver) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/driver', driver, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setSucceeded', true)
			commit('setProgress', false)
		}).catch(error=>{
			let failure = error.response.data
			console.log(failure)
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},

	async clearErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

	async clearSucceeded ({commit}) {
		commit('setSucceeded', false)
	},

}; //Actions calibrace close

const mutations = {

	setDrivers: (state, drivers) => state.drivers = drivers,
	setDriver: (state, driver) => state.driver = driver,
	setNotification: (state, notification) => state.notification = notification,
	unsetNotification: (state, notification) => state.notification = notification,
	setLoading: (state, loading) => state.loading = loading,
	setProgress: (state, progress) => state.progress = progress,
	setErrors: (state, errors) => state.errors = errors,
	unsetErrors: (state, errors) => state.errors = null,
	setSucceeded: (state, succeeded) => state.succeeded = succeeded

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

