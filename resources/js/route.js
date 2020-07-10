

// Define route components.
// These can be imported from other files
import Home from './Components/Home.vue';
import ListRestaurant from './Components/Restaurant/listRestaurant.vue';
import AddRestaurant from './Components/Restaurant/addRestaurant.vue';
import ViewRestaurant from './Components/Restaurant/viewRestaurant.vue';
import DriverList from './Components/Driver/driverList.vue';
import AddDriver from './Components/Driver/addDriver.vue';
import ViewDriver from './Components/Driver/viewDriver.vue';
import EditDriver from './Components/Driver/editDriver.vue';


const Bar = { template: '<div>bar</div>' }



// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [

{ 
path: '/',
name:'home',
component: Home 
},

{ 
path: '/restaurants',
name:'list-restaurant',
component: ListRestaurant 
},

{ 
path: '/restaurant/add',
name:'add-restaurant',
component: AddRestaurant
},

{ 
path: '/restaurant/crunchies',
name:'view-restaurant',
component: ViewRestaurant
},

{ 
path: '/drivers',
name:'driver-list',
component: DriverList
},

{ 
path: '/driver/add',
name:'add-driver',
component: AddDriver
},

{ 
path: '/driver/name',
name:'view-driver',
component: ViewDriver
},

{ 
path: '/driver/name/edit',
name:'edit-driver',
component: EditDriver
},



{ path: '/bar', component: Bar }

]

export default routes;
