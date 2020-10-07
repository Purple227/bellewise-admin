
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import Store from './Store'
import Welcome from './Components/Layouts/app.vue'

window.axios = require('axios');
window.axios.defaults.withCredentials = true;


//routes
import routes from './route.js'
// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
export const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})



// Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

Store.dispatch('me').then( () => {

const app = new Vue({
  'router': router,
  'store': Store,
  components:{ 'welcome': Welcome },
}).$mount('#app')


// Now the app has started!

//export { app }

})
