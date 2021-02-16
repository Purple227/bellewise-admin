
import Vue from 'vue'
import {router} from '../../app.js'

//routes
//import { app } from '../../app.js'


const state = {
	userData: null,
	allUserData: null,
	userLoader: true,

	userSearchResult: null,

	userPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadUserData: (state) => state.userData,
	loadUserPagination: (state) => state.userPagination,
	loadUserSearch: (state) => state.userSearchResult,
	loadUserLoader: (state) => state.userLoader,
	loadAllUser: (state) => state.allUserData,

}; //Getters calibrace close

const actions = {

	async fetchUsers({commit}, uri) {
		commit('setLoader', true)

		let api = uri || 'https://www.bellewisefoods.com/api/user'
		const response = await axios.get(api, { withCredentials: false } );
		commit('setUserData', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async searchUser({commit}, searchQuery) {
		const response = await axios.get('https://www.bellewisefoods.com/api/user/search', {params: {search_query: searchQuery}})
		commit('setUserSearch', response.data)
	},

	async fetchAllUser({commit}, uri) {
		commit('setLoader', true)

		let api = uri || 'https://www.bellewisefoods.com/api/user/all'
		const response = await axios.get(api, { withCredentials: false } );
		commit('setAllUserData', response.data)
		commit('setLoader', false)
	},



}; //Actions calibrace close

const mutations = {

	setUserData: (state, datas) => state.userData = datas,
	setAllUserData: (state, datas) => state.allUserData,

	setLoader: (state, loader) => state.userLoader = loader,

	setNextPageURL: (state, next) => state.userPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.userPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.userPagination.to = to,
	setTotal: (state, total) => state.userPagination.total = total,

	setUserSearch: (state, searchResult) => state.userSearchResult = searchResult,



}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

