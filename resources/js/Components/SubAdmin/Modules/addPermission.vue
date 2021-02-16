
<template>

	<div class="container"> <!-- Container tag open -->

		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadRoleNotification">
			Task Succeesful
		</div>

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSubAdminLoader && loadRoleLoader }"><span class="title"> Bellewise Loading</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p>
						<strong class="subtitle is-bold"> {{ loadSubAdminSingleData.admin }} Permission </strong> <br>
						<span> {{ loadSubAdminSingleData.email }} </span>
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'sub-admin-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>

		<div class="columns is-multiline"> <!-- Columns wrapper tag open -->


			<div class="column is-4"> <!-- First column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Restaurants
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="restaurant.selectAll" @click="selectAllRestaurantRole">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" value="restaurant.list" v-model="restaurant.list" @click="restaurant.list = !restaurant.list" >
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="restaurant.create" @click="restaurant.create = !restaurant.create">
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="restaurant.update" @click="restaurant.update = !restaurant.update">
									<span class="is-bold"> Update </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="restaurant.block" @click="restaurant.block = !restaurant.block">
									<span class="is-bold"> Block </span>
								</label>
							</div>




							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="restaurant.delete" @click="restaurant.delete = !restaurant.delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- First column tag close -->



			<div class="column is-4"> <!-- Second column tag open-->



				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Drivers
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.selectAll" @click="selectAllDriverRole">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.list" @click="driver.list = !driver.list">
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.create" @click="driver.create = !driver.create"> 
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.update" @click="driver.update = !driver.update">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.block" @click="driver.block = !driver.block">
									<span class="is-bold"> Block </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="driver.delete" @click="driver.delete = !driver.delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Second column tag close -->

			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Promotion
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="promo.selectAll" @click="selectAllPromoRole">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="promo.create" @click="promo.create = !promo.create">
									<span class="is-bold"> Create </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="promo.list" @click="promo.list = !promo.list">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="promo.update" @click="promo.update = !promo.update">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="promo.delete" @click="promo.delete = !promo.delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->


				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Orders
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="order.selectAll" @click="selectAllOrderRole">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="order.list" @click="order.list = !order.list">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="order.confirm" @click="order.confirm = !order.confirm">
									<span class="is-bold"> Confirm </span>
								</label>
							</div>

<!--
							<div class="field">
								<label class="checkbox" >
									<input type="checkbox" v-model="order.reject" @click="order.reject = !order.reject">
									<span class="is-bold"> Reject </span>
								</label>
							</div>
-->

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Users
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="user.selectAll" @click="selectAllUserRole">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox" >
									<input type="checkbox" v-model="user.list" @click="user.list = !user.list">
									<span class="is-bold"> List </span>
								</label>
							</div>

<!--
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="user.block" @click="user.block = !user.block">
									<span class="is-bold"> Block </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="user.resetPassword" @click="user.resetPassword = !user.resetPassword">
									<span class="is-bold"> Reset Password </span>
								</label>
							</div>
-->

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Sub Admins
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="subAdmin" @click="subAdmin = !subAdmin">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="subAdmin" @click="subAdmin = !subAdmin">
									<span class="is-bold"> List </span>
								</label>
							</div>

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


		</div> <!-- Columns wrapper tag close -->


		<div class="field">
			<p class="control">
				<button class="button" v-bind:class="{ 'is-loading': loadRoleProgress }" @click="submitForm">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Save </span>
				</button>
			</p>
		</div>


	</div> <!-- Container tag close -->
	

</template>



<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({

		restaurant: {
			list: false,
			create: false,
			update: false,
			block: false,
			delete: false,
			selectAll: false
		},


		driver: {
			list: false,
			create: false,
			update: false,
			block: false,
			delete: false,
			selectAll: false
		},

		promo: {
			list: false,
			create: false,
			update: false,
			delete: false,
			selectAll: false
		},

		order: {
			list: false,
			confirm: false,
			reject: false,
			selectAll: false
		},

		user: {
			list: false,
			resetPassword: false,
			block: false,
			selectAll: false
		},

		subAdmin: false,

		
	}),

	created() {
		this.setId()
		this.clearRoleNotification()
	},

	methods: {
		...mapActions(['fetchSubAdminSingleData', 'createRole', 'fetchRole', 'clearRoleNotification']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSubAdminSingleData(id)
				this.fetchRole(id)
			},


			submitForm() {

				let data = new FormData();
				data.append("_method", "post");
				data.append('restaurant_list', this.restaurant.list == true ? this.restaurant.list = 1 : this.restaurant.list = 0);
				data.append('restaurant_create', this.restaurant.create == true ? this.restaurant.create = 1 : this.restaurant.create = 0);
				data.append('restaurant_block', this.restaurant.block == true ? this.restaurant.block = 1 : this.restaurant.block = 0);
				data.append('restaurant_delete', this.restaurant.delete == true ? this.restaurant.delete = 1 : this.restaurant.delete = 0);
				data.append('restaurant_update', this.restaurant.update == true ? this.restaurant.update = 1 : this.restaurant.update = 0);

				data.append('driver_update', this.driver.update == true ? this.driver.update = 1 : this.driver.update = 0);
				data.append('driver_list', this.driver.list == true ? this.driver.list = 1 : this.driver.list = 0);
				data.append('driver_create', this.driver.create == true ? this.driver.create = 1 : this.driver.create = 0);
				data.append('driver_block', this.driver.block == true ? this.driver.block = 1 : this.driver.block = 0);
				data.append('driver_delete', this.driver.delete == true ? this.driver.delete = 1 : this.driver.delete = 0);

				data.append('promo_list', this.promo.list == true ? this.promo.list = 1 : this.promo.list = 0);
				data.append('promo_create', this.promo.create == true ? this.promo.create = 1 : this.promo.create = 0);
				data.append('promo_delete', this.promo.delete == true ? this.promo.delete = 1 : this.promo.delete = 0);
				data.append('promo_update', this.promo.update == true ? this.promo.update = 1 : this.promo.update = 0);

				data.append('user_list', this.user.list == true ? this.user.list = 1 : this.user.list = 0);
				data.append('user_block', this.user.block == true ? this.user.block = 1 : this.user.block = 0);
				data.append('user_password_reset', this.user.resetPassword == true ? this.user.resetPassword = 1 : this.user.resetPassword = 0);

				data.append('order_list', this.order.list == true ? this.order.list = 1 : this.order.list = 0);
				data.append('order_confirm', this.order.confirm == true ? this.order.confirm = 1 : this.order.confirm = 0);
				data.append('order_reject', this.order.reject == true ? this.order.reject = 1 : this.order.reject = 0);

				data.append('sub_admin_list', this.subAdmin == true ? this.subAdmin = 1 : this.subAdmin = 0);

				let id = this.$route.params.id
				this.createRole({data, id}).then(() => this.setId() )
			},

		},


		computed: {
			...mapGetters(['loadSubAdminSingleData', 'loadSubAdminLoader', 'loadRole', 'loadRoleNotification', 'loadRoleProgress', 'loadRoleLoader']),
    // Local computed properties

    selectAllRestaurantRole() {
    	for (let key in this.restaurant) {

    		this.restaurant[key] = this.restaurant.selectAll == true ? this.restaurant[key] = true : this.restaurant[key] = false
    	}
    	return this.restaurant
    },

    selectAllDriverRole() {
    	for (let key in this.driver) {
    		this.driver[key] = this.driver.selectAll == true ? this.driver[key] = true : this.driver[key] = false
    	}
    	return this.driver
    },

    selectAllPromoRole() {
    	for (let key in this.promo) {
    		this.promo[key] = this.promo.selectAll == true ? this.promo[key] = true : this.promo[key] = false
    	}
    	return this.promo
    },

    selectAllOrderRole() {
    	for (let key in this.order) {
    		this.order[key] = this.order.selectAll == true ? this.order[key] = true : this.order[key] = false
    	}
    	return this.order
    },

    selectAllUserRole() {
    	for (let key in this.user) {
    		this.user[key] = this.user.selectAll == true ? this.user[key] = true : this.user[key] = false
    	}
    	return this.user
    },

},


}

</script>

