

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

import OrderList from './Components/Order/orderList.vue';
import ViewOrder from './components/Order/viewOrder.vue';

import UserList from './Components/Users/userList.vue';
import EditUser from './Components/Users/editUser.vue';
import ResetUserPassword from './Components/Users/resetUserPassword.vue';

import SubAdminList from './Components/SubAdmin/subAdminList.vue';
import AdminPermission from './Components/SubAdmin/adminPermission.vue';
import AddAdmin from './Components/SubAdmin/AddAdmin.vue';

import ListPromotion from './Components/Promotion/listPromotion.vue';
import AddPromotion from './Components/Promotion/addPromotion.vue';
import EditPromotion from './Components/Promotion/editPromotion.vue';
import ViewPromoRestaurant from './Components/Promotion/viewPromoRestaurant.vue';

import Report from './Components/Report/reports.vue';

import Account from './Components/Accounting/account.vue';

import Setting from './Components/Setting/setting.vue';

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

{ 
path: '/orders',
name:'order-list',
component: OrderList
},

{ 
path: '/orders/1d',
name:'view-order',
component: ViewOrder
},

{ 
path: '/users',
name:'users-list',
component: UserList
},

{ 
path: '/user/edit',
name:'edit-user',
component: EditUser
},

{ 
path: '/user/id/reset',
name:'reset-user-password',
component: ResetUserPassword
},

{ 
path: '/subadmin',
name:'sub-admin-list',
component: SubAdminList
},

{ 
path: '/subadmin/permissions/id',
name:'admin-permission',
component: AdminPermission
},

{ 
path: '/subadmin/add',
name:'add-admin',
component: AddAdmin
},

{ 
path: '/promotions',
name:'list-promotion',
component: ListPromotion
},

{ 
path: '/promotions/add',
name:'add-promotion',
component: AddPromotion
},

{ 
path: '/promotions/id/edit',
name:'edit-promotion',
component: EditPromotion
},

{ 
path: '/promotions/restaurants',
name:'view-promo-restaurants',
component: ViewPromoRestaurant
},

{ 
path: '/reports',
name:'report',
component: Report
},

{ 
path: '/account',
name:'account',
component: Account
},

{ 
path: '/setting',
name:'setting',
component: Setting
},



{ path: '/bar', component: Bar }

]

export default routes;
