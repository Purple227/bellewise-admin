

// Define route components.
// These can be imported from other files
import Home from './Components/Home.vue';

import ListRestaurant from './Components/Restaurant/index.vue';
import AddRestaurant from './Components/Restaurant/addRestaurant.vue';
import ViewRestaurant from './Components/Restaurant/viewRestaurant.vue';
import EditRestaurant from './Components/Restaurant/editRestaurant.vue';

import Menu from './Components/Restaurant/menu.vue';

import Driver from './Components/Driver/index.vue';
import AddDriver from './Components/Driver/addDriver.vue';
import ViewDriver from './Components/Driver/viewDriver.vue';
import EditDriver from './Components/Driver/editDriver.vue';

import OrderList from './Components/Order/orderList.vue';
import ViewOrder from './components/Order/viewOrder.vue';

import UserList from './Components/Users/userList.vue';
import EditUser from './Components/Users/editUser.vue';
import ResetUserPassword from './Components/Users/resetUserPassword.vue';

import SubAdminPermission from './Components/SubAdmin/subAdminPermission.vue';
import SubAdmin from './Components/SubAdmin/index.vue';
import AddSubAdmin from './Components/SubAdmin/addSubAdmin.vue';
import ViewSubAdmin from './Components/SubAdmin/viewSubAdmin.vue';
import EditSubAdmin from './Components/SubAdmin/editSubAdmin.vue';

import ListPromotion from './Components/Promotion/listPromotion.vue';
import AddPromotion from './Components/Promotion/addPromotion.vue';
import EditPromotion from './Components/Promotion/editPromotion.vue';
import ViewPromoRestaurant from './Components/Promotion/viewPromoRestaurant.vue';

import Report from './Components/Report/index.vue';
import Account from './Components/Accounting/index.vue';

import Setting from './Components/Setting/setting.vue';
import Admin from './Components/Admin/index.vue';

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
path: '/admin-access',
name:'admin',
component: Admin
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
path: '/restaurant/:id',
name:'view-restaurant',
component: ViewRestaurant
},

{ 
path: '/restaurant/:id/edit',
name:'edit-restaurant',
component: EditRestaurant
},

{ 
path: '/restaurant/:id/menus',
name:'restaurant-menu',
component: Menu
},

{ 
path: '/drivers',
name:'driver-list',
component: Driver
},

{ 
path: '/driver/add',
name:'add-driver',
component: AddDriver
},

{ 
path: '/driver/:id',
name:'view-driver',
component: ViewDriver
},

{ 
path: '/driver/:id/edit',
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
path: '/sub-admins',
name:'sub-admin-list',
component: SubAdmin
},

{ 
path: '/sub-admin/add',
name:'add-sub-admin',
component: AddSubAdmin
},

{ 
path: '/sub-admin/:id',
name:'view-sub-admin',
component: ViewSubAdmin
},

{ 
path: '/sub-admin/:id/edit',
name:'edit-sub-admin',
component: EditSubAdmin
},

{ 
path: '/subadmin/permissions/:id',
name:'sub-admin-permission',
component: SubAdminPermission
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
path: '/promotions/:id/edit',
name:'edit-promotion',
component: EditPromotion
},

{ 
path: '/promotions/:id',
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
