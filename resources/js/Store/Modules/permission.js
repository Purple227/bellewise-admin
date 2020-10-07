
import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {

	roleNotification: null,
	roleProgress: null,
	roleLoader: null,
	role: {},


}; // State calibrace close

const getters = {

	loadRoleProgress: (state) => state.roleProgress,
	loadRoleNotification: (state) => state.roleNotification,
	loadRole: (state) => state.role,
	loadRoleLoader: (state) => state.roleLoader,

}; //Getters calibrace close

const actions = {

	async createRole({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		let api = '/api/role/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
		}).catch(error=>{
			let failure = error.response.data
			commit('setProgress', false)
		})

	},

	async fetchRole({commit}, id) {
		commit('setLoader', true)
		let api = '/api/role/' + id
		const response = await axios.get(api);
		commit('setRole', response.data)
		commit('setLoader', false)
	},


	async editRole({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		console.log(id)
		let api = '/api/role/' + id
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

	async clearRoleNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},


}; //Actions calibrace close

const mutations = {

	setNotification: (state, notification) => state.roleNotification = notification,
	unsetNotification: (state, notification) => state.roleNotification = notification,
	setProgress: (state, progress) => state.roleProgress = progress,
	setLoader: (state, loader) => state.roleLoader = loader,
	setRole: (state, role) => state.role = role,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

