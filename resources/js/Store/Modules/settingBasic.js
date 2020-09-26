import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {

	writeUpDatas: {},
	cancellationPolicy: {},
	settingLoader: false,
	settingProgress: false,
	SettingErrors: null,
	settingNotification: null,

}; // State calibrace close

const getters = {

	loadWriteUp: (state) => state.writeUpDatas,
	loadCancellationPolicy: (state) => state.cancellationPolicy,
	loadSettingLoader: (state) => state.settingLoader,
	loadSettingNotification: (state) => state.settingNotification,
	loadSettingErrors: (state) => state.SettingErrors,
	loadSettingProgress: (state) => state.settingProgress,

}; //Getters calibrace close

const actions = {

	async fetchWriteUp({commit} ) {
		commit('setLoading', true)
		let api = '/api/setting/write-up/' + 1
		const response = await axios.get(api);
		commit('setWriteUp', response.data)
		commit('setLoading', false)
	},

	async fetchCancellationPolicy({commit} ) {
		commit('setLoading', true)
		let api = '/api/setting/cancellation-policy/' + 1
		const response = await axios.get(api);
		commit('setCancellationPolicy', response.data)
		commit('setLoading', false)
	},



	async createWriteUp({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/write-up', data, config )
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

	async createCancellationPolicy({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/cancellation-policy', data, config )
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

	async editWriteUp({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/setting/write-up/' + id
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

	async editCancellationPolicy({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/setting/cancellation-policy/' + id
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



	async clearSettingErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearSettingNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setWriteUp: (state, data) => state.writeUpDatas = data,
	setCancellationPolicy : (state, datas) => state.cancellationPolicy = datas,

	setNotification: (state, notification) => state.settingNotification = notification,
	unsetNotification: (state, notification) => state.settingNotification = notification,

	setLoading: (state, loading) => state.settingLoader = loading,

	setProgress: (state, progress) => state.settingProgress = progress,

	setErrors: (state, errors) => state.SettingErrors = errors,
	unsetErrors: (state, errors) => state.SettingErrors = null,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

