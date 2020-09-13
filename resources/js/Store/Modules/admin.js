import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {

	adminNotification: null,
	adminProgress: null,
	adminErrors: null,

}; // State calibrace close

const getters = {

	loadAdminNotification: (state) => state.adminNotification,
	loadAdminProgress: (state) => state.adminProgress,
	loadAdminErrors: (state) => state.adminErrors,

}; //Getters calibrace close

const actions = {

	async createSuperAdmin({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/admin', data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			app.$router.push({name: 'sub-admin-list'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async clearAdminErrors ({commit}) {
		commit('unsetErrors')
	},


}; //Actions calibrace close

const mutations = {

	setNotification: (state, notification) => state.adminNotification = notification,
	unsetNotification: (state, notification) => state.adminNotification = notification,

	setProgress: (state, progress) => state.adminProgress = progress,

	setErrors: (state, errors) => state.adminErrors = errors,
	unsetErrors: (state, errors) => state.adminErrors = null,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

