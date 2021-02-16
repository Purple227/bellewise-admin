import Vue from 'vue'
import {router} from '../../app.js'

//routes
//import { app } from '../../app.js'


const state = {
	orderPendng: null,
	orderConfirmed: null,
	orderNotification: false,
	orderProgress: null,
	orderErrors: null,
	orderHistory: null,
	orderLoader: true,
	orderView: null,
	allOrders: null,

	orderConfirmedCount: null,
	orderPendngCount: null,

	orderSearchResult: null,

	orderPagination: {
		nextPageUrl: null,
		previousPageUrl: null, 
		to: null,
		total: null,
	},

}; // State calibrace close

const getters = {

	loadOrderPending: (state) => state.orderPendng,
	loadOrderPendingCount: (state) => state.orderPendngCount,
	loadAllOrder: (state) => state.allOrders,
	loadOrderConfirmed: (state) => state.orderConfirmed,
	loadOrderConfirmedCount: (state) => state.orderConfirmedCount,
	loadOrderHistory: (state) => state.orderHistory,
	loadOrderProgress: (state) => state.orderProgress,
	loadOrderNotification: (state) => state.orderNotification,
	loadOrderErrors: (state) => state.orderErrors,
	loadOrderPagination: (state) => state.orderPagination,
	loadOrderSearch: (state) => state.orderSearchResult,
	loadSingleOrder: (state) => state.orderView,
	loadOrderLoader: (state) => state.orderLoader,

}; //Getters calibrace close

const actions = {

	async fetchPendingOrder({commit}, uri) {
		commit('setLoader', true)

		let api = uri || 'https://www.bellewisefoods.com/api/order/all/pending'
		const response = await axios.get(api, { withCredentials: false } );
		commit('setPendingData', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)

		commit('setPendingCount', response.data.total)
	},

	async fetchConfirmOrder({commit}, uri) {
		commit('setLoader', true)
		let api = uri ||'https://www.bellewisefoods.com/api/order/all/confirm'
		const response = await axios.get(api, { withCredentials: false } );
		commit('setConfirmData', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)

		commit('setConfirmCount', response.data.total)
	},

	async fetchHistoryOrder({commit}, uri) {
		commit('setLoader', true)
		let api = uri ||'https://www.bellewisefoods.com/api/order'
		const response = await axios.get(api, { withCredentials: false });
		commit('setHistoryData', response.data.data)
		commit('setLoader', false)

		let nextPageUrl = response.data.next_page_url
		commit('setNextPageURL', nextPageUrl)

		let previousPageUrl = response.data.prev_page_url
		commit('setPrePageURL', previousPageUrl)

		commit('setToPage', response.data.to)
		commit('setTotal', response.data.total)
	},

	async fetchAllOrder({commit}, uri) {
		commit('setLoader', true)

		let api = uri || 'https://www.bellewisefoods.com/api/all/order'
		const response = await axios.get(api, { withCredentials: false } );
		commit('setAllData', response.data)
		commit('setLoader', false)
	},

	async fetchSingleOrder({commit}, id) {
		commit('setLoader', true)
		let api = 'https://www.bellewisefoods.com/api/order/' + id
		const response = await axios.get(api, { withCredentials: false } );
		commit('setSingleOrder', response.data)
		commit('setLoader', false)
	},

	async searchOrder({commit}, searchQuery) {
		const response = await axios.get('https://www.bellewisefoods.com/api/order/search', {params: {search_query: searchQuery}})
		commit('setOrderSearch', response.data)
	},

	async updateOrderStatus({commit}, {id, status, phone, orderID}) {
		commit('setLoading', true)
		console.log(status)
		let api = 'https://www.bellewisefoods.com/api/order/' + id
		const response = await axios.patch(api, {status:status, phone:phone, order_id:orderID}, { withCredentials: false } )
		commit('setLoading', false)
		commit('setOrderNotification', true)
	},

	async clearOrderErrors ({commit}) {
		commit('unsetOrderErrors')
	},

	async clearOrderNotification ({commit}) {
		setTimeout(() => {
			commit('unsetOrderNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setPendingData: (state, datas) => state.orderPendng = datas,
	setSingleOrder: (state, data) => state.orderView = data,
	setConfirmData: (state, datas) => state.orderConfirmed = datas,
	setHistoryData: (state, datas) => state.orderHistory = datas,
	setAllData: (state, datas) => state.allOrders = datas,

	setConfirmCount: (state, count) => state.orderConfirmedCount = count,
	setPendingCount: (state, count) => state.orderPendngCount = count,

	setOrderNotification: (state, notification) => state.orderNotification = notification,
	unsetOrderNotification: (state, notification) => state.orderNotification = notification,

	setLoader: (state, loader) => state.orderLoader = loader,

	setOrderProgress: (state, progress) => state.orderProgress = progress,

	setOrderErrors: (state, errors) => state.orderErrors = errors,
	unsetOrderErrors: (state, errors) => state.orderErrors = null,

	setNextPageURL: (state, next) => state.orderPagination.nextPageUrl = next,
	setPrePageURL: (state, previous) => state.orderPagination.previousPageUrl = previous,
	setToPage: (state, to) => state.orderPagination.to = to,
	setTotal: (state, total) => state.orderPagination.total = total,

	setOrderSearch: (state, searchResult) => state.orderSearchResult = searchResult,



}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

