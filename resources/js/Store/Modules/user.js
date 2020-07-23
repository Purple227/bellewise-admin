import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


const state = {
	users: [],
};

const getters = {
	allUsers: (state) => state.users
};

const actions = {
	async fetchUsers({commit}) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		commit('setUsers', response.data)
		console.log(response.data)
	}
};

const mutations = {
	setUsers: (state, users) => (state.users = users) 
};

export default {
  state,
  getters,
  actions,
  mutations
};

