
import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from './Components/Layouts/app.vue'

Vue.use(VueRouter)


//routes
import routes from './route.js'
// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})



// Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  components:{ 'welcome': Welcome },
}).$mount('#app')

// Now the app has started!
