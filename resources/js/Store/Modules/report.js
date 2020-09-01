import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {

	reportProgress: null,
	reportNotification: null,
	reportErrors: null,

}; // State calibrace close

const getters = {

loadReportProgress: (state) => state.reportProgress,
loadReportNotification: (state) => state.reportNotification,
loadReportErrors: (state) => state.reportErrors

}; //Getters calibrace close

const actions = {

	async sendSMS({ commit }, data) {
		commit('setProgress', true)
		console.log(...data)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/report/notification', data, config )
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

	setProgress: (state, progress) => state.reportProgress = progress,
	setErrors: (state, errors) => state.reportErrors = errors,
	setNotification: (state, notification) => state.reportNotification = notification,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

