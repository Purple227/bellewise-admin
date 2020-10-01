import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {

	authenticated: false,
	authUser: null,
	authErrors: null,
	authProgress: null,
	authNotification: null,

}; // State calibrace close

const getters = {

	LoadAuthenticated: (state) => state.authenticated,
	LoadAuthUser: (state) => state.authUser,
	LoadAuthErrors: (state) => state.authErrors,
	LoadAuthProgress: (state) => state.authProgress,
	LoadAuthNotification: (state) => state.authNotification,

}; //Getters calibrace close

const actions = {

	async signIn ({ dispatch, commit }, data) {
		commit('setProgress', true)
		await axios.get('/sanctum/csrf-cookie')
		const response = await axios.post('/api/login', data)
		.then((response) => {
			return dispatch('me')
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async signOut ({ dispatch }) {
		await axios.post('/api/logout')
		return dispatch('me')
	},

	me ({ commit }) {
		return axios.get('/api/user').then((response) => {
			commit('SET_AUTHENTICATED', true)
			commit('SET_USER', response.data)
			commit('setNotification', true)
		}).catch(() => {
			commit('SET_AUTHENTICATED', false)
			commit('SET_USER', null)
		})
	},

	async clearAuthErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearAuthNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},


}; //Actions calibrace close


const mutations = {

	SET_AUTHENTICATED: (state, auth) => state.authenticated = auth,
	SET_USER: (state, user) => state.authUser = user,


	setNotification: (state, notification) => state.authNotification = notification,
	unsetNotification: (state, notification) => state.authNotification = notification,

	setProgress: (state, progress) => state.authProgress = progress,

	setErrors: (state, errors) => state.authErrors = errors,
	unsetErrors: (state, errors) => state.authErrors = null,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

