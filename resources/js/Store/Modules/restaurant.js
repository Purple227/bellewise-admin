import Vue from 'vue'
import {router} from '../../app.js'

const state = {
	restaurantDatas: [],
	restaurantData: null,
	restaurantNotification: false,
	restaurantLoader: true,
	restaurantProgress: null,
	restaurantErrors: null,
	restaurantBlockedDatas: null,
	allRestaurantsDatas: [],
	activeRestaurants : [],

	restaurantSearchResult: null,

	restaurantPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadRestaurants: (state) => state.restaurantDatas,
	loadAllRestaurants: (state) => state.allRestaurantsDatas,
	loadSingleRestaurant: (state) => state.restaurantData,
	loadRestaurantLoader: (state) => state.restaurantLoader,
	loadRestaurantProgress: (state) => state.restaurantProgress,
	loadRestaurantNotification: (state) => state.restaurantNotification,
	loadRestaurantErrors: (state) => state.restaurantErrors,
	loadRestaurantPagination: (state) => state.restaurantPagination,
	loadRestaurantSearch: (state) => state.restaurantSearchResult,
	loadBlockedRestaurants: (state) => state.restaurantBlockedDatas,
	loadActiveRestaurants: (state) => state.activeRestaurants,

}; //Getters calibrace close

const actions = {

	async fetchRestaurantDatas({commit}, uri) {
		commit('setLoading', true)
		let api = uri || '/api/restaurant'
		const response = await axios.get(api);
		commit('setDatas', response.data.data)
		commit('setLoading', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async fetchAllRestaurantDatas({commit}) {
		commit('setLoading', true)
		let api = '/api/restaurant/all'
		const response = await axios.get(api);
		commit('setAll', response.data)
		commit('setLoading', false)
	},

	async fetchBlockedRestaurants({commit}, uri) {
		commit('setLoading', true)
		let api = uri ||'/api/restaurant/blocked'
		const response = await axios.get(api);
		commit('setBlockedDatas', response.data.data)
		commit('setLoading', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async fetchActiveRestaurants({commit}, uri) {
		commit('setLoading', true)
		let api = uri ||'/api/restaurant/active'
		const response = await axios.get(api);
		commit('setActiveDatas', response.data.data)
		commit('setLoading', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async fetchSingleRestaurant({commit}, id) {
		commit('setLoading', true)
		let api = '/api/restaurant/' + id
		const response = await axios.get(api);
		commit('setSingleData', response.data)
		commit('setLoading', false)
	},

	async searchRestaurantDatas({commit}, searchQuery) {
		const response = await axios.get('/api/restaurant/search',{params: {search_query: searchQuery}})
		console.log(searchQuery)
		commit('setSearch', response.data)
	},

	async destroyRestaurantData({commit}, id ) {
		let api = '/api/restaurant/' + id
		const response = await axios.delete(api);
		commit('setNotification', true)
	},

	async createRestaurant({ commit }, data) {
		commit('setProgress', true)
		console.log(...data)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/restaurant', data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'list-restaurant'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async editRestaurantData({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/restaurant/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'list-restaurant'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},


	async updateRestaurantStatus({commit}, {id, status}) {
		commit('setLoading', true)
		let api = '/api/restaurant-status/' + id
		const response = await axios.patch(api, {status:status})
		commit('setLoading', false)
		commit('setNotification', true)
	},


	async clearRestaurantErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearRestaurantNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setDatas: (state, datas) => state.restaurantDatas = datas,
	setAll: (state, allDatas) => state.allRestaurantsDatas = allDatas,
	setSingleData: (state, data) => state.restaurantData = data,

	setNotification: (state, notification) => state.restaurantNotification = notification,
	unsetNotification: (state, notification) => state.restaurantNotification = notification,

	setLoading: (state, loader) => state.restaurantLoader = loader,

	setProgress: (state, progress) => state.restaurantProgress = progress,

	setErrors: (state, errors) => state.restaurantErrors = errors,
	unsetErrors: (state, errors) => state.restaurantErrors = null,

	setNextPageURL: (state, next) => state.restaurantPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.restaurantPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.restaurantPagination.to = to,
	setTotal: (state, total) => state.restaurantPagination.total = total,

	setSearch: (state, search) => state.restaurantSearchResult = search,

	setBlockedDatas: (state, blockedDatas) => state.restaurantBlockedDatas = blockedDatas,
	setActiveDatas: (state, active) => state.activeRestaurants = active,


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

