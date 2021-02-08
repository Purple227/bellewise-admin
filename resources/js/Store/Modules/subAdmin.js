import Vue from 'vue'
import {router} from '../../app.js'

//routes
//import { app } from '../../app.js'


const state = {
	subAdminDatas: [],
	subAdminData: null,
	subAdminNotification: false,
	subAdminProgress: null,
	subAdminErrors: null,
	subAdminBlockedDatas: null,
	loader: true,

	subAdminSearchResult: null,

	subAdminPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadSubAdminLoader: (state) => state.loader,
	loadSubAdminDatas: (state) => state.subAdminDatas,
	loadSubAdminSingleData: (state) => state.subAdminData,
	loadSubAdminProgress: (state) => state.subAdminProgress,
	loadSubAdminNotification: (state) => state.subAdminNotification,
	loadSubAdminErrors: (state) => state.subAdminErrors,
	loadSubAdminPagination: (state) => state.subAdminPagination,
	loadSubAdminSearch: (state) => state.subAdminSearchResult,
	loadSubAdminBlockedDatas: (state) => state.subAdminBlockedDatas,

}; //Getters calibrace close

const actions = {

	async fetchSubAdminDatas({commit}, uri) {
		commit('setLoader', true)
		let api = uri || '/api/sub-admin'
		const response = await axios.get(api);
		commit('setDatas', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async fetchSubAdminBlockedDatas({commit}, uri) {
		commit('setLoader', true)
		let api = uri ||'/api/sub-admin/blocked'
		const response = await axios.get(api);
		commit('setBlockedDatas', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},


	async fetchSubAdminSingleData({commit}, id) {
		commit('setLoader', true)
		let api = '/api/sub-admin/' + id
		const response = await axios.get(api);
		commit('setSingleData', response.data)
		commit('setLoader', false)
	},

	async searchSubAdminDatas({commit}, searchQuery) {
		const response = await axios.get('/api/sub-admin/search',{params: {search_query: searchQuery}})
		commit('setSearch', response.data)
	},

	async destroySubAdminData({commit}, id ) {
		let api = '/api/sub-admin/' + id
		const response = await axios.delete(api);
		commit('setNotification', true)
	},

	async createSubAdminData({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/sub-admin', data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'sub-admin-list'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async editSubAdminData({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/sub-admin/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'sub-admin-list'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},

	async updateSubAdminStatus({commit}, {id, status}) {
		commit('setLoader', true)
		console.log(status)
		let api = '/api/sub-admin/' + id
		const response = await axios.patch(api, {status:status})
		commit('setLoader', false)
		commit('setNotification', true)
	},


	async clearSubAdminErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearSubAdminNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setDatas: (state, datas) => state.subAdminDatas = datas,
	setSingleData: (state, data) => state.subAdminData = data,

	setNotification: (state, notification) => state.subAdminNotification = notification,
	unsetNotification: (state, notification) => state.subAdminNotification = notification,

	setLoader: (state, loader) => state.loader = loader,

	setProgress: (state, progress) => state.subAdminProgress = progress,

	setErrors: (state, errors) => state.subAdminErrors = errors,
	unsetErrors: (state, errors) => state.subAdminErrors = null,

	setNextPageURL: (state, next) => state.subAdminPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.subAdminPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.subAdminPagination.to = to,
	setTotal: (state, total) => state.subAdminPagination.total = total,

	setSearch: (state, searchResult) => state.subAdminSearchResult = searchResult,

	setBlockedDatas: (state, blockedDatas) => state.subAdminBlockedDatas = blockedDatas


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

