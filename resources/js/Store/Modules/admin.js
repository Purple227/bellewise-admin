import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {

	adminNotification: null,
	adminProgress: null,
	adminErrors: null,
	adminCounter: null,
	adminLoader: null,

}; // State calibrace close

const getters = {

	loadAdminNotification: (state) => state.adminNotification,
	loadAdminProgress: (state) => state.adminProgress,
	loadAdminErrors: (state) => state.adminErrors,
	loadAdminCounter: (state) => state.adminCounter,
	loadAdminLoader: (state) => state.adminLoader,

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
			history.go();
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async fetchAdmin({commit}) {
		commit('setLoading', true)
		let api ='/api/admin'
		const response = await axios.get(api);
		commit('setDatas', response.data)
		commit('setLoading', false)
	},


	async clearAdminErrors ({commit}) {
		commit('unsetErrors')
	},


	async clearAdminNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setNotification: (state, notification) => state.adminNotification = notification,
	unsetNotification: (state, notification) => state.adminNotification = notification,

	setDatas: (state, data) => state.adminCounter = data,

	setProgress: (state, progress) => state.adminProgress = progress,

	setErrors: (state, errors) => state.adminErrors = errors,
	unsetErrors: (state, errors) => state.adminErrors = null,

	setLoading: (state, loader) => state.adminLoader = loader,

	setData: (state, data) => state.adminCounter = data,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

