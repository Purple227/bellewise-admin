import Vue from 'vue'

//routes
import { app } from '../../app.js'


const state = {
	promoDatas: [],
	promoData: {},
	promoNotification: false,
	promoLoader: true,
	promoProgress: null,
	promoErrors: null,

	promoSearchResult: null,

	promoPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadPromo: (state) => state.promoDatas,
	loadSinglePromo: (state) => state.promoData,
	loadPromoLoader: (state) => state.promoLoader,
	loadPromoProgress: (state) => state.promoProgress,
	loadPromoNotification: (state) => state.promoNotification,
	loadPromoErrors: (state) => state.promoErrors,
	loadPromoPagination: (state) => state.promoPagination,
	loadPromoSearch: (state) => state.promoSearchResult,

}; //Getters calibrace close

const actions = {

	async fetchPromoDatas({commit}, uri) {
		commit('setLoading', true)
		let api = uri || '/api/promo'
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

	async fetchSinglePromo({commit}, id) {
		commit('setLoading', true)
		let api = '/api/promo/' + id
		const response = await axios.get(api);
		commit('setSingleData', response.data)
		commit('setLoading', false)
	},

	async searchPromoDatas({commit}, searchQuery) {
		const response = await axios.get('/api/promo/search',{params: {search_query: searchQuery}})
		console.log(searchQuery)
		commit('setSearch', response.data)
	},

	async destroyPromoData({commit}, id ) {
		let api = '/api/promo/' + id
		const response = await axios.delete(api);
		commit('setNotification', true)
	},

	async createPromo({ commit }, data) {
		commit('setProgress', true)
		console.log(...data)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/promo', data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			app.$router.push({name: 'list-promotion'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async editPromoData({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		let api = '/api/promo/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			app.$router.push({name: 'list-promotion'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async clearPromoErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearPromoNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setDatas: (state, datas) => state.promoDatas = datas,
	setSingleData: (state, data) => state.promoData.promo = data,

	setNotification: (state, notification) => state.promoNotification = notification,
	unsetNotification: (state, notification) => state.promoNotification = notification,

	setLoading: (state, loader) => state.promoLoader = loader,

	setProgress: (state, progress) => state.promoProgress = progress,

	setErrors: (state, errors) => state.promoErrors = errors,
	unsetErrors: (state, errors) => state.promoErrors = null,

	setNextPageURL: (state, next) => state.promoPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.promoPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.promoPagination.to = to,
	setTotal: (state, total) => state.promoPagination.total = total,

	setSearch: (state, search) => state.promoSearchResult = search,


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

