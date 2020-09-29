import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {

	term: {},
	policy: {},
	settingTwoLoader: false,
	settingTwoProgress: false,
	SettingTwoErrors: null,
	settingTwoNotification: null,

}; // State calibrace close

const getters = {

	loadTerm: (state) => state.term,
	loadPolicy: (state) => state.policy,
	loadSettingTwoLoader: (state) => state.settingTwoLoader,
	loadSettingTwoNotification: (state) => state.settingTwoNotification,
	loadSettingTwoErrors: (state) => state.SettingTwoErrors,
	loadSettingTwoProgress: (state) => state.settingTwoProgress,

}; //Getters calibrace close

const actions = {

	async fetchTerm({commit} ) {
		commit('setLoading', true)
		let api = '/api/setting/term/' + 1
		const response = await axios.get(api);
		commit('setTerm', response.data)
		commit('setLoading', false)
	},

	async fetchPolicy({commit} ) {
		commit('setLoading', true)
		let api = '/api/setting/policy/' + 1
		const response = await axios.get(api);
		commit('setPolicy', response.data)
		commit('setLoading', false)
	},



	async createTerm({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/term', data, config )
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

	async createPolicy({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/policy', data, config )
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

	async editTerm({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/setting/term/' + id
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
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},

	async editPolicy({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/setting/policy/' + id
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
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},



	async clearSettingTwoErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearSettingTwoNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setTerm: (state, data) => state.term = data,
	setPolicy : (state, datas) => state.policy = datas,

	setNotification: (state, notification) => state.settingTwoNotification = notification,
	unsetNotification: (state, notification) => state.settingTwoNotification = notification,

	setLoading: (state, loading) => state.settingTwoLoader = loading,

	setProgress: (state, progress) => state.settingTwoProgress = progress,

	setErrors: (state, errors) => state.SettingTwoErrors = errors,
	unsetErrors: (state, errors) => state.SettingTwoErrors = null,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

