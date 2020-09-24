import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//routes
import { app } from '../../app.js'


const state = {
	menuDatas: [],
	singleMenu: null,
	menuNotification: false,
	menuLoader: true,
	menuProgress: null,
	menuErrors: null,

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

}; //Getters calibrace close

const actions = {

	async fetchMenuDatas({commit}, {uri, id} ) {
		commit('setLoading', true)
		let api = uri || '/api/restaurant-menu/' +id
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


	async fetchSingleMenu({commit}, id) {
		commit('setLoading', true)
		let api = '/api/driver/' + id
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
			app.$router.push({name: 'restaurant-menu'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})
	},

	async editMenuData({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/driver/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setNotification', true)
			commit('setProgress', false)
			app.$router.push({name: 'driver-list'})
		}).catch(error=>{
			let failure = error.response.data
			commit('setErrors', failure)
			commit('setProgress', false)

			setTimeout(() => {
				commit('setErrors', null)
			}, 10000)
		})

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


}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

