import Vue from 'vue'


const state = {

	writeUpDatas: {},
	cancellationPolicy: {},
	settingLoader: false,
	settingProgress: false,
	SettingErrors: null,
	writeUpNotification: null,
	cancellationPolicyNotification: null,
	deliveryCharge: {},
	deliveryChargeNotification: null

}; // State calibrace close

const getters = {

	loadWriteUp: (state) => state.writeUpDatas,
	loadCancellationPolicy: (state) => state.cancellationPolicy,
	loadSettingLoader: (state) => state.settingLoader,
	loadWriteUpNotification: (state) => state.writeUpNotification,
	loadSettingErrors: (state) => state.SettingErrors,
	loadSettingProgress: (state) => state.settingProgress,
	loadCancellationPolicyNotification: (state) => state.cancellationPolicyNotification,
	loadDeliveryCharge: (state) => state.deliveryCharge,
	loadDeliveryChargeNotification: (state) => state.deliveryChargeNotification,

}; //Getters calibrace close

const actions = {

	async fetchWriteUp({commit}, id ) {
		commit('setLoading', true)
		let api = '/api/setting/write-up/' + id
		const response = await axios.get(api);
		commit('setWriteUp', response.data)
		commit('setLoading', false)
	},

	async fetchCancellationPolicy({commit}, id ) {
		commit('setLoading', true)
		let api = '/api/setting/cancellation-policy/' + id
		const response = await axios.get(api);
		commit('setCancellationPolicy', response.data)
		commit('setLoading', false)
	},

	async fetchDeliveryCharge({commit}, id ) {
		commit('setLoading', true)
		let api = '/api/setting/dellivery-charge/' + id
		const response = await axios.get(api);
		commit('setDeliveryCharge', response.data)
		commit('setLoading', false)
	},




	async createWriteUp({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/write-up', data, config )
		.then((response) => {
			commit('setWriteUpNotification', true)
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

	async createCancellationPolicy({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/cancellation-policy', data, config )
		.then((response) => {
			commit('setCancellationPolicyNotification', true)
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

	async createDeliveryCharge({ commit }, data) {
		commit('setProgress', true)
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post('/api/setting/dellivery-charge', data, config )
		.then((response) => {
			commit('setDeliveryChargeNotification', true)
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

	async editWriteUp({ commit }, {data, id}) {
		commit('setProgress', true)
		let api = '/api/setting/write-up/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setWriteUpNotification', true)
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

	async editCancellationPolicy({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		console.log(id)
		let api = '/api/setting/cancellation-policy/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setCancellationPolicyNotification', true)
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



	async editDeliveryCharge({ commit }, {data, id}) {
		commit('setProgress', true)
		console.log(...data)
		console.log(id)
		let api = '/api/setting/dellivery-charge/' + id
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const response = await axios.post(api, data, config )
		.then((response) => {
			commit('setDeliveryChargeNotification', true)
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

	async clearSettingErrors ({commit}) {
		commit('unsetErrors')
	},

	async clearWriteUpNotification ({commit}) {
		setTimeout(() => {
			commit('setWriteUpNotification', false)
		}, 10000)
	},

	async clearCancellatonPolicyNotification ({commit}) {
		setTimeout(() => {
			commit('setCancellationPolicyNotification', false)
		}, 10000)
	},

	async clearDeliveryChargeNotification ({commit}) {
		setTimeout(() => {
			commit('setDeliveryChargeNotification', false)
		}, 10000)
	},

}; //Actions calibrace close

const mutations = {

	setWriteUp: (state, data) => state.writeUpDatas = data,
	setCancellationPolicy : (state, datas) => state.cancellationPolicy = datas,
	setDeliveryCharge : (state, datas) => state.deliveryCharge = datas,

	setWriteUpNotification: (state, notification) => state.writeUpNotification = notification,
	setWriteUpNotification: (state, notification) => state.writeUpNotification = notification,

	setCancellationPolicyNotification: (state, notification) => state.cancellationPolicyNotification = notification,
	setCancellationPolicyNotification: (state, notification) => state.cancellationPolicyNotification = notification,

	setDeliveryChargeNotification: (state, notification) => state.deliveryChargeNotification = notification,
	setDeliveryChargeNotification: (state, notification) => state.deliveryChargeNotification = notification,

	setLoading: (state, loading) => state.settingLoader = loading,

	setProgress: (state, progress) => state.settingProgress = progress,

	setErrors: (state, errors) => state.SettingErrors = errors,
	unsetErrors: (state, errors) => state.SettingErrors = null,

}; //Mutations calibrace close

export default {
	state,
	getters,
	actions,
	mutations
};

