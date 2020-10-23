import Vue from 'vue'
import {router} from '../../app.js'

const state = {

	authenticated: false,
	authUser: null,
	authErrors: null,
	authProgress: null,
	authLoader: null,
	authRole: null,
	authNotification: null,

}; // State calibrace close

const getters = {

	loadAuthenticated: (state) => state.authenticated,
	loadAuthUser: (state) => state.authUser,
	loadAuthErrors: (state) => state.authErrors,
	loadAuthProgress: (state) => state.authProgress,
	loadAuthLoader: (state) => state.authLoader,
	loadAuthRole: (state) => state.authRole,
	loadAuthNotification: (state) => state.authNotification

}; //Getters calibrace close

const actions = {

	async signIn ({ dispatch, commit }, data) {
		commit('setProgress', true)
		await axios.get('/sanctum/csrf-cookie')
		const response = await axios.post('/api/login', data)
		.then((response) => {
			commit('setLoading', true)
			return dispatch('me')
		}).catch(error=>{
			let failure = error.response.data.errors
			commit('setErrors', failure)
			commit('setProgress', false)
			commit('setLoading', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async signOut ({ dispatch }) {
		await axios.post('/api/logout')
		return dispatch('me')
		router.push({name: 'auth-access'})
	},

	async fetchAuthRole({commit, getters}, id ) {
		let api = '/api/role/' + getters.loadAuthUser.id
		const response = await axios.get(api);
		commit('setRole', response.data)
		router.push({name: 'home'})
		commit('setLoader', false)
	},

	async me ({ commit, dispatch }) {
		commit('setLoading', true)
		await axios.get('/api/user').then((response) => {
			commit('SET_AUTHENTICATED', true)
			commit('SET_USER', response.data)
			return dispatch('fetchAuthRole')
			commit('setProgress', false)
		}).catch(() => {
			commit('SET_AUTHENTICATED', false)
			commit('SET_USER', null)
			commit('setProgress', false)
			commit('setLoading', false)
			router.push({name: 'auth-access'})
		})
	},

	async editAuthData({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/auth-edit/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)

			setTimeout(() => {
				router.push({name: 'home'})
			}, 10000)

		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},


	async editAuthSecurity({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/auth-security/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)

			setTimeout(() => {
				router.push({name: 'home'})
			}, 10000)
			
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
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

	setProgress: (state, progress) => state.authProgress = progress,

	setErrors: (state, errors) => state.authErrors = errors,
	unsetErrors: (state, errors) => state.authErrors = null,

	setLoading: (state, loading) => state.authLoader = loading,

	setRole: (state, role) => state.authRole = role,

	setNotification: (state, notification) => state.authNotification = notification,
	unsetNotification: (state, notification) => state.authNotification = notification,


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

