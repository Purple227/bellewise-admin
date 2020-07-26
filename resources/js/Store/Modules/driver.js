import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


const state = {
	drivers: [],
	loading: true,
}; // State calibrace close

const getters = {
	
	loadDrivers: (state) => state.drivers,

}; //Getters calibrace close

const actions = {

	async fetchDrivers({commit}) {
		const response = await axios.get('/api/driver');
		commit('setDrivers', response.data)
	},

  async createDriver({ commit }, driver) {
    const response = await axios.post('/api/driver', { driver } );
     console.log(response.data)
    commit('newDriver', response.data);
  },


}; //Actions calibrace close

const mutations = {

	setDrivers: (state, drivers) => (state.drivers = drivers),
	newDriver: (state, drivers) => state.drivers.unshift(drivers),

}; //Mutations calibrace close

export default {
  state,
  getters,
  actions,
  mutations
};

