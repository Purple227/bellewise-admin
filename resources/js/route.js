

// Define route components.
// These can be imported from other files
import Home from './Components/Home.vue';
import Permission from './Components/permissionNotification.vue';

import ListRestaurant from './Components/Restaurant/index.vue';
import AddRestaurant from './Components/Restaurant/addRestaurant.vue';
import ViewRestaurant from './Components/Restaurant/viewRestaurant.vue';
import EditRestaurant from './Components/Restaurant/editRestaurant.vue';
import Menu from './Components/Restaurant/menu.vue';
import AddMenu from './Components/Restaurant/addMenu.vue';
import EditMenu from './Components/Restaurant/editMenu.vue';
import RestaurantSetting from './Components/Restaurant/restaurantSetting.vue';

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

import Auth from './Components/Auth/index.vue';
import updateAuth from './Components/Auth/update.vue';
import updateAuthSecurity from './Components/Auth/updateSecurity.vue';

import Store from "./Store"


const Bar = { template: '<div>bar</div>' }

// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [

{ 
	path: '/',
	name:'home',
	component: Home,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthenticated)
		if(Store.getters.loadAuthenticated == true) {
			next()
		} else {
			return next({name:'auth-access'})
		}
	}

},

{ 
	path: '/permission',
	name:'permission-denied',
	component: Permission,
},

{ 
	path: '/auth/access',
	name:'auth-access',
	component: Auth,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthenticated)
		if(Store.getters.loadAuthenticated == false) {
			next()
		} else {
			return next({name:'home'})
		}
	}

},

{ 
	path: '/auth/:id/edit',
	name:'auth-edit',
	component: updateAuth,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthenticated == true) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},


{ 
	path: '/auth-security/:id/edit',
	name:'auth-security',
	component: updateAuthSecurity,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthenticated == true) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},


{ 
	path: '/restaurants',
	name:'list-restaurant',
	component: ListRestaurant,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_list == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}


},

{ 
	path: '/restaurant/add',
	name:'add-restaurant',
	component: AddRestaurant,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant/:id',
	name:'view-restaurant',
	component: ViewRestaurant,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant/:id/edit',
	name:'edit-restaurant',
	component: EditRestaurant,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_update == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant/:id/menus',
	name:'restaurant-menu',
	component: Menu,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant/:id/menu/add',
	name:'add-menu',
	component: AddMenu,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant/:id/menu/edit',
	name:'edit-menu',
	component: EditMenu,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/restaurant-setting/:id',
	name:'restaurant-setting',
	component: RestaurantSetting,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.restaurant_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/drivers',
	name:'driver-list',
	component: Driver,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.driver_list == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/driver/add',
	name:'add-driver',
	component: AddDriver,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.driver_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/driver/:id',
	name:'view-driver',
	component: ViewDriver,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.driver_list == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/driver/:id/edit',
	name:'edit-driver',
	component: EditDriver,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.driver_update == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}


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
	component: SubAdmin,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.sub_admin_list == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/sub-admin/add',
	name:'add-sub-admin',
	component: AddSubAdmin,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/sub-admin/:id',
	name:'view-sub-admin',
	component: ViewSubAdmin,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/sub-admin/:id/edit',
	name:'edit-sub-admin',
	component: EditSubAdmin,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},


{ 
	path: '/subadmin/permissions/:id',
	name:'sub-admin-permission',
	component: SubAdminPermission,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/promotions',
	name:'list-promotion',
	component: ListPromotion,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.promo_list == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/promotions/add',
	name:'add-promotion',
	component: AddPromotion,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.promo_create == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/promotions/:id/edit',
	name:'edit-promotion',
	component: EditPromotion,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin' || Store.getters.loadAuthRole.promo_update == 1) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/promotions/:id',
	name:'view-promo-restaurants',
	component: ViewPromoRestaurant,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthenticated) {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/reports',
	name:'report',
	component: Report,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}

},

{ 
	path: '/account',
	name:'account',
	component: Account
},

{ 
	path: '/setting',
	name:'setting',
	component: Setting,

	beforeEnter: (to, from, next) => {
		console.log(Store.getters.loadAuthUser.admin )
		if(Store.getters.loadAuthUser.admin == 'super_admin') {
			next()
		} else {
			return next({name:'permission-denied'})
		}
	}


},

{ path: '/bar', component: Bar }

]

export default routes;
