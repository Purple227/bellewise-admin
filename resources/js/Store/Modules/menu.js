import Vue from 'vue'
import {router} from '../../app.js'

const state = {
	menuDatas: [],
	singleMenu: null,
	menuNotification: false,
	menuLoader: true,
	menuProgress: null,
	menuErrors: null,
	activeMenu: null,
	blockedMenu: null,

	menuSearch: [],

	menuPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadMenuDatas: (state) => state.menuDatas,
	loadSingleMenu: (state) => state.singleMenu,
	loadMenuLoader: (state) => state.menuLoader,
	loadMenuProgress: (state) => state.menuProgress,
	loadMenuNotification: (state) => state.menuNotification,
	loadMenuErrors: (state) => state.menuErrors,
	loadMenuPagination: (state) => state.menuPagination,
	loadMenuSearch: (state) => state.menuSearch,
	loadActiveMenus: (state) => state.activeMenu,
	loadBlockedMenus: (state) => state.blockedMenu,

}; //Getters calibrace close

const actions = {

	async fetchMenuDatas({commit}, {uri, id} ) {
		commit('setLoading', true)
		let api = uri || '/api/restaurant-menu/' +id
		const response = await axios.get(api);
		commit('setDatas', response.data.data)
		commit('setLoading', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL')

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},


	async fetchSingleMenu({commit}, id) {
		commit('setLoading', true)
		let api = '/api/restaurant-menu/show/' + id
		const response = await axios.get(api);
		commit('setSingleData', response.data)
		commit('setLoading', false)
	},

	async searchMenuDatas({commit}, {searchQuery, id}) {
		let api = '/api/restaurant-menu/search/' +id
		const response = await axios.get(api ,{params: {search_query: searchQuery}})
		commit('setSearch', response.data)
	},

	async destroyMenuData({commit}, id ) {
		let api = '/api/restaurant-menu/delete/' + id
		const response = await axios.delete(api);
		commit('setNotification', true)
	},

	async createMenuData({ commit }, { data, id } ) {
		commit('setProgress', true)
		let api = '/api/restaurant-menu/create/' + id
		console.log(data)
		console.log(id)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'restaurant-menu'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async editMenuData({ commit }, {data, id, restaurantId}) {
		commit('setProgress', true)
		console.log(restaurantId)
		let api = '/api/restaurant-menu/edit/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			router.push({name: 'restaurant-menu', params: {id: restaurantId } })
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

	},


	async fetchActiveMenus({commit}, {uri, id} ) {
		commit('setLoading', true)
		let api = uri || '/api/restaurant-menu/active/' +id
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

	async fetchBlockedMenus({commit}, {uri, id} ) {
		commit('setLoading', true)
		let api = uri || '/api/restaurant-menu/block/' +id
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

	async updateMenuStatus({commit}, {id, status}) {
		commit('setLoading', true)
		console.log(status)
		let api = '/api/restaurant-menu/status/' + id
		const response = await axios.patch(api, {status:status})
		commit('setLoading', false)
		commit('setNotification', true)
	},

	async clearMenuErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearMenuNotification ({commit}) {
		setTimeout(() => {
			commit('unsetNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setDatas: (state, datas) => state.menuDatas = datas,
	setSingleData: (state, data) => state.singleMenu = data,

	setNotification: (state, notification) => state.menuNotification = notification,
	unsetNotification: (state, notification) => state.menuNotification = notification,

	setLoading: (state, loading) => state.menuLoader = loading,

	setProgress: (state, progress) => state.menuProgress = progress,

	setErrors: (state, errors) => state.menuErrors = errors,
	unsetErrors: (state, errors) => state.menuErrors = null,

	setNextPageURL: (state, next) => state.menuPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.menuPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.menuPagination.to = to,
	setTotal: (state, total) => state.menuPagination.total = total,

	setSearch: (state, searchResult) => state.menuSearch = searchResult,

	setBlockedDatas: (state, blockedDatas) => state.blockedMenu = blockedDatas,
	setActiveDatas: (state, active) => state.activeMenu = active,



}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

