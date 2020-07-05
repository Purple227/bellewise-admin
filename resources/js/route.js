


// Define route components.
// These can be imported from other files
import Home from './Components/Home.vue';
import Restaurant from './Components/Restaurant.vue';


const Bar = { template: '<div>bar</div>' }



// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [

  { path: '/',
    name:'home',
    component: Home 
  },

  { path: '/restaurants',
    name:'restaurant',
    component: Restaurant 
  },



  { path: '/bar', component: Bar }

]

export default routes;
