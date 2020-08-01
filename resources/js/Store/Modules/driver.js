import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


const state = {
	datas: [],
	data: null,
	notification: false,
	loading: true,
	progress: null,
	errors: null,
	succeeded: null,

	searchResult: null,

	pagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadDatas: (state) => state.datas,
	loadData: (state) => state.data,
	loadLoading: (state) => state.loading,
	loadProgress: (state) => state.progress,
	loadNotification: (state) => state.notification,
	loadErrors: (state) => state.errors,
	loadSucceeded: (state) => state.succeeded,
	loadPagination: (state) => state.pagination,
	loadSearch: (state) => state.searchResult

}; //Getters calibrace close

const actions = {

	async fetchDatas({commit}, uri) {
		commit('setLoading', true)
		let api = uri || '/api/driver'
		const response = await axios.get(api);
		commit('setDatas', response.data.data)
		commit('setLoading', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl ? nextPageUrl.slice(21) : null)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl ? previousPageUrl.slice(21) : null)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)

	},


	async fetchData({commit}, id) {
		commit('setLoading', true)
		let api = '/api/driver/' + id
		const response = await axios.get(api);
		commit('setData', response.data)
		commit('setLoading', false)
	},

	async searchDatas({commit}, searchQuery) {
		const response = await axios.get('/api/driver/search',{params: {search_query: searchQuery}})
		commit('setSearch', response.data)
	},

	async destroyData({commit}, id ) {
		let api = '/api/driver/' + id
		const response = await axios.delete(api);
		commit('setNotification', true)
	},


	async createData({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/driver', data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setSucceeded', true)
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

	async editData({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/driver/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setSucceeded', true)
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

	setDatas: (state, datas) => state.datas = datas,
	setData: (state, data) => state.data = data,

	setNotification: (state, notification) => state.notification = notification,
	unsetNotification: (state, notification) => state.notification = notification,

	setLoading: (state, loading) => state.loading = loading,

	setProgress: (state, progress) => state.progress = progress,

	setErrors: (state, errors) => state.errors = errors,
	unsetErrors: (state, errors) => state.errors = null,

	setSucceeded: (state, succeeded) => state.succeeded = succeeded,

	setNextPageURL: (state, next) => state.pagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.pagination.previousPageUrl = previous,
	setToPage: (state, to) => state.pagination.to = to,
	setTotal: (state, total) => state.pagination.total = total,

	setSearch: (state, searchResult) => state.searchResult = searchResult


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

